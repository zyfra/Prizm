import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ZyfraMenuAppItem } from '../zyfra-menu-applications.interface';

@Component({
  selector: 'zyfra-menu-applications-item',
  templateUrl: './zyfra-menu-applications-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraMenuApplicationsItemComponent {
  @Input() item: ZyfraMenuAppItem;
  @Input() isActive = false;
}
