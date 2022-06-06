import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-radio-button-example-base',
  templateUrl: './radio-button-example-base.component.html',
  styleUrls: ['./radio-button-example-base.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonExampleBaseComponent {
  @Input() public size: 'm' | 'l' | 's' = 'm';
  public data: string[] = ['First property', 'Second property', 'Third property'];
  public form = new FormControl({ value: this.data[1], disabled: false });
}
