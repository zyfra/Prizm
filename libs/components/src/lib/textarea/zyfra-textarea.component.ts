import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'zyfra-textarea',
  templateUrl: './zyfra-textarea.component.html',
})
export class ZyfraTextareaComponent {
  @Input() value: string;
  @Input() rows: number;
  @Input() cols: number;
  @Input() autoResize: boolean;
  @Input() id: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() class: string;
  @Input() disabled: boolean;
  @Input() maxlength: number;
  @Input() minlength: number;
  @Input() label = '';
  @Input() required = false;

  @Output() valueChange = new EventEmitter<string>();
  @Output() onResize = new EventEmitter<unknown>();
}
