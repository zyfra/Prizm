import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-radio-button-small-example',
  templateUrl: './radio-button-small-example.component.html',
  styleUrls: ['./radio-button-small-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonSmallExampleComponent {
  @Input() public size: 'm' | 'l' | 's' = 's';
  public data: string[] = ['First property', 'Second property', 'Third property'];
  public form = new UntypedFormControl({ value: this.data[1], disabled: false });
}
