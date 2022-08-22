import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';
import { ControlValueAccessor } from '@angular/forms';

export interface TToggleButtonClick {
  originalEvent: PointerEvent;
  checked: boolean;
}

@Component({
  selector: 'zyfra-toggle-button',
  templateUrl: './zyfra-toggle-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraToggleButtonComponent extends WrappedFormComponent implements ControlValueAccessor {
  @Input() onLabel: string = 'confirm';
  @Input() offLabel: string;
  @Input() onIcon = 'zyfra-icon selection-check-simple';
  @Input() offIcon = 'zyfra-icon cancel-close';
  @Input() iconPos: 'left' | 'right' = 'left';
  @Input() disabled: boolean; // TODO remove this, use FormControl disable state
  @Input() style: any;
  @Input() styleClass: string;
  @Input() tabindex: number;
  @Input() inputId: string;
  @Input() ariaLabelledBy: string;

  public override setDisabledState(): void {
    // do nothing
  }
}
