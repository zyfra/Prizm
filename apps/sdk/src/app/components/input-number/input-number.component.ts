import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-input-number-component',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberComponent {
  public value = null;
  public suffix = '$';
  public disabled = false;
  public showButtons = true;
  public placeholder = 'Введите число';
  public label = 'Input number';
}
