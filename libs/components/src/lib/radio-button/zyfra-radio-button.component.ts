import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  forwardRef,
  ChangeDetectorRef,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

export const RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ZyfraRadioButtonComponent),
  multi: true,
};

@Component({
  selector: 'zyfra-radio-button',
  templateUrl: './zyfra-radio-button.component.html',
  styleUrls: ['./zyfra-radio-button.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RADIO_VALUE_ACCESSOR],
})
export class ZyfraRadioButtonComponent<T> implements ControlValueAccessor {
  @Input() name: string;
  @Input() value: T;
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() tabindex: number;
  @Input() inputId: string;
  @Input() ariaLabelledBy: string;
  @Input() ariaLabel: string;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() labelStyleClass: string;
  @Input() formControlName: string;
  @Input() formControl: FormControl;
  @Input() ngModel: T;

  @Output() ngModelChange: EventEmitter<T> = new EventEmitter();
  @Output() onClick: EventEmitter<PointerEvent> = new EventEmitter();
  @Output() onFocus: EventEmitter<FocusEvent> = new EventEmitter();
  @Output() onBlur: EventEmitter<FocusEvent> = new EventEmitter();

  constructor(private cd: ChangeDetectorRef) {}

  modelChange(value: T): void {
    if (this.formControl) {
      this.formControl.setValue(value);
    }
    this.ngModelChange.emit(this.ngModel);
  }

  handleClick(event: PointerEvent): void {
    this.onClick.emit(event);
  }

  handleFocus(event: FocusEvent): void {
    this.onFocus.emit(event);
  }

  handleBlur(event: FocusEvent): void {
    this.onBlur.emit(event);
  }

  registerOnChange(fn: () => void): void {}

  registerOnTouched(fn: () => void): void {}

  writeValue(value: T): void {
    this.ngModel = value;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
    this.cd.detectChanges();
  }
}
