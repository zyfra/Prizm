import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-panel-with-back',
  templateUrl: './panel-example-with-back.component.html',
  styleUrls: ['./panel-example-with-back.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelExampleWithBackComponent {
  public backClicked(): void {
    // do something with that
  }
}
