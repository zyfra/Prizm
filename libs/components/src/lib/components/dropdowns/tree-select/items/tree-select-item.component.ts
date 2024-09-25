import {
  Component,
  EmbeddedViewRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PRIZM_TREE_SELECT_ITEM_CHILDREN, PRIZM_TREE_SELECT_ITEM_LEVEL } from './token';
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
    },
  ],
  imports: [PrizmButtonComponent, NgIf, PrizmIconsFullComponent, PrizmCallFuncPipe, AsyncPipe],
})
export class PrizmTreeSelectItemComponent<T> extends PrizmAbstractTestId implements OnInit {
  @Input() item!: T;
  @Input() value: any;
  @Input() get opened() {
    return this.childrenOpened$$.value;
  }
  set opened(value: boolean) {
    this.childrenOpened$$.next(value);
  }
  @Output() openedChange = new EventEmitter<boolean>();
  override readonly testId_ = 'ui_tree_select_item';
  public children = inject(PRIZM_TREE_SELECT_ITEM_CHILDREN);
  public treeSelectItemDirective = inject(PrizmTreeSelectItemDirective);
  private readonly childrenOpened$$ = new BehaviorSubject(false);
  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);
  private readonly dropdownController = inject(PRIZM_TREE_SELECT_DROPDOWN_CONTROLLER);
  protected readonly treeSelectSelectedDirective = inject(PrizmTreeSelectSelectedDirective);
  private readonly destroy = inject(PrizmDestroyService);
  private readonly disabledDirective = inject(PrizmDisabledDirective, {
    self: true,
  });
  @HostBinding('style.--prizm-tree-select-item-level') level = inject(PRIZM_TREE_SELECT_ITEM_LEVEL);
  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  public readonly viewContainerRef!: ViewContainerRef;
  private renderedChildren: EmbeddedViewRef<any>[] = [];

  @HostListener('click', ['$event']) public _select() {
    if (this.disabledDirective.disabled) return;
    this.select();
  }

  constructor() {
    super();
    this.iconsFullRegistry.registerIcons(prizmIconsChevronMiniRight);
  }

  ngOnInit() {
    this.childrenOpened$$
      .pipe(
        tap(opened => {
          if (opened) {
            this.renderedChildren = this.treeSelectItemDirective.renderChildren(
              this.viewContainerRef!,
              this.children,
              this.level
            );
          } else {
            this.renderedChildren.forEach(item => item.destroy());
          }
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  public select() {
    this.dropdownController.next(false);
    this.treeSelectSelectedDirective.value = this.item;
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

  protected onToggle(event: MouseEvent): void {
    event.stopPropagation();
    this.toggle();
  }
}
