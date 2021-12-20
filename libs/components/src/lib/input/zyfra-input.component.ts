import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { AbstractControl, ControlValueAccessor } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';

@Component({
  selector: 'zyfra-input',
  templateUrl: './zyfra-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraInputComponent extends WrappedFormComponent implements ControlValueAccessor {
  @Input() type: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() iClass: string;
  @Input() spanClass: string;
  @Input() inputClass:
    | string
    | string[]
    | Set<string>
    | {
        [klass: string]: any;
      };
  @Input() disabled: boolean; // TODO remove, use FormControl disabled
  @Input() required: boolean;
  @Input() tooltip: string;
  @Input() tooltipPosition = 'right';

  @Output() onBlur = new EventEmitter<unknown>();

  public get controlRequired(): boolean{
    return !!this.ngControl.control.validator({} as AbstractControl)?.required
  }

  override setDisabledState(isDisabled: boolean): void {
    // do nothing
  }
}
