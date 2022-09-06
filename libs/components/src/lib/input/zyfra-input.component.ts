import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';
import { CustomInputEvent, HtmlInputEvent } from '../@core/models/events.models';

@Component({
  selector: 'zyfra-input',
  templateUrl: './zyfra-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraInputComponent extends WrappedFormComponent implements ControlValueAccessor {
  @Input() type: string;
  @Input() id: string;
  @Input() placeholder: string = '';
  @Input() label: string;
  @Input() iClass: string;
  @Input() readonly = false;
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
  @Input() tooltipPosition: 'left' | 'right' | 'above' | 'below' = 'right';
  @Input() mini: boolean;

  @Output() onInput = new EventEmitter<CustomInputEvent<string>>();
  @Output() onBlur = new EventEmitter<FocusEvent>();

  public get controlRequired(): boolean {
    return !!this.ngControl.control.validator({} as AbstractControl)?.required;
  }

  public override setDisabledState(isDisabled: boolean): void {
    // do nothing
  }

  public handleInputEvent(event: Event): void {
    const inputEvent = event as HtmlInputEvent<HTMLInputElement>;
    this.onInput.emit({
      value: inputEvent.target.value,
      originalEvent: inputEvent,
    });
  }
}
