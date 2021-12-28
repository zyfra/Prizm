import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export interface TToggleButtonClick {
  originalEvent: PointerEvent;
  checked: boolean;
}

@Component({
  selector: 'zyfra-toggle-button',
  templateUrl: './zyfra-toggle-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraToggleButtonComponent {
  @Input() model = true;
  @Input() onLabel: string = 'confirm';
  @Input() offLabel: string;
  @Input() onIcon = 'zyfra-icon selection-check-simple';
  @Input() offIcon = 'zyfra-icon cancel-close';
  @Input() iconPos: 'left' | 'right' = 'left';
  @Input() disabled: boolean;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() tabindex: number;
  @Input() inputId: string;
  @Input() ariaLabelledBy: string;

  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public handleChange(event: TToggleButtonClick): void {
    this.model = event.checked;
    this.onChange.emit(this.model);
  }
}
