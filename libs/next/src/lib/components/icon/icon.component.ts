import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'zui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() iconClass: string = null;
  @Input() size: string | number = 16;

  @HostBinding('attr.testId')
  readonly testId = 'zui_icon';
}
