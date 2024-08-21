import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  inject,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  PrizmCallFuncPipe,
  PrizmDestroyService,
  PrizmLetDirective,
  PrizmToObservablePipe,
} from '@prizm-ui/helpers';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { PrizmAbstractTestId, prizmDefaultProp } from '@prizm-ui/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {
  PolymorphOutletDirective,
  PrizmAutoFocusModule,
  PrizmDataListComponent,
  PrizmDropdownHostComponent,
  PrizmInputBlockComponent,
  PrizmInputCommonModule,
  PrizmInputHintModule,
  PrizmInputIconButtonComponent,
  PrizmInputLayoutComponent,
  PrizmInputTextComponent,
  PrizmLifecycleDirective,
  PrizmSelectIdentityMatcher,
  PrizmSelectInputItemComponent,
  PrizmSelectStringify,
} from '@prizm-ui/components';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { BehaviorSubject } from 'rxjs';
import { PRIZM_INPUT_TREE_SELECT_OPTIONS_TOKEN } from './input-tree-select.token';
import { PrizmInputTreeSelectOptions } from './input-tree-select.model';

@Component({
  selector: 'prizm-input-tree-select',
  templateUrl: './input-tree-select.component.html',
  styleUrls: ['./input-tree-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    PolymorphOutletDirective,
    PrizmAutoFocusModule,
    PrizmCallFuncPipe,
    PrizmDataListComponent,
    PrizmDropdownHostComponent,
    PrizmIconsFullComponent,
    PrizmInputBlockComponent,
    PrizmInputCommonModule,
    PrizmInputHintModule,
    PrizmInputIconButtonComponent,
    PrizmInputTextComponent,
    PrizmLetDirective,
    PrizmSelectInputItemComponent,
    PrizmToObservablePipe,
    ReactiveFormsModule,
    FormsModule,
    PrizmLifecycleDirective,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputTreeSelectComponent),
      multi: true,
    },
    PrizmDestroyService,
  ],
  exportAs: 'prizmInputTreeSelect',
})
export class PrizmInputTreeSelectComponent<T> extends PrizmAbstractTestId implements ControlValueAccessor {
  private readonly options: PrizmInputTreeSelectOptions<T> = inject(PRIZM_INPUT_TREE_SELECT_OPTIONS_TOKEN);

  @Input()
  @prizmDefaultProp()
  placeholder = this.options.placeholder;

  @Input()
  @prizmDefaultProp()
  stringify: PrizmSelectStringify<T> = this.options.stringify;

  @Input()
  @prizmDefaultProp()
  identityMatcher: PrizmSelectIdentityMatcher<T> = this.options.identityMatcher;

  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  private value$$ = new BehaviorSubject<T | null>(null);
  public disabled$$ = new BehaviorSubject<boolean>(false);
  public readonly value$ = this.value$$.asObservable();

  readonly layoutComponent = inject(PrizmInputLayoutComponent, {
    optional: true,
  });

  readonly items$$ = new BehaviorSubject([]);
  readonly items$ = this.items$$.asObservable();

  private renderer = inject(Renderer2);
  constructor() {
    super();
  }

  public onChange: (value: T) => void = () => {};
  public onTouched: () => void = () => {};

  public writeValue(obj: T): void {}

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (this.focusableElement?.nativeElement)
      this.renderer.setProperty(this.focusableElement.nativeElement, 'disabled', isDisabled);
  }
}
