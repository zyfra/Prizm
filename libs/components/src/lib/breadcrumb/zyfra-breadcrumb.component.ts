import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

type ItemClickEvent = { originalEvent: Event; item: MenuItem };

@Component({
  selector: 'zyfra-breadcrumb',
  templateUrl: './zyfra-breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraBreadcrumbComponent {
  @Input() items: MenuItem[] = [];
  @Input() home: MenuItem = { icon: 'zyfra-icon social-home-breadcrumbs' };
  @Input() style: any = null;
  @Input() styleClass: string = null;

  @Output() onItemClick = new EventEmitter<ItemClickEvent>();

  public onItemClickHandler(event: ItemClickEvent): void {
    this.onItemClick.emit(event);
  }
}
