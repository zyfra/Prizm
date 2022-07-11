import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-input-mask-component',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputMaskComponent {
  public modelForInputMask = '';
  public mask = '99-9999';
  public slotChar = ' ';
  public placeholder = '99-999999';
  public label = 'basic imput mask';
}
