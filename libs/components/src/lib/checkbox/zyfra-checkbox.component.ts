import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';

@Component({
  selector: 'zyfra-checkbox',
  templateUrl: './zyfra-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraCheckboxComponent extends WrappedFormComponent implements ControlValueAccessor {
  @Input() binary = true;
  @Input() checkboxIcon = 'zyfra-icon selection-check-simple';
  @Input() model: any;
  @Input() disabled: boolean;
  @Input() label: string;
  @Output() modelChange = new EventEmitter<boolean | null>();

  public override setDisabledState(): void {
    // do nothing
  }
}
