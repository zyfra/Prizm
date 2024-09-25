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
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
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
import { skip, takeUntil, tap } from 'rxjs/operators';

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
    NgIf,
    PrizmTreeSelectDataListWrapperComponent,
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
      inputs: ['value'],
      outputs: ['valueChange'],
    },
    {
      directive: PrizmTreeSelectIdentityMatcherDirective,
      inputs: ['identityMatcher'],
    },
  ],
})
export class PrizmInputTreeSelectComponent<T = any>
  extends PrizmInputNgControl<T>
  implements ControlValueAccessor, OnInit
{
  searchable = false;
  @ContentChild(PrizmDataListDirective) dataListDirective?: PrizmDataListDirective;

  @Input()
  placeholder = '';

  @Input()
  selected: any;

  @Input() items?: T[];
  // transformer = input((v: T): any => v);
  // searchMatcher = input<PrizmInputTreeSearchMatcher<T>>(() => true);
  // nullContent = input<PolymorphContent | null>(null);
  // children = input<(item: T) => T[]>();
  // valueTemplate = input<(item: T) => T[]>();
  private readonly treeSelectSelectedDirective = inject(PrizmTreeSelectSelectedDirective);
  public readonly opened$$ = inject(PRIZM_TREE_SELECT_DROPDOWN_CONTROLLER);
  public readonly opened$ = this.opened$$.asObservable();
  @Input()
  identityMatcher = (a: T, b: T) => a == b;
  @Input()
  stringify = (item: T) => item;

  @ViewChild('focusableElementRef', { read: ElementRef })
  public override readonly focusableElement?: ElementRef<HTMLInputElement>;

  override readonly nativeElementType = 'tree-select';
  override readonly hasClearButton = true;
  get nativeFocusableElement(): PrizmNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return prizmIsNativeFocused(this.nativeFocusableElement);
  }

  constructor(private readonly injector_: Injector) {
    super(injector_, null);
  }

  override ngOnInit() {
    super.ngOnInit();

    // this.treeSelectSelectedDirective.value

    this.treeSelectSelectedDirective.selected$
      .pipe(
        skip(1),
        tap(value => this.onChange(value))
        // takeUntil(this.destroy),
      )
      .subscribe();
  }

  public override writeValue(obj: T): void {
    // throw new Error('Method not implemented.');
    this.treeSelectSelectedDirective.value = obj;
    console.log('#mz selected', obj);
  }

  public override registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public override registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  // public override setDisabledState(isDisabled: boolean): void {
  //   // throw new Error('Method not implemented.');
  // }
}
