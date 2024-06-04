import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-radio-button-big-example',
  templateUrl: './radio-button-big-example.component.html',
  styleUrls: ['./radio-button-big-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonBigExampleComponent {
  @Input() public size: 'm' | 'l' | 's' = 'l';
  public data: string[] = ['First property', 'Second property', 'Third property'];
  public form = new UntypedFormControl({ value: this.data[1], disabled: false });
}
