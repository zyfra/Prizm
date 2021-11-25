import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'zyfra-icon',
  templateUrl: './zyfra-icon.component.html',
  styleUrls: ['./zyfra-icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraIconComponent {
  @Input() iconClass: string = null;
}
