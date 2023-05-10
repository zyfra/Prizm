import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmWrappedFormComponent } from '../../@core/value-accessor/prizm-wrapped-form-component.directive';

@Component({
  selector: 'prizm-radio-button',
  templateUrl: './prizm-radio-button.component.html',
  styleUrls: ['./prizm-radio-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PrizmRadioButtonComponent extends PrizmWrappedFormComponent {
  @Input()
  @HostBinding('attr.radio-size')
  size: 's' | 'm' | 'l' = 'm';

  @HostBinding('attr.disabled') get isDisabled(): boolean {
    return this.accessorIsDisabled;
  }

  @Input() value: unknown;
  @Input() name: string;
  @Input() public label: string | null = null;
  @Input() set disabled(isDisabled: boolean) {
    this.accessorIsDisabled = isDisabled;
  }
  @Output() public clickEvent: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() changeEvent: EventEmitter<Event> = new EventEmitter();
  @Output() public focusEvent: EventEmitter<FocusEvent> = new EventEmitter();
  @Output() public focusOutEvent: EventEmitter<FocusEvent> = new EventEmitter();
  @Output() public blurEvent: EventEmitter<FocusEvent> = new EventEmitter();

  @HostBinding('attr.data-testid')
  readonly testId = 'ui_radio_button';

  public onClickEventHandler(event: MouseEvent): void {
    if (!this.accessorIsDisabled) {
      this.clickEvent.emit(event);
    }
  }

  public onFocusEventHandler(event: FocusEvent): void {
    if (!this.accessorIsDisabled) {
      this.focusEvent.emit(event);
    }
  }

  public onFocusOutEventHandler(event: FocusEvent): void {
    if (!this.accessorIsDisabled) {
      this.focusOutEvent.emit(event);
    }
  }

  public onChangeEventHandler(event: Event): void {
    if (!this.accessorIsDisabled) {
      this.changeEvent.emit(event);
    }
  }

  public onBlurEventHandler(event: FocusEvent): void {
    if (!this.accessorIsDisabled) {
      this.blurEvent.emit(event);
    }
  }

  public override setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
