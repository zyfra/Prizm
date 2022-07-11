import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-confirm-dialog-test',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmComponent {
  public message = 'Вы действительно этого хотите?';
  public header = 'Header message';
  public acceptLabel = 'Удалить';
  public rejectLabel = 'Отменить';
  public acceptButtonStyleClass = 'p-button-danger';
  public rejectButtonStyleClass = '';
}
