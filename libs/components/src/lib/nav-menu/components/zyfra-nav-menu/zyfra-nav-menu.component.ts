import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ZyfraNavMenuGroupDirective } from '../../directives/nav-menu-group.directive';
import { Router } from '@angular/router';
import { ZyfraMenuItem } from '../../model/zyfra-menu-item.interface';
import { Subject } from 'rxjs';
import { convertToNode } from '../../utils/treeNode.functions';
import {
  DEFAULT_SETTINGS,
  HeaderConfig,
  NavMenuEvent,
  NavMenuSelectionEvent,
  SettingsConfig,
  ToolbarConfig
} from '../../model/nav-menu-config';
import { ZyfraTemplateDirective } from '../../../@core/shared/zyfra-template.module';

@Component({
  selector: 'zyfra-nav-menu',
  templateUrl: './zyfra-nav-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZyfraNavMenuComponent implements AfterViewInit, AfterContentInit, OnDestroy {
  @ViewChild('navMenu') menu: ElementRef;
  @ContentChildren(ZyfraTemplateDirective) templates: QueryList<ZyfraTemplateDirective>;
  @ContentChildren(ZyfraNavMenuGroupDirective) menuGroups: QueryList<ZyfraNavMenuGroupDirective>;
  @Input() menuTitle: string;
  @Input() emptyMessage: string;
  @Input() searchPlaceholder: string = '';
  @Input() toolbarConfig: ToolbarConfig;

  @Input() get settingsConfig(): SettingsConfig {
    return this._settings;
  }

  set settingsConfig(settings: SettingsConfig) {
    if (!settings) {
      return;
    }
    this._settings = { ...DEFAULT_SETTINGS, ...settings };
  };

  @Input() headerConfig: HeaderConfig = {
    settings: false,
    home: false
  };

  @Input() set model(items: ZyfraMenuItem[]) {
    this.nodes = (items || []).map(item => convertToNode(item));
  }

  @Input() set nodes(nodes: TreeNode[]) {
    this._nodes = nodes;
  }

  get nodes(): TreeNode[] {
    return this._nodes;
  }

  @Output() homeClick = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<NavMenuSelectionEvent>();
  @Output() nodeExpand = new EventEmitter<NavMenuEvent>();
  @Output() nodeCollapse = new EventEmitter<NavMenuEvent>();
  @Output() activeItemChange = new EventEmitter<NavMenuEvent>();


  headerExtraTemplate: TemplateRef<any>;
  toolbarExtraTemplate: TemplateRef<any>;
  itemExtraTemplate: TemplateRef<any>;

  settingsPanelConfig: SettingsConfig;
  activeNode: TreeNode;
  groupNodes: TreeNode[][] = [];
  activeGroup: number;

  private _activeNode: TreeNode;
  private _settings: SettingsConfig = DEFAULT_SETTINGS;
  private _nodes: TreeNode[] = [];
  private destroy$ = new Subject();

  constructor(private renderer: Renderer2,
              private viewContainerRef: ViewContainerRef,
              private cdr: ChangeDetectorRef,
              private router: Router
  ) {
  }

  ngAfterContentInit(): void {
    if (this.menuGroups) {
      this.menuGroups.forEach(({ items }: ZyfraNavMenuGroupDirective) => {
        this.groupNodes.push(items.map((item: ZyfraMenuItem) => convertToNode(item)));
      });
    }

    this.templates.forEach((item) => {
      switch (item.zyfraTemplate) {
        case 'header':
          this.headerExtraTemplate = item.templateRef;
          break;
        case 'toolbar':
          this.toolbarExtraTemplate = item.templateRef;
          break;
        case 'menuitem':
          this.itemExtraTemplate = item.templateRef;
          break;
        default:
          break;
      }
    });
  }

  ngAfterViewInit(): void {
    let activeGroup;
    if (this.groupNodes.length) {
      this.groupNodes.some((nodes, groupIndex) =>
        nodes.some((node) => {
          const isActiveGroup = this.hasActive(node);
          if (isActiveGroup) {
            activeGroup = groupIndex;
          }
          return isActiveGroup;
        }));
    } else {
      this.nodes.some(node => this.hasActive(node));
    }
    requestAnimationFrame(() => {
      this.activeNode = this._activeNode;
      this.activeGroup = activeGroup;
      if (this.activeNode) {
        this.expandBranchFrom(this.activeNode);
        setTimeout(() => this.scrollToActiveElement(), 500);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public nodeCollapseHandler(node: TreeNode, groupIndex?: number): void {
    this.nodeCollapse.emit({ item: node.data, groupIndex });
  }

  public nodeExpandHandler(node: TreeNode, groupIndex?: number): void {
    this.nodeExpand.emit({ item: node.data, groupIndex });
  }

  public updateActiveItem(node: TreeNode, groupIndex?: number): void {
    this.activeItemChange.emit({ item: node.data, groupIndex });
  }

  public copyConfig(): void {
    this.settingsPanelConfig = { ...this.settingsConfig };
  }

  public applySettings(): void {
    this.settingsConfig = this.settingsPanelConfig;
  }

  public selectionChangeHandler(selection: TreeNode<ZyfraMenuItem> | TreeNode<ZyfraMenuItem>[], groupIndex?: number): void {
    let selectionData;
    if (selection) {
      selectionData = Array.isArray(selection)
        ? selection.map(node => node.data)
        : selection.data;
    }
    this.selectionChange.emit({ selection: selectionData, groupIndex });
  }

  private hasActive(node: TreeNode): boolean {
    if (this.isSelected(node)) {
      return true;
    }
    if (node.children) {
      return node.children.some(childNode => this.isSelected(childNode) || this.hasActive(childNode));
    }
    return this.isSelected(node);
  }

  private isSelected(node: TreeNode): boolean {
    if (node.data.routerLink) {
      const isActive = this.isActive(node.data);
      if (isActive) {
        node.styleClass = 'active';
        this._activeNode = node;
      }
      return isActive;
    }
    return false;
  }

  private isActive(item: ZyfraMenuItem): boolean {
    return item.routerLink && this.router.isActive(this.router.createUrlTree(item.routerLink), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }

  private expandBranchFrom(node: TreeNode): void {
    if (node.parent) {
      node.parent.expanded = true;
      this.expandBranchFrom(node.parent);
    } else {
      node.expanded = true;
    }
    this.cdr.markForCheck();
  }

  private scrollToActiveElement(): void {
    const activeItem = this.activeElement();
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
  }

  private activeElement(): HTMLElement {
    return this.menu.nativeElement.querySelector('.p-treenode.active');
  }
}
