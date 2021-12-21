import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';

@Component({
  selector: 'zyfra-password',
  templateUrl: './zyfra-password.component.html',
})
export class ZyfraPasswordComponent extends WrappedFormComponent implements ControlValueAccessor {
  @Input() promptLabel: string;
  @Input() mediumRegex = '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).';
  @Input() strongRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})';
  @Input() weakLabel: string;
  @Input() mediumLabel: string;
  @Input() strongLabel: string;
  @Input() feedback = true;
  @Input() toggleMask: boolean;
  @Input() appendTo: string;
  @Input() inputStyle: any;
  @Input() inputStyleClass: string;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() disabled: boolean;
  @Input() label = '';
  @Input() required: boolean;

  @Output() onBlur = new EventEmitter<FocusEvent>();
  @Output() onFocus = new EventEmitter<FocusEvent>();
}
