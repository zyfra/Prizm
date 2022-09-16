import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { ZuiMenuItem } from '../../model/zui-menu-item.interface';

@Component({
  selector: 'zui-nav-menu-item',
  templateUrl: './zui-nav-menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiNavMenuItemComponent {
  @Input() item: ZuiMenuItem;
  @Input() itemExtra: TemplateRef<any>;

  @Output() itemClick: EventEmitter<ZuiMenuItem> = new EventEmitter();

  @HostBinding('attr.testId')
  readonly testId = 'zui_nav_menu_item';

  public itemClickHandler(event: MouseEvent, item: ZuiMenuItem): void {
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
