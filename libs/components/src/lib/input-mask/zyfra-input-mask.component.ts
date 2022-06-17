import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';

@Component({
  selector: 'zyfra-input-mask',
  templateUrl: './zyfra-input-mask.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraInputMaskComponent extends WrappedFormComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() slotChar: string = '_';
  @Input() autoClear: boolean = true;
  @Input() characterPattern: string = '[A-Za-z]';
  @Input() mask: string;
  @Input() unmask: boolean;
  @Input() style: any;
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

  public override setDisabledState(isDisabled: boolean): void {
    // do nothing
  }
}
