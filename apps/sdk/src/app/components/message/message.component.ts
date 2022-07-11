import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-message-test-component',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  public value = [
    {
      severity: 'error',
      summary: 'Error',
      detail: 'Сообщение ошибки',
    },
  ];
  public closable = true;
  public style = '';
  public styleClass = '';
  public enableService = true;
  public escape = false;
  public showTransitionOptions = '300ms ease-out';
  public hideTransitionOptions = '200ms cubic-bezier(0.86, 0, 0.07, 1)';
}
