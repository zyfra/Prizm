import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-password-test-component',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordComponent {
  public passwordValue = '';
  public label = 'Пароль';
  public promptLabel = 'Введите пароль';
  public weakLabel = 'Слабый пароль';
  public mediumLabel = 'Средний пароль';
  public strongLabel = 'Сильный пароль';
  public toggleMask = true;
  public disabled = false;
  public required = false;
  public mediumRegex =
    '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).';
  public strongRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})';
}
