import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import {
  HierarchicalMenuBuilder,
  HierarchicalMenuCollapsedViewConfig,
  HierarchicalMenuCollapseNodeEvent,
  HierarchicalMenuExpandNodeEvent,
  HierarchicalMenuNode,
  HierarchicalMenuSelectNodeEvent,
  HierarchicalMenuType,
  HierarchicalMenuViewType,
} from '../../../zyfra-hierarchical-menu.interface';

import { TemplatePortal } from '@angular/cdk/portal';
import ZyfraHierarchicalMenuUtils from '../../../common/utils/zyfra-hierarchical-menu-utils';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TreeHierarchicalMenuBuilder } from '../../services/hiierarchical-tree-menu-builder';
import { CollapsedHierarchicalMenuBuilder } from '../../../common/services/hierarchical-collapsed-menu-builder';
import {
  ZUI_HIERARCHICAL_MENU_OPTIONS_TOKEN,
  ZuiHierarchicalMenuOptions,
} from '../../../common/hierarhical-menu-options';
import { styleCSSVariablesObject } from '../../../styles/style-variables';

interface MenuState {
  data: HierarchicalMenuNode[];
  rootId?: string;
  mode?: HierarchicalMenuType;
  opened?: boolean;
}

const defaultMenuState: MenuState = {
  data: [],
  rootId: null,
  mode: null,
  opened: false,
};

@Component({
  selector: 'zyfra-hierarchical-tree-menu',
  templateUrl: './zyfra-hierarchical-tree-menu.component.html',
  styleUrls: [
    '../../../styles/hierarchical-menu.less',
    '../../../styles/hierarchical-menu-list.less',
    '../../../styles/hierarchical-menu-item.less',
  ],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'zyfra-hierarchical-menu' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ZyfraHierarchicalTreeMenuComponent implements OnChanges {
  /**
   * Root node with id='root', all user data must be in the children field of this node
   */
  @Input() root: HierarchicalMenuNode;

  /**
   * ID of the vertex in relation to which the additional menu is built
   */
  @Input() subMenuRootId: string;

  /**
   * ID of the vertex in the main menu to be highlighted if subMenuRootId null
   */
  @Input() mainMenuSelectedNodeId: string;

  /**
   * ID of the vertex in the additional menu to be highlighted
   */
  @Input() subMenuSelectedNodeId: string;

  /**
   * Whether the menu should be displayed in collapsed form
   * @default false
   */
  @Input() collapsed: boolean = false;

  /**
   * EventEmitter on need node collapse
   */
  @Output() nodeCollapse: EventEmitter<HierarchicalMenuCollapseNodeEvent> = new EventEmitter();

  /**
   * EventEmitter on need node expand
   */
  @Output() nodeExpand: EventEmitter<HierarchicalMenuExpandNodeEvent> = new EventEmitter();

  /**
   * EventEmitter on select node
   */
  @Output() selectNode: EventEmitter<HierarchicalMenuSelectNodeEvent> = new EventEmitter();

  /**
   * EventEmitter on need lazy load children
   */
  @Output() needLoadChildren: EventEmitter<HierarchicalMenuNode> = new EventEmitter();

  /**
   * Custom template for content item
   */
  @Input() itemContentTemplate: TemplateRef<unknown>;

  /**
   * Custom template for suffix item
   */
  @Input() suffixItemTemplate: TemplateRef<unknown>;

  /**
   * Template for item options (line with options opened under when click on three points icon)
   */
  @Input() optionsItemTemplate: TemplateRef<unknown>;

  /** overlay menu template ref  */
  @ViewChild('menuRef') menuRef;

  @ViewChild('popoverMenuListRef') popoverMenuListRef;

  @ViewChild('hierarchicalMenu') hierarchicalMenuRef;

  public builder: HierarchicalMenuBuilder;

  public subTree: HierarchicalMenuNode[] = [];
  public mainTree: HierarchicalMenuNode[] = [];
  public popoverMenu: MenuState = defaultMenuState;

  private overlayRef: OverlayRef = null;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay,
    private cd: ChangeDetectorRef,
    private render2: Renderer2,
    @Inject(ZUI_HIERARCHICAL_MENU_OPTIONS_TOKEN) public options: ZuiHierarchicalMenuOptions
  ) {}

  private updatePopoverMenu(currentNodeId?: string, mode?: HierarchicalMenuType): void {
    if (!this.collapsed) {
      return;
    }

    if (mode) this.popoverMenu.mode = mode;
    if (currentNodeId) this.popoverMenu.rootId = currentNodeId;

    this.popoverMenu.data = this.builder.getMenu(this.popoverMenu.rootId, true, this.popoverMenu.mode);
    this.cd.detectChanges();
  }

  public buildHierarchicalMenu(): void {
    this.mainTree = this.builder.getMainMenu();
    this.subTree = this.builder.getAdditionalMenu(this.subMenuRootId);

    this.updatePopoverMenu();
  }

  private prepareDataBeforeBuild(): void {
    // expand our root global node
    this.root = ZyfraHierarchicalMenuUtils.setCollapseStatus(this.root, this.root.id, false);

    // sort items by order
    const dfs = (node: HierarchicalMenuNode): void => {
      if (!node.children) return;

      node.children.sort((a, b): number => {
        if (a.attributes?.order && !b.attributes?.order) return -1;
        if (!a.attributes?.order && b.attributes?.order) return 1;
        return a.attributes?.order - b.attributes?.order;
      });

      for (const child of node.children) {
        dfs(child);
      }
    };
    dfs(this.root);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.root || this.root.children.length === 0) {
      this.mainTree = this.subTree = this.popoverMenu.data = [];
      return;
    }

    if (this.options.popover.closeAfterUpdateSelectItem) {
      if (changes.subMenuRootId || changes.mainMenuSelectedNodeId || changes.subMenuSelectedNodeId) {
        this.closeFolderInCollapsedView();
      }
    }

    if (this.collapsed) {
      this.builder = new CollapsedHierarchicalMenuBuilder(
        this.root,
        this.options.collapsedView as HierarchicalMenuCollapsedViewConfig,
        new TreeHierarchicalMenuBuilder(this.root)
      );
    } else {
      this.builder = new TreeHierarchicalMenuBuilder(this.root);
    }

    this.prepareDataBeforeBuild();
    this.buildHierarchicalMenu();
  }

  public selectNodeHandler(event: HierarchicalMenuSelectNodeEvent, menu: HierarchicalMenuType): void {
    const { target, elementRef } = event;

    if (menu === 'main') {
      this.needLoadChildren.emit(event.target);
    }

    if (this.collapsed && this.options.checkHasChildren(target, menu)) {
      this.updatePopoverMenu(target.id, menu);
      this.popoverMenu.rootId = target.id;
      this.openFolderInCollapsedView(elementRef);
    } else {
      this.selectNode.emit({ target, menu });
      this.closeFolderInCollapsedView();
    }
  }

  public selectNodeHandlerPopoverMenu(event: HierarchicalMenuSelectNodeEvent): void {
    const { target, menu } = event;
    if (menu === 'main') {
      this.needLoadChildren.emit(target);
    }

    this.selectNode.emit({ target, menu });
  }

  public collapseHandler(event: HierarchicalMenuCollapseNodeEvent): void {
    this.nodeCollapse.emit(event);
  }

  public expandHandler(event: HierarchicalMenuExpandNodeEvent): void {
    this.needLoadChildren.emit(event.target);
    this.nodeExpand.emit(event);
  }

  private overlaySetStyleVariables(): void {
    const capitalizer = <T extends string>(s: T): Capitalize<T> =>
      (s.charAt(0).toUpperCase() + s.slice(1)) as Capitalize<T>;
    const style = getComputedStyle(this.hierarchicalMenuRef.nativeElement);

    let finalStyleProperty = '';
    for (const e in styleCSSVariablesObject) {
      for (const prop in styleCSSVariablesObject[e]) {
        const cssVariableKey = `--hierarchicalMenu${capitalizer(e)}${capitalizer(prop)}`;
        const cssVariableValue = style.getPropertyValue(cssVariableKey);
        finalStyleProperty += `${cssVariableKey}:${cssVariableValue};\n`;
      }
    }

    this.render2.setAttribute(this.popoverMenuListRef.elementRef.nativeElement, 'style', finalStyleProperty);
  }

  private openFolderInCollapsedView(elementRef?: ElementRef): void {
    this.popoverMenu.opened = true;

    if (this.options.collapsedView.modeChildrenOpen == 'popover') {
      this.openOverlay(elementRef);
    }
  }

  private closeFolderInCollapsedView(): void {
    this.popoverMenu.opened = false;

    if (this.options.collapsedView.modeChildrenOpen == 'popover') {
      if (this.overlayRef) {
        this.overlayRef.dispose();
      }
    }

    this.cd.detectChanges();
  }

  private openOverlay(elementRef: ElementRef): void {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(elementRef)
      .withPositions([
        {
          originX: 'end',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top',
        },
      ])
      .withPush(false);

    const ref = this.overlay.create({
      backdropClass: '',
      panelClass: this.options.popover.customClass,
      positionStrategy,
      hasBackdrop: true,
    });
    this.overlayRef = ref;

    ref._outsidePointerEvents.subscribe(() => {
      this.closeFolderInCollapsedView();
    });

    const containerPortal = new TemplatePortal(this.menuRef, this.viewContainerRef);
    ref.attach(containerPortal);

    window.requestAnimationFrame(() => this.overlaySetStyleVariables());
  }

  public get elementIdHighlightedInSubMenu(): string {
    if (this.popoverMenu.opened) {
      return this.popoverMenu.rootId;
    }
    return this.subMenuSelectedNodeId;
  }

  public get elementIdHighlightedInPopoverMenu(): string {
    if (this.popoverMenu.mode === 'sub') {
      return this.subMenuSelectedNodeId;
    }
    if (this.popoverMenu.mode === 'main') {
      return this.mainMenuSelectedNodeId;
    }
    return '';
  }
}
