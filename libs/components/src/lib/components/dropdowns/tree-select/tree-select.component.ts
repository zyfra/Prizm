import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Input,
  input,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import {
  PrizmCallFuncPipe,
  PrizmDestroyService,
  PrizmLetDirective,
  PrizmSyncParentDirective,
} from '@prizm-ui/helpers';
import {
  PrizmInputControl,
  PrizmInputHintDirective,
  PrizmInputNgControl,
  PrizmInputTextComponent,
} from '../../input';
import { PrizmInputTreeSearchMatcher } from './model';
import {
  PolymorphContent,
  PrizmDataListComponent,
  PrizmDropdownControllerDirective,
  PrizmDropdownHostComponent,
  prizmIsNativeFocused,
  PrizmLifecycleDirective,
  PrizmNativeFocusableElement,
} from '@prizm-ui/components';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

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
    PrizmInputHintDirective,
    PrizmInputTextComponent,
    ReactiveFormsModule,
    PrizmDataListComponent,
    PrizmLifecycleDirective,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputTreeSelectComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputTreeSelectComponent },
  ],
  hostDirectives: [
    // for sync state with all children
    PrizmSyncParentDirective,
    {
      directive: PrizmDropdownControllerDirective,
      inputs: ['prizmDropdownMinHeight', 'prizmDropdownMaxHeight'],
    },
  ],
})
export class PrizmInputTreeSelectComponent<T> extends PrizmInputNgControl<T> implements ControlValueAccessor {
  searchable = false;
  placeholder = input<string | null>(null);
  transformer = input((v: T): any => v);
  searchMatcher = input<PrizmInputTreeSearchMatcher<T>>(() => true);
  nullContent = input<PolymorphContent | null>(null);
  children = input<(item: T) => T[]>();
  valueTemplate = input<(item: T) => T[]>();
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
  public override writeValue(obj: T): void {
    throw new Error('Method not implemented.');
  }
  public override registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  public override registerOnTouched(fn: any): void {
    this.onChange = fn;
  }
  public override setDisabledState(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
