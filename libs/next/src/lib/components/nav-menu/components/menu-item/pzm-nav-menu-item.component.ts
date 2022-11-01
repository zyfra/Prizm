import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { PzmMenuItem } from '../../model/zui-menu-item.interface';

@Component({
  selector: 'pzm-nav-menu-item',
  templateUrl: './pzm-nav-menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PzmNavMenuItemComponent {
  @Input() item: PzmMenuItem;
  @Input() itemExtra: TemplateRef<any>;

  @Output() itemClick: EventEmitter<PzmMenuItem> = new EventEmitter();

  @HostBinding('attr.testId')
  readonly testId = 'pzm_nav_menu_item';

  public itemClickHandler(event: MouseEvent, item: PzmMenuItem): void {
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
