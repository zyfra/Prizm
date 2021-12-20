import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';

@Component({
  selector: 'zyfra-input-mask',
  templateUrl: './zyfra-input-mask.component.html',
})
export class ZyfraInputMaskComponent extends WrappedFormComponent implements ControlValueAccessor {
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
  @Input() tabindex: string;
  @Input() disabled: boolean; // TODO remove, use FormControl disabled
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
  @Output() onComplete = new EventEmitter<void>();
  @Output() onKeydown = new EventEmitter<KeyboardEvent>();
  @Output() onInput = new EventEmitter<KeyboardEvent>();

  override setDisabledState(isDisabled: boolean): void {
    // do nothing
  }
}
