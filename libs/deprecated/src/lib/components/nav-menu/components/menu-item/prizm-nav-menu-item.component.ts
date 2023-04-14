import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { PrizmMenuItem } from '../../model/prizm-menu-item.interface';

@Component({
  selector: 'prizm-nav-menu-item',
  templateUrl: './prizm-nav-menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmNavMenuItemComponent {
  @Input() item: PrizmMenuItem;
  @Input() itemExtra: TemplateRef<any>;

  @Output() itemClick: EventEmitter<PrizmMenuItem> = new EventEmitter();

  @HostBinding('attr.testId')
  readonly testId = 'prizm_nav_menu_item';

  public itemClickHandler(event: MouseEvent, item: PrizmMenuItem): void {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item,
      });
    }
    this.itemClick.emit(item);
  }

  public onItemKeyDown(event: any): void {
    const listItem = event.currentTarget.parentElement;
    switch (event.code) {
      case 'Space':
      case 'Enter':
        if (listItem) {
          listItem.children[0].click();
        }
        event.preventDefault();
        break;
      default:
        break;
    }
  }
}
