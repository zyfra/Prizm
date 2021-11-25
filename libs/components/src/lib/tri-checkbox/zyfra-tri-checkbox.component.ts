import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy, Provider, forwardRef, ChangeDetectorRef,
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

const CHECKBOX_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ZyfraTriCheckboxComponent),
  multi: true,
};

@Component({
  selector: 'zyfra-tri-checkbox',
  templateUrl: './zyfra-tri-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CHECKBOX_VALUE_ACCESSOR],
  styles: [],
})
export class ZyfraTriCheckboxComponent implements ControlValueAccessor {
  @Input() name: string;
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() tabindex: number;
  @Input() inputId: string;
  @Input() ariaLabelledBy: string;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() readonly: boolean;
  @Input() model: boolean | null;
  @Input() formControl: FormControl | null;
  @Output() modelChange = new EventEmitter<boolean | null>();
  onModelChange: () => void = () => {};
  onModelTouched: () => void = () => {};

  constructor(private cd: ChangeDetectorRef) {
  }

  onChangeHandler(event: { value: true, originalEvent: PointerEvent }) {
    if (this.formControl) {
      this.formControl.setValue(event.value);
    } else {
      this.model = event.value;
    }
    this.modelChange.emit(this.model);
  }

  registerOnChange(fn: () => void): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onModelTouched = fn;
  }

  writeValue(value: any): void {
    this.model = value;
    this.cd.markForCheck();
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
    this.cd.markForCheck();
  }
}
