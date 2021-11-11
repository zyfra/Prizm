import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'zyfra-password',
  templateUrl: './zyfra-password.component.html',
})
export class ZyfraPasswordComponent {
  @Input() value: string;
  @Input() promptLabel: string;
  @Input() mediumRegex = 'Regex for a medium level password.';
  @Input() strongRegex = 'Regex for a strong level password.';
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
  @Input() required = '';

  @Output() valueChange = new EventEmitter<string>();
  @Output() onBlur = new EventEmitter<FocusEvent>();
  @Output() onFocus = new EventEmitter<FocusEvent>();
}
