import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'zyfra-input',
  templateUrl: './zyfra-input.component.html',
})
export class ZyfraInputComponent {
  @Input() value: string;
  @Input() type: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() iClass: string;
  @Input() spanClass: string;
  @Input() inputClass: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() tooltip: string;
  @Input() tooltipPosition = 'right';

  @Output() valueChange = new EventEmitter<string>();
}
