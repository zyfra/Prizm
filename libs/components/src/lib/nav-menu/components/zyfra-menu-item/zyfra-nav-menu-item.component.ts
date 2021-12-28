import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef
} from '@angular/core';
import { ZyfraMenuItem } from '../../model/zyfra-menu-item.interface';

@Component({
  selector: 'zyfra-nav-menu-item',
  templateUrl: './zyfra-nav-menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZyfraNavMenuItemComponent {
  @Input() item: ZyfraMenuItem;
  @Input() itemExtra: TemplateRef<any>;

  @Output() itemClick: EventEmitter<ZyfraMenuItem> = new EventEmitter();

  public itemClickHandler(event: MouseEvent, item: ZyfraMenuItem): void {
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
        item
      });
    }
    this.itemClick.emit(item);
  }

  public onItemKeyDown(event): void {
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
