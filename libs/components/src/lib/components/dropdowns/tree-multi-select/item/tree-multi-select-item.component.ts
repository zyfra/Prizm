import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Injector,
  Output,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PrizmButtonComponent } from '../../../button';
import { AsyncPipe, NgIf } from '@angular/common';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmCallFuncPipe, PrizmDestroyService, PrizmDisabledDirective } from '@prizm-ui/helpers';
import { PrizmLifecycleDirective } from '../../../../directives';
import {
  PRIZM_TREE_SELECT_ITEM_CHILDREN,
  PRIZM_TREE_SELECT_ITEM_LEVEL,
  PRIZM_TREE_SELECT_ITEM_PARENTS,
} from '../../tree-select/items/token';
import { PrizmTreeSelectIsOpenedDirective } from '../../tree-select/tree-select-is-opened.directive';
import { BehaviorSubject } from 'rxjs';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { PRIZM_TREE_SELECT_DROPDOWN_CONTROLLER } from '../../tree-select/token';
import { prizmIconsChevronMiniRight } from '@prizm-ui/icons/full/source/chevron-mini-right';
import { map, takeUntil, tap } from 'rxjs/operators';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PrizmTreeMultiSelectItemDirective } from './tree-multi-select-item.directive';
import { PrizmTreeMultiSelectSearchDirective } from '../search';
import { PrizmCheckboxComponent } from '../../../checkbox';
import { PrizmTreeMultiSelectSelectedDirective } from '../tree-select-multi-selected.directive';
import { getPrizmLabelPosition } from '../tree-multi-select-checkbox.directive';
import { PrizmTreeMultiSelectModeDirective } from '../mode';

@Component({
  selector: 'prizm-input-tree-multi-select-item',
  templateUrl: './tree-multi-select-item.component.html',
  styleUrl: './tree-multi-select-item.component.less',
  standalone: true,
  providers: [PrizmDestroyService],
  hostDirectives: [
    {
      directive: PrizmDisabledDirective,
      inputs: ['disabled'],
      outputs: ['disabledChange'],
    },
  ],
  imports: [
    PrizmButtonComponent,
    NgIf,
    PrizmIconsFullComponent,
    PrizmCallFuncPipe,
    AsyncPipe,
    PrizmLifecycleDirective,
    PrizmCheckboxComponent,
  ],
})
export class PrizmTreeMultiSelectItemComponent<K> extends PrizmAbstractTestId {
  get opened() {
    return this.childrenOpened$$.value;
  }
  set opened(value: boolean) {
    this.childrenOpened$$.next(value);
  }
  get value() {
    return this.treeSelectItemDirective.prizmInputTreeSelectItem;
  }
  @Output() openedChange = new EventEmitter<boolean>();
  override readonly testId_ = 'ui_tree_multi_select_item';
  public children = inject(PRIZM_TREE_SELECT_ITEM_CHILDREN);
  readonly checkboxPosition = getPrizmLabelPosition();
  public childrenElements: PrizmTreeMultiSelectItemComponent<K>[] = [];
  public cdRef = inject(ChangeDetectorRef);
  public parents = inject(PRIZM_TREE_SELECT_ITEM_PARENTS) as PrizmTreeMultiSelectItemDirective[];
  protected treeSelectSearchDirective = inject(PrizmTreeMultiSelectSearchDirective);
  public treeSelectItemDirective = inject(PrizmTreeMultiSelectItemDirective);
  readonly treeSelectIsOpenedDirective = inject(PrizmTreeSelectIsOpenedDirective);
  protected readonly childrenOpened$$ = new BehaviorSubject(
    this.treeSelectIsOpenedDirective.isOpened(this.treeSelectItemDirective.prizmInputTreeSelectItem)
  );

  protected readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);
  protected readonly dropdownController = inject(PRIZM_TREE_SELECT_DROPDOWN_CONTROLLER);
  protected readonly treeSelectSelectedDirective = inject(PrizmTreeMultiSelectSelectedDirective);
  public readonly destroy = inject(PrizmDestroyService);
  protected readonly injector = inject(Injector);
  public readonly elementRef = inject(ElementRef);
  protected readonly renderer2 = inject(Renderer2);
  protected readonly treeMultiSelectModeDirective = inject(PrizmTreeMultiSelectModeDirective, {
    optional: true,
  });
  protected readonly parent = inject(PrizmTreeMultiSelectItemComponent, {
    skipSelf: true,
    optional: true,
  });
  protected readonly disabledDirective = inject(PrizmDisabledDirective, {
    self: true,
  });
  @HostBinding('style.--prizm-tree-multi-select-item-level') level = inject(PRIZM_TREE_SELECT_ITEM_LEVEL);
  @HostBinding('class.has-children') hasChildren = !!this.children.length;
  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  public readonly viewContainerRef!: ViewContainerRef;
  protected renderedChildren: EmbeddedViewRef<any>[] = [];
  @HostListener('click', ['$event']) protected toggleSelectedStateAfterClick(mouseEvent: MouseEvent) {
    mouseEvent.stopPropagation();
    if (this.disabledDirective.disabled) return;
    this.toggleSelected();
  }

  constructor() {
    super();
    this.iconsFullRegistry.registerIcons(prizmIconsChevronMiniRight);
    this.parent?.childrenElements.push(this);
  }

  ngOnInit() {
    this.initChildrenOpener();
    this.initControllerOnSearch();

    setTimeout(() => this.openIfHasSelectedChildren(), 0);
  }

  protected initChildrenOpener() {
    this.childrenOpened$$
      .pipe(
        tap(opened => {
          if (opened) {
            if (!this.renderedChildren.length)
              this.renderedChildren = this.treeSelectItemDirective.renderChildren(
                this.injector,
                this.viewContainerRef!,
                this.children,
                this.level,
                [this.treeSelectItemDirective, ...this.parents]
              );
          } else {
            this.renderedChildren.forEach(item => item.destroy());
            this.renderedChildren = [];
          }
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  public hasSelectedChildren() {
    if (this.treeMultiSelectModeDirective?.mode() === 'only-current') return false;
    return this.treeSelectSelectedDirective.hasSelectedChildren(
      this.treeSelectItemDirective.prizmInputTreeSelectItem
    );
  }

  public hasAllSelectedChildren() {
    return this.treeSelectSelectedDirective.hasAllSelectedChildren(
      this.treeSelectItemDirective.prizmInputTreeSelectItem
    );
  }

  public openIfHasSelectedChildren() {
    if (this.hasSelectedChildren()) {
      this.open();
      this.show();
    }
  }

  public initControllerOnSearch() {
    this.treeSelectSearchDirective.initItemUpdaterOnSearch(this).pipe(takeUntil(this.destroy)).subscribe();
  }

  /**
   * @public api
   * */
  public select() {
    if (this.isSelected()) {
      return;
    }
    this._select();
  }

  private _select() {
    this.treeSelectSelectedDirective.add(this.treeSelectItemDirective.prizmInputTreeSelectItem);
    if (!this.treeMultiSelectModeDirective || this.treeMultiSelectModeDirective.mode() === 'auto-select') {
      this.safeUpdateParentState();
      this.safeUnselectChildren();
    }
  }

  protected safeUpdateParentState() {
    if (!this.parent) return;
    if (!this.parent.hasAllSelectedChildren()) return;
    this.parent.select();
  }

  protected safeUnselectChildren() {
    if (!this.children?.length) return;
    this.unselectChildren();
  }

  public unselect() {
    const parentSelected = this.parent?.isSelected();
    this.unselectSelf();

    // unselectChildren
    if (!this.treeMultiSelectModeDirective || this.treeMultiSelectModeDirective.mode() === 'auto-select') {
      // unselect parent
      const parents = this.parents.map(i => i.prizmInputTreeSelectItem);
      parents.forEach(parent => this.treeSelectSelectedDirective.unselect(parent));

      this.childrenElements.forEach(child => child.unselect());

      // select children if parent was selected
      if (parentSelected) {
        this.parent!.childrenElements.forEach(child => {
          if (child !== this) child.select();
        });
      }
    }
  }

  public unselectSelf() {
    this.treeSelectSelectedDirective.unselect(this.treeSelectItemDirective.prizmInputTreeSelectItem);
  }

  public unselectChildren() {
    this.childrenElements.forEach(child => {
      child.unselectSelf();
      child.unselectChildren();
    });
  }

  /**
   * @public api
   * */
  public toggleSelected() {
    if (this.isSelected()) {
      this.unselect();
    } else if (this.hasSelectedChildren()) {
      this._select();
    } else {
      this._select();
    }
  }

  /**
   * @public api
   * */
  public toggle(): void {
    if (!this.opened) {
      this.open();
    } else {
      this.close();
    }
  }

  /**
   * @public api
   * */
  public open(): void {
    this.opened = true;
  }

  /**
   * @public api
   * */
  public close(): void {
    this.opened = false;
  }

  /**
   * @public api
   * */
  public hide() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
  }

  /**
   * @public api
   * */
  public show() {
    this.renderer2.removeStyle(this.elementRef.nativeElement, 'display');
  }

  protected onToggle(event: MouseEvent): void {
    event.stopPropagation();
    this.toggle();
  }

  protected isSelected() {
    return this.treeSelectSelectedDirective.isSelfSelected(this.value) || this.isParentSelected();
  }

  protected isSelected$() {
    return this.treeSelectSelectedDirective.selected$.pipe(map(() => this.isSelected()));
  }

  protected isParentSelected() {
    if (!this.parents?.length) return false;
    return (
      this.parents.findIndex(parent =>
        this.treeSelectSelectedDirective.isSelfSelected(parent.prizmInputTreeSelectItem)
      ) !== -1
    );
  }
}
