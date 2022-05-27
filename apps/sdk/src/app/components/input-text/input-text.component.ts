import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'zyfra-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent {
  public inputControl = new FormControl({ value: 'text', disabled: false }, Validators.required);
}
