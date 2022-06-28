import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';

@Component({
  selector: 'zyfra-input-switch',
  templateUrl: './zyfra-input-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraInputSwitchComponent extends WrappedFormComponent implements ControlValueAccessor {
  @Input() style: any;
  @Input() styleClass: string;
  @Input() tabindex: number;
  @Input() inputId: string;
  @Input() name: string;
  @Input() ariaLabelledBy: string;
  @Input() disabled: boolean; // TODO remove, use FormControl disabled
  @Input() readonly: boolean;

  public override setDisabledState(isDisabled: boolean): void {
    // do nothing
  }
}
