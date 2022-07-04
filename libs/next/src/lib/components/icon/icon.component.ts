import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'zui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() iconClass: string = null;
  @Input() size: string | number = 24; // by default
}
