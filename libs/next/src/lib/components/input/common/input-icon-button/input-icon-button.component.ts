import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[zuiInputIconButton]',
  templateUrl: './input-icon-button.component.html',
  styleUrls: ['./input-icon-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiInputIconButtonComponent {
  @Input() size = 16;
  @Input() zuiInputIconButton: string;
}

