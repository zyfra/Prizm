import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';

@Component({
  selector: 'zyfra-radio-button',
  templateUrl: './zyfra-radio-button.component.html',
  styleUrls: ['./zyfra-radio-button.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraRadioButtonComponent<T> extends WrappedFormComponent implements ControlValueAccessor {
  @Input() name: string;
  @Input() value: T;
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() tabindex: number;
  @Input() inputId: string;
  @Input() ariaLabelledBy: string;
  @Input() ariaLabel: string;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() labelStyleClass: string;
  @Input() formControlName: string;
  @Input() override formControl: FormControl;

  @Output() onClick: EventEmitter<PointerEvent> = new EventEmitter();
  @Output() onFocus: EventEmitter<FocusEvent> = new EventEmitter();
  @Output() onBlur: EventEmitter<FocusEvent> = new EventEmitter();

  public handleClick(event: PointerEvent): void {
    this.onClick.emit(event);
  }

  public handleFocus(event: FocusEvent): void {
    this.onFocus.emit(event);
  }

  public handleBlur(event: FocusEvent): void {
    this.onBlur.emit(event);
  }

  public override setDisabledState(isDisabled: boolean): void {
    // do nothing
  }
}
