import { inject, Injectable } from '@angular/core';
import { CustomItem, PersistentExpandedValue } from './interfaces';
import { LOCAL_STORAGE } from '@ng-web-apis/common';

@Injectable()
export class ExpandedItemsService {
  readonly localStorage = inject(LOCAL_STORAGE) as Storage;
  public getItemsExpandedKeys(): PersistentExpandedValue | null {
    const item = localStorage.getItem('EXPANDED_ITEMS_EXAMPLE') ?? null;
    return item && JSON.parse(item);
  }

  public getGroupsExpandedKeys(): PersistentExpandedValue | null {
    const item = localStorage.getItem('EXPANDED_GROUPS_EXAMPLE') ?? null;
    return item && JSON.parse(item);
  }

  public setItemsExpandedKeys(expandedItemsMap: Map<CustomItem, boolean>): void {
    const obj: PersistentExpandedValue = {};
    for (const [item, isExpanded] of expandedItemsMap.entries()) {
      if (isExpanded) {
        obj[item.id] = true;
      }
    }
    localStorage.setItem('EXPANDED_ITEMS_EXAMPLE', JSON.stringify(obj));
  }
  public setGroupsExpandedKeys(expandedGroupsMap: Map<string, boolean>): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const obj: PersistentExpandedValue = Object.fromEntries(expandedGroupsMap);
    localStorage.setItem('EXPANDED_GROUPS_EXAMPLE', JSON.stringify(obj));
  }
}
