import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'zyfra-input-mask',
  templateUrl: './zyfra-input-mask.component.html',
})
export class ZyfraInputMaskComponent {
  @Input() value: string;
  @Input() mask: string;
  @Input() type: string;
  @Input() slotChar: string;
  @Input() autoClear: boolean;
  @Input() unmask: boolean;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() placeholder: string;
  @Input() size: number;
  @Input() maxlength: number;
  @Input() tabindex: number;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() name: string;
  @Input() inputId: string;
  @Input() required: boolean;
  @Input() characterPattern: string;
  @Input() autoFocus: boolean;
  @Input() autocomplete: string;
  @Input() ariaLabel: string;
  @Input() ariaRequired: boolean;
  @Input() title: string;
  @Input() label = '';

  @Output() onBlur = new EventEmitter<FocusEvent>();
  @Output() onFocus = new EventEmitter<FocusEvent>();
  @Output() valueChange = new EventEmitter<string>();
  @Output() onComplete = new EventEmitter<void>();
  @Output() onKeydown = new EventEmitter<KeyboardEvent>();
  @Output() onInput = new EventEmitter<KeyboardEvent>();
}
