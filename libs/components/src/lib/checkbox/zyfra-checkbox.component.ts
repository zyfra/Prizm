import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  forwardRef,
  Provider,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

const CHECKBOX_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ZyfraCheckboxComponent),
  multi: true,
};

@Component({
  selector: 'zyfra-checkbox',
  templateUrl: './zyfra-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CHECKBOX_VALUE_ACCESSOR],
})
export class ZyfraCheckboxComponent extends Checkbox implements ControlValueAccessor {
  @Input() binary = true;
  @Input() checkboxIcon = 'zyfra-icon selection-check-simple';
  @Input() model: boolean;
  @Input() disabled: boolean;
  @Output() modelChange = new EventEmitter<boolean | null>();

  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }

  onChangeHandler(event: { checked: boolean; originalEvent: PointerEvent }) {
    if (this.formControl) {
      this.formControl.setValue(event.checked);
    } else {
      this.model = event.checked;
    }
    this.modelChange.emit(this.model);
  }
}
