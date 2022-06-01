import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-checkbox-demo',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  public checked = true;

  public onModelChange(value: boolean): void {
    console.log('Checked value:', value);
  }
}
