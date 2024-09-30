import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  forwardRef,
  inject,
  Injector,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { PrizmCallFuncPipe, PrizmDestroyService, PrizmLetDirective } from '@prizm-ui/helpers';
import { PrizmInputControl, PrizmInputNgControl, PrizmInputTextComponent } from '../../input';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { PrizmDropdownHostComponent } from '../dropdown-host';
import { PrizmDataListComponent, PrizmDataListDirective } from '../../data-list';
import { PrizmLifecycleDirective } from '../../../directives/lifecycle';
import { PrizmNativeFocusableElement } from '../../../types/focusable-element-accessor';
import { prizmIsNativeFocused } from '../../../util';
import { PrizmTreeSelectDataListWrapperComponent } from './tree-select-data-list-wrapper.component';
import { PrizmTreeSelectSelectedDirective } from './tree-select-selected.directive';
import { PRIZM_TREE_SELECT_DROPDOWN_CONTROLLER } from './token';
import { PrizmTreeSelectIdentityMatcherDirective } from './tree-select-identity-matcher.directive';
import { filter, skip, takeUntil, tap } from 'rxjs/operators';
import { PrizmTreeSelectGetChildrenDirective } from './tree-select-get-children.directive';
import { PrizmTreeSelectIsOpenedDirective } from './tree-select-is-opened.directive';
import { PrizmTreeSelectStringifyDirective } from './tree-select-stringify.directive';
import { PrizmTreeSelectSearchDirective } from './search/tree-select-search.directive';
import { PrizmTreeSelectEmptyTextDirective } from './tree-select-empty-text.directive';
import { PrizmTreeSelectSearchLabelDirective } from './tree-select-search-label.directive';
import { PrizmDropdownControllerDirective } from '../../../directives';

@Component({
  selector: 'prizm-input-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    PrizmCallFuncPipe,
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
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputTreeSelectComponent),
      multi: true,
    },
    {
      provide: PRIZM_TREE_SELECT_DROPDOWN_CONTROLLER,
      useFactory: () => new BehaviorSubject(false),
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputTreeSelectComponent },
  ],
  hostDirectives: [
    {
      directive: PrizmTreeSelectSelectedDirective,
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
      directive: PrizmTreeSelectSearchDirective,
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
    {
      directive: PrizmTreeSelectStringifyDirective,
      inputs: ['stringify'],
    },
  ],
})
export class PrizmInputTreeSelectComponent<T = any>
  extends PrizmInputNgControl<T | null>
  implements ControlValueAccessor, OnInit
{
  searchable = false;
  @ContentChild(PrizmDataListDirective) dataListDirective?: PrizmDataListDirective;

  @Input()
  placeholder = '';

  private readonly destroy = inject(PrizmDestroyService);
  public readonly treeSelectSelectedDirective = inject(PrizmTreeSelectSelectedDirective);
  public readonly opened$$ = inject(PRIZM_TREE_SELECT_DROPDOWN_CONTROLLER);
  public readonly treeSelectStringifyDirective = inject(PrizmTreeSelectStringifyDirective);
  public readonly dropdownControllerDirective = inject(PrizmDropdownControllerDirective);
  public readonly opened$ = this.opened$$.asObservable();

  @ViewChild('focusableElementRef', { read: ElementRef })
  public override readonly focusableElement?: ElementRef<HTMLInputElement>;

  override readonly nativeElementType = 'tree-select';
  override readonly hasClearButton = true;
  public currentValue: T | null = null;
  get nativeFocusableElement(): PrizmNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return prizmIsNativeFocused(this.nativeFocusableElement);
  }

  constructor(private readonly injector_: Injector) {
    super(injector_, null);

    this.dropdownControllerDirective.minHeight = 40;
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  public ngAfterViewInit() {
    this.treeSelectSelectedDirective.selected$
      .pipe(
        skip(1),
        filter(i => i !== this.currentValue),
        tap(value => (this.currentValue = value)),
        tap(value => this.onChange(value)),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  public override writeValue(obj: T | null): void {
    super.writeValue(obj);
    this.currentValue = obj;
    this.treeSelectSelectedDirective.value = obj;
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
}
