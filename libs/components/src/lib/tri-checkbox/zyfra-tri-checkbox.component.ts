import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';

@Component({
  selector: 'zyfra-tri-checkbox',
  templateUrl: './zyfra-tri-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraTriCheckboxComponent extends WrappedFormComponent implements ControlValueAccessor {
  @Input() name: string;
  @Input() label: string;
  @Input() disabled: boolean; // TODO remove this, use FormControl disable
  @Input() tabindex: number;
  @Input() inputId: string;
  @Input() ariaLabelledBy: string;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() readonly: boolean;
  @Input() model: boolean | null;
  @Input() checkboxTrueIcon: string = 'pi pi-check';
  @Input() checkboxFalseIcon: string = 'pi pi-times';

  public override setDisabledState(): void {
    // do nothing
  }
}
