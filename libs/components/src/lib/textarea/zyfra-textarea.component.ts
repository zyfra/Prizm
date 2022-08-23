import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';

@Component({
  selector: 'zyfra-textarea',
  templateUrl: './zyfra-textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraTextareaComponent extends WrappedFormComponent implements ControlValueAccessor {
  @Input() rows: number;
  @Input() cols: number;
  @Input() autoResize: boolean;
  @Input() id: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() class: string;
  @Input() disabled: boolean; // TODO remove this, use FormControl disable state
  @Input() maxlength: number;
  @Input() minlength: number;
  @Input() label = '';
  @Input() required = false;
  @Input() readonly = false;

  @Output() onResize = new EventEmitter<unknown>();

  public override setDisabledState(): void {
    // do nothing
  }
}
