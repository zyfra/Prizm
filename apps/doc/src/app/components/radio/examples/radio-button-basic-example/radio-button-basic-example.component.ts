import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-radio-button-basic-example',
  templateUrl: './radio-button-basic-example.component.html',
  styleUrls: ['./radio-button-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonBasicExampleComponent {
  public size: 'm' | 'l' | 's' = 's';
  public data: string[] = ['First property', 'Second property', 'Third property'];
  public form = new UntypedFormControl({ value: this.data[1], disabled: false });
}
