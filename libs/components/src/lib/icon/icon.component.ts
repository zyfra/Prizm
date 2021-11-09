import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'zyfra-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() iconClass: string = null;
}
