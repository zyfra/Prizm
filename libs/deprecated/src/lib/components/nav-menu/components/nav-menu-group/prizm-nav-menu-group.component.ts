import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Tree } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { NavMenuService } from '../../service/selection.service';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { fromRubricatorNodes, getPath } from '../../utils/treeNode.functions';
import { DEFAULT_TOOLBAR_CONFIG, SelectionType, ToolbarConfig, ViewMode } from '../../model/nav-menu-config';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-menu-group-content',
  templateUrl: './prizm-nav-menu-group.component.html',
  styleUrls: ['./prizm-nav-menu-group.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmNavMenuGroupComponent implements OnInit, OnDestroy {
  @ViewChild(Tree) public tree: Tree;
  @ViewChild('folderIcons') public folderIcons: TemplateRef<unknown>;
  @Input() itemExtra: TemplateRef<unknown>;
  @Input() toolbarExtra: TemplateRef<unknown>;
  @Input() emptyMessage: string;
  @Input() search = false;
  @Input() searchPlaceholder: string;

  @Input() set activeNode(node: TreeNode) {
    if (!node) {
      return;
    }
    this.currentFolder = node.parent;
    this.setActiveNode(node);
  }

  get activeNode(): TreeNode {
    return this._activeNode;
  }

  @Input() set nodes(nodes: TreeNode[]) {
    if (!nodes) {
      return;
    }

    this._nodes = nodes;
    this.viewNodes = nodes;
    if (this.toolbarConfig.rubricatorMode) {
      this.rubricatorNodes = fromRubricatorNodes(this.nodes);
    }
  }

  get nodes(): TreeNode[] {
    return this._nodes;
  }

  @HostBinding('attr.testId')
  readonly testId = 'prizm_menu_group_content';

  @Input() set selectionMode(mode: SelectionType) {
    this._selectionMode = mode;
    if (this.tree && this.tree.selection) {
      if (Array.isArray(this.tree.selection) && this._selectionMode === 'single') {
        this.setActiveNode(this.activeNode);
      }
      if (!Array.isArray(this.tree.selection) && this._selectionMode === 'checkbox') {
        this.tree.selection = [this.tree.selection];
      }
    }
  }

  get selectionMode(): SelectionType {
    return this._selectionMode;
  }

  @Input() set toolbarConfig(config: ToolbarConfig) {
    if (!config) {
      return;
    }
    this._toolbarConfig = { ...DEFAULT_TOOLBAR_CONFIG, ...config };
    this.isToolbarNotEmpty = Object.values(this._toolbarConfig).some(value => value);
  }

  get toolbarConfig(): ToolbarConfig {
    return this._toolbarConfig;
  }

  @Output() selectionChange: EventEmitter<TreeNode | TreeNode[]> = new EventEmitter();
  @Output() activeItemChange: EventEmitter<TreeNode> = new EventEmitter();
  @Output() nodeExpand: EventEmitter<TreeNode> = new EventEmitter();
  @Output() nodeCollapse: EventEmitter<TreeNode> = new EventEmitter();

  isToolbarNotEmpty = false;
  viewNodes: TreeNode[] = [];
  viewMode: ViewMode = 'hierarchy';
  currentFolder: TreeNode = null;

  public searchFormControl: UntypedFormControl = new UntypedFormControl('');

  private _selectionMode: SelectionType = 'single';
  private _nodes: TreeNode[] = [];
  private _activeNode: TreeNode;
  private _toolbarConfig: ToolbarConfig = DEFAULT_TOOLBAR_CONFIG;
  private activeRootNode: TreeNode;
  private rubricatorNodes: TreeNode[] = [];
  private pathToActiveNode: unknown[] = [];
  private folderPath: unknown[] = [];
  private destroyed$ = new Subject<void>();

  constructor(
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    private navMenuService: NavMenuService,
    private readonly destroy$: PrizmDestroyService
  ) {}

  ngOnInit(): void {
    this.navMenuService.selection$
      .pipe(
        filter(() => Boolean(this.tree)),
        takeUntil(this.destroyed$)
      )
      .subscribe(value => {
        if (value !== this.activeNode) {
          this.resetActiveParent();
          if (this.selectionMode === 'single') {
            if (this.tree.selection) {
              this.tree.selection = null;
              this.selectionChange.emit(this.tree.selection);
            }
          }
        }
      });

    this.searchFormControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(val => this.changeSearchValue(val ?? ''));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public selectionChangeHandler(selection: TreeNode | TreeNode[]): void {
    this.selectionChange.emit(selection);
  }

  public nodeCollapseHandler(node: TreeNode): void {
    this.nodeCollapse.emit(node);
    this.currentFolder = node.parent;
    this.updateIfHasActiveChild(node);
  }

  public nodeExpandHandler(node: TreeNode): void {
    if (node === this.activeRootNode) {
      this.changeActiveParent();
    }
    this.setCurrentNode(node);
    this.nodeExpand.emit(node);
  }

  public setActiveNode(node: TreeNode): void {
    this.resetActiveParent();
    if (this.selectionMode === 'single') {
      this.tree.selection = node;
      this.selectionChange.emit(this.tree.selection);
      this._activeNode = node;
      this.navMenuService.selectionChange(node);
    } else {
      if (this._activeNode) {
        this._activeNode.styleClass = '';
      }
      this._activeNode = node;
      this._activeNode.styleClass = 'active';
    }
    this.pathToActiveNode = getPath(node);
    if (this.viewMode === 'folder') {
      this.pathToActiveNode = [...this.folderPath, getPath(node)[1]];
    }
    this.activeItemChange.emit(node);
  }

  public toLevelUp(): void {
    this.currentFolder.expanded = false;
    this.nodeCollapseHandler(this.currentFolder);
    this.currentFolder = this.folderPath.pop();
    this.viewNodes = this.currentFolder ? [this.currentFolder] : this.nodes;
    this.cdr.markForCheck();
  }

  public toTop(): void {
    this.collapseBranchFrom(this.currentFolder);
    this.currentFolder = null;
    this.viewNodes = this.nodes;
    this.cdr.markForCheck();
  }

  public closeAll(): void {
    if (this.viewMode === 'folder') {
      this.toTop();
    } else {
      this.collapseAllNodes();
    }
    this.currentFolder = null;
  }

  public changeViewMode(triggeredMode: ViewMode): void {
    if (this.viewMode === 'rubricator') {
      this.currentFolder = null;
    }
    this.viewMode = this.viewMode === triggeredMode ? 'hierarchy' : triggeredMode;
    this.updateViewNodes(this.viewMode);
  }

  public toggleSearch(): void {
    this.changeSearchValue('');
    this.search = !this.search;
  }

  public changeSearchValue(searchString: string): void {
    this.tree._filter(searchString);
  }

  public clearSearchField(field: HTMLInputElement): void {
    field.value = '';
    this.changeSearchValue('');
    field.focus();
  }

  private setCurrentNode(node: TreeNode): void {
    if (this.viewMode === 'folder') {
      this.folderPath.push(this.currentFolder);
      this.viewNodes = [node];
    }
    this.currentFolder = node;
  }

  private resetActiveParent(): void {
    if (this.activeRootNode && this.pathToActiveNode) {
      this.pathToActiveNode.forEach(node => {
        if (node) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          node.styleClass = '';
        }
      });
      this.activeRootNode = null;
    }
  }

  private changeActiveParent(): void {
    if (this.activeRootNode) {
      this.activeRootNode.styleClass = '';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.activeRootNode = this.pathToActiveNode.find(node => node?.styleClass === 'active-root');
    }
  }

  private collapseBranchFrom(node: TreeNode): void {
    this.updateIfHasActiveChild(node);
    node.expanded = false;
    while (this.folderPath.length) {
      const parent = this.folderPath.pop();
      if (parent) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        parent.expanded = false;
      }
      this.updateIfHasActiveChild(parent);
    }
  }

  private collapseAllNodes(excludeBranch?: TreeNode): void {
    this.viewNodes.forEach(node => {
      if (node !== excludeBranch) {
        this.collapseBranch(node);
      }
    });
  }

  private collapseBranch(node: TreeNode): void {
    node.expanded = false;
    if (node.children) {
      node.children.forEach(childNode => {
        this.updateIfHasActiveChild(childNode);
        this.collapseBranch(childNode);
      });
    }
    this.updateIfHasActiveChild(node);
  }

  private updateIfHasActiveChild(node: TreeNode): void {
    if (node && this.pathToActiveNode.includes(node)) {
      this.activeRootNode = node;
      this.activeRootNode.styleClass = 'active-root';
    }
  }

  private updateViewNodes(newMode: ViewMode): void {
    if (newMode === 'rubricator') {
      if (!this.rubricatorNodes.length) {
        this.rubricatorNodes = fromRubricatorNodes(this.nodes);
      }
      this.viewNodes = this.rubricatorNodes;
    } else if (newMode === 'folder') {
      if (this.currentFolder) {
        this.folderPath = getPath(this.currentFolder);
        this.collapseAllNodes(this.folderPath[1] || this.currentFolder);
        this.currentFolder.expanded = true;
      }
      this.viewNodes = this.currentFolder ? [this.currentFolder] : this.nodes;
    } else {
      this.viewNodes = this.nodes;
    }
    if (this.search) {
      this.toggleSearch();
    }
  }
}
