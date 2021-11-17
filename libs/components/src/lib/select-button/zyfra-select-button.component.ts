import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export interface SelectButtonOptionClick<T> {
  index: number;
  option: T;
  originalEvent: PointerEvent;
}

export interface SelectButtonChange<T> {
  index: number;
  value: T;
}

@Component({
  selector: 'zyfra-select-button',
  templateUrl: './zyfra-select-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraSelectButtonComponent<OPTION, VALUE> {
  @Input() options: OPTION[];
  @Input() optionLabel: string;
  @Input() optionValue: string;
  @Input() optionDisabled: string;
  @Input() multiple: boolean;
  @Input() tabindex: number;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() ariaLabelledBy: string;
  @Input() disabled: boolean;
  @Input() dataKey: string;

  /**
   * Optional Change emitter
   */
  @Output() onChange: EventEmitter<SelectButtonChange<VALUE>['value']> = new EventEmitter();

  /**
   * Optional OptionClick emitter
   */
  @Output() onOptionClick: EventEmitter<SelectButtonOptionClick<OPTION>> = new EventEmitter();

  /**
   * Optional Change handler
   */
  handleChange(data: SelectButtonChange<VALUE>): void {
    this.onChange.emit(data.value);
  }

  /**
   * Optional OptionClick handler
   */
  handleOptionClick(data: SelectButtonOptionClick<OPTION>): void {
    this.onOptionClick.emit(data);
  }
}
