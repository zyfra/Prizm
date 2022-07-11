import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-textarea-test',
  templateUrl: './textarea-test.component.html',
  styleUrls: ['./textarea-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaTestComponent {
  public modelForTextArea = '';
  public placeholder = 'Введите текст..';
  public label = 'Какой то заголовок';
}
