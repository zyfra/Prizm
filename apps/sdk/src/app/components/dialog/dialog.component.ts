import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-dialog-test',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  public visible = false;
  public header = 'Header';
  public position = 'top';
}
