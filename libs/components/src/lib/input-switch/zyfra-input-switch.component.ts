import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';

@Component({
  selector: 'zyfra-input-switch',
  templateUrl: './zyfra-input-switch.component.html',
})
export class ZyfraInputSwitchComponent extends WrappedFormComponent implements ControlValueAccessor {
  @Input() style: string;
  @Input() styleClass: string;
  @Input() tabindex: number;
  @Input() inputId: string;
  @Input() name: string;
  @Input() ariaLabelledBy: string;
  @Input() disabled: boolean; // TODO remove, use FormControl disabled
  @Input() readonly: boolean;

  override setDisabledState(isDisabled: boolean): void {
    // do nothing
  }
}
