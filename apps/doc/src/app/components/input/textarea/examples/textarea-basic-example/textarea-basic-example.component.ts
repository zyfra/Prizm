import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'prizm-textarea-basic-example',
  templateUrl: './textarea-basic-example.component.html',
  styleUrls: ['./textarea-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaBasicExampleComponent {
  public value = new FormControl('222', [Validators.required, Validators.maxLength(10)]);
}
