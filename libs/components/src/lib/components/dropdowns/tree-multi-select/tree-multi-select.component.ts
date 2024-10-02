import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  forwardRef,
  HostBinding,
  inject,
  Injector,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import {
  PrizmCallFuncPipe,
  PrizmDestroyService,
  PrizmLetDirective,
  PrizmStringifyFunc,
} from '@prizm-ui/helpers';
import {
  PrizmInputCommonModule,
  PrizmInputControl,
  PrizmInputNgControl,
  PrizmInputTextComponent,
} from '../../input';
import { BehaviorSubject, Subject } from 'rxjs';
import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { PrizmDropdownHostComponent } from '../dropdown-host';
import { PrizmDataListComponent, PrizmDataListDirective } from '../../data-list';
import { PrizmLifecycleDirective } from '../../../directives/lifecycle';
import { PrizmNativeFocusableElement } from '../../../types/focusable-element-accessor';
import { prizmIsNativeFocused } from '../../../util';
import { filter, map, skip, takeUntil, tap } from 'rxjs/operators';
import {
  PolymorphOutletDirective,
  PrizmDropdownControllerDirective,
  PrizmFocusableModule,
} from '../../../directives';
import { PrizmTreeSelectDataListWrapperComponent } from '../tree-select/tree-select-data-list-wrapper.component';
import { PrizmTreeMultiSelectSelectedDirective } from './tree-select-multi-selected.directive';
import { PrizmTreeSelectIsOpenedDirective } from '../tree-select/tree-select-is-opened.directive';
import { PrizmTreeSelectGetChildrenDirective } from '../tree-select/tree-select-get-children.directive';
import { PrizmTreeMultiSelectSearchDirective } from './search';
import { PrizmTreeSelectIdentityMatcherDirective } from '../tree-select/tree-select-identity-matcher.directive';
import { PrizmTreeSelectSearchLabelDirective } from '../tree-select/tree-select-search-label.directive';
import { PrizmTreeSelectEmptyTextDirective } from '../tree-select/tree-select-empty-text.directive';
import { PRIZM_TREE_SELECT_DROPDOWN_CONTROLLER } from '../tree-select/token';
import { PrizmTreeSelectSearchDirective } from '../tree-select/search';
import {
  PrizmChipsComponent,
  PrizmChipsIdentityMatcherDirective,
  PrizmChipsStringifyDirective,
} from '../../chips';
import { PrizmTreeSelectSelectedDirective } from '../tree-select/tree-select-selected.directive';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { prizmIconsMagnifyingGlass, prizmIconsTriangleDown } from '@prizm-ui/icons/full';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { PrizmTreeSelectStringifyDirective } from '../tree-select';

@Component({
  selector: 'prizm-input-tree-multi-select',
  templateUrl: './tree-multi-select.component.html',
  styleUrl: './tree-multi-select.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    PrizmCallFuncPipe,
    PrizmChipsStringifyDirective,
    PrizmChipsIdentityMatcherDirective,
    PrizmDropdownHostComponent,
    PrizmLetDirective,
    PrizmInputTextComponent,
    ReactiveFormsModule,
    PrizmDataListComponent,
    PrizmLifecycleDirective,
    NgTemplateOutlet,
    FormsModule,
    NgIf,
    PrizmTreeSelectDataListWrapperComponent,
    PrizmDropdownControllerDirective,
    PrizmChipsComponent,
    PrizmInputCommonModule,
    PolymorphOutletDirective,
    PrizmIconsFullComponent,
    PrizmFocusableModule,
  ],
  providers: [
    {
      provide: PrizmTreeSelectSelectedDirective,
      useExisting: forwardRef(() => PrizmTreeMultiSelectSelectedDirective),
    },
    {
      provide: PrizmTreeSelectSearchDirective,
      useExisting: forwardRef(() => PrizmTreeMultiSelectSearchDirective),
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputTreeMultiSelectComponent),
      multi: true,
    },
    {
      provide: PRIZM_TREE_SELECT_DROPDOWN_CONTROLLER,
      useFactory: () => new BehaviorSubject(false),
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputTreeMultiSelectComponent },
  ],
  hostDirectives: [
    {
      directive: PrizmTreeMultiSelectSelectedDirective,
      // TODO Check In Demo and uncomment
      // inputs: ['value'],
      // outputs: ['valueChange'],
    },
    {
      directive: PrizmDropdownControllerDirective,
      inputs: [
        'prizmDropdownAlign',
        'prizmDropdownLimitWidth',
        'prizmDropdownMinHeight',
        'prizmDropdownMaxHeight',
      ],
    },
    {
      directive: PrizmTreeSelectEmptyTextDirective,
      inputs: ['emptyListTemplate'],
    },
    {
      directive: PrizmTreeSelectSearchLabelDirective,
      inputs: ['searchLabel'],
    },
    {
      directive: PrizmTreeSelectIdentityMatcherDirective,
      inputs: ['identityMatcher'],
    },
    {
      directive: PrizmTreeSelectStringifyDirective,
      inputs: ['stringify'],
    },
    {
      directive: PrizmTreeMultiSelectSearchDirective,
      inputs: ['searchable', 'searchFilter', 'searchMapper', 'searchMatcher', 'searchDebounce'],
      outputs: ['searched'],
    },
    {
      directive: PrizmTreeSelectGetChildrenDirective,
      inputs: ['getChildren'],
    },
    {
      directive: PrizmTreeSelectIsOpenedDirective,
      inputs: ['isOpened'],
    },
  ],
})
export class PrizmInputTreeMultiSelectComponent<T = any>
  extends PrizmInputNgControl<T[] | null>
  implements ControlValueAccessor, OnInit
{
  searchable = false;
  override hidden = true;
  readonly button_layout_width = 64;

  @ContentChild(PrizmDataListDirective) dataListDirective?: PrizmDataListDirective;

  @HostBinding('style.display')
  get display(): string {
    return this.treeSelectSelectedDirective?.value?.length ? 'none' : '';
  }

  @HostBinding('class.empty')
  get emptyChips(): boolean {
    return this.empty;
  }

  @Input()
  icon: string | null = null;
  @Input()
  placeholder = '';
  @HostBinding('attr.data-size')
  get size(): string {
    return this.layoutComponent?.size ?? 'l';
  }

  @HostBinding('class.inner')
  get inner(): boolean {
    return !this.layoutComponent?.outer ?? false;
  }

  @Input()
  isChipsDeletable = true;
  public readonly defaultIcon = 'triangle-down';

  private readonly destroy = inject(PrizmDestroyService);
  public readonly treeSelectSelectedDirective = inject(PrizmTreeMultiSelectSelectedDirective<T>);
  public readonly opened$$ = inject(PRIZM_TREE_SELECT_DROPDOWN_CONTROLLER);
  public readonly treeSelectStringifyDirective = inject(PrizmTreeSelectStringifyDirective<T>, {
    host: true,
  });
  public readonly dropdownControllerDirective = inject(PrizmDropdownControllerDirective);
  public readonly opened$ = this.opened$$.asObservable();

  @ViewChild('focusableElementRef', { read: ElementRef })
  public override readonly focusableElement?: ElementRef<HTMLInputElement>;

  readonly focused$$ = new Subject<boolean>();
  readonly focused$ = this.focused$$.asObservable();

  override get empty(): boolean {
    return !this.treeSelectSelectedDirective?.value?.length;
  }
  override readonly nativeElementType = 'tree-select';
  override readonly hasClearButton = true;
  public currentValue: any = null;
  protected readonly selectedItemsChips$ = this.treeSelectSelectedDirective.selected$.pipe(
    map(items => (items ?? []).map(item => item))
  );
  get nativeFocusableElement(): PrizmNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return prizmIsNativeFocused(this.nativeFocusableElement);
  }

  readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);
  constructor(private readonly injector_: Injector) {
    super(injector_, null);

    this.dropdownControllerDirective.minHeight = 40;
    this.iconsFullRegistry.registerIcons(prizmIconsTriangleDown, prizmIconsMagnifyingGlass);
  }

  override ngOnInit() {
    super.ngOnInit();

    this.initParentClickListener();

    this.layoutComponent?.changes$
      .pipe(
        tap(() => this.changeDetectorRef.detectChanges()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public ngAfterViewInit() {
    this.treeSelectSelectedDirective.selected$
      .pipe(
        skip(1),
        filter(i => i !== this.currentValue),
        tap(value => (this.currentValue = value)),
        tap(value => this.onChange(value as any)),
        takeUntil(this.destroy)
      )
      .subscribe();
  }
  protected initParentClickListener(): void {
    this.layoutComponent?.innerClick$
      .pipe(
        tap(() => this.opened$$.next(this.disabled ? false : !this.opened$$.value)),
        tap(() => this.changeDetectorRef.markForCheck()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public override writeValue(obj: T[] | null): void {
    super.writeValue(obj);
    this.currentValue = obj;
    this.treeSelectSelectedDirective.value = obj as any;
  }

  public override registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public override registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public override clear() {
    this.writeValue(null);
    this.onChange(null);
    this.onTouch();
  }

  public removeChip(item: T): void {
    this.treeSelectSelectedDirective.unselect(item);
  }

  public readonly chipsStringify: PrizmStringifyFunc<T> = item => {
    return (item && this.treeSelectStringifyDirective.stringify(item)) ?? '';
  };

  public safeOpenModal(): void {
    const inputElement = this.focusableElement?.nativeElement;
    const open = !this.opened$$.value && !this.disabled && !!inputElement;
    this.opened$$.next(open);
  }
}
