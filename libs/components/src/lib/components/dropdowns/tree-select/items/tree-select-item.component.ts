import {
  Component,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Injector,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import {
  PRIZM_TREE_SELECT_ITEM_CHILDREN,
  PRIZM_TREE_SELECT_ITEM_LEVEL,
  PRIZM_TREE_SELECT_ITEM_PARENTS,
} from './token';
import { PrizmButtonComponent } from '../../../button';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsChevronMiniRight } from '@prizm-ui/icons/full';
import { AsyncPipe, NgIf } from '@angular/common';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmTreeSelectItemDirective } from './tree-select-item.directive';
import { BehaviorSubject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmCallFuncPipe, PrizmDestroyService, PrizmDisabledDirective } from '@prizm-ui/helpers';
import { PRIZM_TREE_SELECT_DROPDOWN_CONTROLLER } from '../token';
import { PrizmTreeSelectSelectedDirective } from '../tree-select-selected.directive';
import { PrizmTreeSelectIsOpenedDirective } from '../tree-select-is-opened.directive';
import { PrizmTreeSelectSearchDirective } from '../search';
import { PrizmLifecycleDirective } from '../../../../directives';

@Component({
  selector: 'prizm-input-tree-select-item',
  templateUrl: './tree-select-item.component.html',
  styleUrl: './tree-select-item.component.less',
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
  ],
})
export class PrizmTreeSelectItemComponent<T> extends PrizmAbstractTestId implements OnInit {
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
  override readonly testId_ = 'ui_tree_select_item';
  public children = inject(PRIZM_TREE_SELECT_ITEM_CHILDREN);
  public parents = inject(PRIZM_TREE_SELECT_ITEM_PARENTS);
  protected treeSelectSearchDirective = inject(PrizmTreeSelectSearchDirective);
  public treeSelectItemDirective = inject(PrizmTreeSelectItemDirective);
  readonly treeSelectIsOpenedDirective = inject(PrizmTreeSelectIsOpenedDirective);
  protected readonly childrenOpened$$ = new BehaviorSubject(
    this.treeSelectIsOpenedDirective.isOpened(this.treeSelectItemDirective.prizmInputTreeSelectItem)
  );
  protected readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);
  protected readonly dropdownController = inject(PRIZM_TREE_SELECT_DROPDOWN_CONTROLLER);
  protected readonly treeSelectSelectedDirective = inject(PrizmTreeSelectSelectedDirective);
  public readonly destroy = inject(PrizmDestroyService);
  protected readonly injector = inject(Injector);
  public readonly elementRef = inject(ElementRef);
  protected readonly renderer2 = inject(Renderer2);
  protected readonly parent = inject(PrizmTreeSelectItemComponent, {
    skipSelf: true,
    optional: true,
  });
  protected readonly disabledDirective = inject(PrizmDisabledDirective, {
    self: true,
  });
  @HostBinding('style.--prizm-tree-select-item-level') level = inject(PRIZM_TREE_SELECT_ITEM_LEVEL);
  @HostBinding('class.has-children') hasChildren = !!this.children.length;
  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  public readonly viewContainerRef!: ViewContainerRef;
  protected renderedChildren: EmbeddedViewRef<any>[] = [];

  @HostListener('click', ['$event']) public _select(mouseEvent: MouseEvent) {
    mouseEvent.stopPropagation();
    if (this.disabledDirective.disabled) return;
    this.select();
  }

  constructor() {
    super();
    this.iconsFullRegistry.registerIcons(prizmIconsChevronMiniRight);
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

  public openIfHasSelectedChildren() {
    const hasSelectedChildren = this.treeSelectSelectedDirective.hasSelectedChildren(
      this.treeSelectItemDirective.prizmInputTreeSelectItem
    );
    if (hasSelectedChildren) {
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
    this.treeSelectSelectedDirective.value = this.value;
    this.dropdownController.next(false);
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
}
