import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { traverseAllDeep } from '../helpers/prizm-navigation-menu-items-helpers';
import {
  DEFAULT_EMPTY_MESSAGE_CONFIG,
  DEFAULT_SEARCH_CONFIG,
  DEFAULT_SETTINGS,
  DEFAULT_TOOLBAR_CONFIG,
} from '../defaults';
import {
  InternalPrizmNavigationMenuItem,
  PrizmNavigationMenuEmptyMessageConfig,
  PrizmNavigationMenuItem,
  PrizmNavigationMenuSearchConfig,
  PrizmNavigationMenuSettingsConfig,
  PrizmNavigationMenuToolbarConfig,
} from '../interfaces';
import { PRIZM_NAVIGATION_MENU_SEARCH_CONFIG, PRIZM_NAVIGATION_MENU_SETTINGS_CONFIG } from '../tokens';

interface InternalItemsState<UserItem> {
  [groupId: string]: InternalPrizmNavigationMenuItem<UserItem>[];
}

@Injectable()
export class PrizmNavigationMenuService<
  UserItem extends Omit<PrizmNavigationMenuItem, 'children'> & { children?: UserItem[] }
> {
  private internalItemsState$$ = new BehaviorSubject<InternalItemsState<UserItem>>({});

  private internalToUserMap = new Map<InternalPrizmNavigationMenuItem<UserItem>, UserItem>();
  private userToInternalMap = new Map<UserItem, InternalPrizmNavigationMenuItem<UserItem>>();

  private expandedGroupsMap$$ = new BehaviorSubject<Map<string, boolean>>(new Map());
  private userExpandedItemsMap$$ = new BehaviorSubject<Map<UserItem, boolean>>(new Map());

  private activeItem$$ = new BehaviorSubject<InternalPrizmNavigationMenuItem<UserItem> | null>(null);

  get activeItem(): InternalPrizmNavigationMenuItem<UserItem> | null {
    return this.activeItem$$.value;
  }

  activeItem$: Observable<InternalPrizmNavigationMenuItem<UserItem> | null> =
    this.activeItem$$.asObservable();

  internalExpandedItemsMap: Map<InternalPrizmNavigationMenuItem<UserItem>, boolean> = new Map();

  itemKeyName = 'id';

  /** CONFIGURATION */

  private searchConfig$$ = new BehaviorSubject<PrizmNavigationMenuSearchConfig>({
    ...DEFAULT_SEARCH_CONFIG,
    ...this.searchConfigToken,
  });

  private toolbarConfig$$ = new BehaviorSubject<PrizmNavigationMenuToolbarConfig>(DEFAULT_TOOLBAR_CONFIG);

  private settingsConfig$$ = new BehaviorSubject<PrizmNavigationMenuSettingsConfig>({
    ...DEFAULT_SETTINGS,
    ...this.settingsConfigToken,
    selectionMode: 'single',
  });

  private emptyMessageConfig$$ = new BehaviorSubject<PrizmNavigationMenuEmptyMessageConfig>(
    DEFAULT_EMPTY_MESSAGE_CONFIG
  );

  get settingsConfig(): PrizmNavigationMenuSettingsConfig {
    return this.settingsConfig$$.value;
  }

  get searchConfig(): PrizmNavigationMenuSearchConfig {
    return this.searchConfig$$.value;
  }

  get toolbarConfig(): PrizmNavigationMenuToolbarConfig {
    return this.toolbarConfig$$.value;
  }

  searchConfig$: Observable<PrizmNavigationMenuSearchConfig> = this.searchConfig$$.asObservable();

  toolbarConfig$: Observable<PrizmNavigationMenuToolbarConfig> = this.toolbarConfig$$.asObservable();

  emptyMessageConfig$: Observable<PrizmNavigationMenuEmptyMessageConfig> =
    this.emptyMessageConfig$$.asObservable();

  toolbarIsNotEmpty: boolean;

  /** FORWARD EVENTS */

  activeItemChangedEvent$ = new Subject<UserItem>();

  breadCrumbsChangedEvent$ = new Subject<UserItem[]>();

  expandedItemsMapChangedEvent$ = new Subject<Map<UserItem, boolean>>();

  expandedGroupsMapChangedEvent$ = new Subject<Map<string, boolean>>();

  itemExpandedChangedEvent$ = new Subject<{
    item: UserItem;
    isExpanded: boolean;
  }>();

  groupExpandedChangedEvent$ = new Subject<{
    groupId: string;
    isExpanded: boolean;
  }>();

  constructor(
    @Inject(PRIZM_NAVIGATION_MENU_SEARCH_CONFIG)
    private searchConfigToken: PrizmNavigationMenuSearchConfig,
    @Inject(PRIZM_NAVIGATION_MENU_SETTINGS_CONFIG)
    private settingsConfigToken: PrizmNavigationMenuSettingsConfig
  ) {}

  /** ITEMS RELATED */

  public registerGroupItems(groupId: string, items: UserItem[]): void {
    const internalItems = this.mapToInternalItemsAndUpdateSetMap(items, groupId);

    this.internalItemsState$$.next({
      ...this.internalItemsState$$.value,
      [groupId]: internalItems,
    });

    this.fillInternalExpandedItemsMapWithUser();
  }

  public getGroupItems(groupId: string): Observable<InternalPrizmNavigationMenuItem<UserItem>[]> {
    return this.internalItemsState$$.pipe(map(s => s[groupId] ?? []));
  }

  public getUserItem(internalItem: InternalPrizmNavigationMenuItem<UserItem>): UserItem {
    return this.internalToUserMap.get(internalItem);
  }

  public getInternalItem(userItem: UserItem): InternalPrizmNavigationMenuItem<UserItem> {
    return this.userToInternalMap.get(userItem);
  }

  /** EXPANDED RELATED */

  public registerExpandedItemsMap(expandedItemsMap: Map<UserItem, boolean>): void {
    this.userExpandedItemsMap$$.next(expandedItemsMap);
  }

  public registerExpandedGroupsMap(expandedGroupsMap: Map<string, boolean>): void {
    this.expandedGroupsMap$$.next(expandedGroupsMap);
  }

  public getGroupIsExpanded(groupId: string): boolean {
    return this.expandedGroupsMap$$.value.get(groupId);
  }

  public handleExpandedChanged(event: {
    item: InternalPrizmNavigationMenuItem<UserItem>;
    isExpanded: boolean;
  }): void {
    const userItem = this.getUserItem(event.item);
    this.userExpandedItemsMap$$.value.set(userItem, event.isExpanded);
    this.itemExpandedChangedEvent$.next({
      item: userItem,
      isExpanded: event.isExpanded,
    });
    this.expandedItemsMapChangedEvent$.next(this.userExpandedItemsMap$$.value);
  }

  public handleGroupExpandedChanged(event: { groupId: string; isExpanded: boolean }): void {
    this.expandedGroupsMap$$.value.set(event.groupId, event.isExpanded);
    this.groupExpandedChangedEvent$.next(event);
    this.expandedGroupsMapChangedEvent$.next(this.expandedGroupsMap$$.value);
  }

  public clearExpandedItemsMap(groupId?: string): void {
    if (groupId) {
      const groupItems = this.internalItemsState$$.value[groupId];
      traverseAllDeep(groupItems, internalItem => {
        const userItem = this.getUserItem(internalItem);
        this.internalExpandedItemsMap.delete(internalItem);
        this.userExpandedItemsMap$$.value.delete(userItem);
      });
    } else {
      this.internalExpandedItemsMap.clear();
      this.userExpandedItemsMap$$.value.clear();
    }
  }

  /** ACTIVE RELATED */

  public setActiveItem(userItem: UserItem): void {
    const internal = this.getInternalItem(userItem);
    if (internal !== this.activeItem$$.value) {
      this.activeItem$$.next(internal);
    }
  }

  public handleActiveItemChange(internalItem: InternalPrizmNavigationMenuItem<UserItem>): void {
    if (internalItem.isRubricator) return;

    const userItem = internalItem.breadcrumbs[internalItem.breadcrumbs.length - 1];
    this.activeItem$$.next(internalItem);
    this.activeItemChangedEvent$.next(userItem);
    this.breadCrumbsChangedEvent$.next(internalItem.breadcrumbs);
  }

  /** CONFIGURATION RELATED */

  public setSettingsConfiguration(settingsConfig: PrizmNavigationMenuSettingsConfig): void {
    this.settingsConfig$$.next({ ...DEFAULT_SETTINGS, ...settingsConfig });
  }

  public setSearchConfig(config: PrizmNavigationMenuSearchConfig): void {
    this.searchConfig$$.next({ ...DEFAULT_SEARCH_CONFIG, ...config });
  }

  public setToolbarConfig(config: PrizmNavigationMenuToolbarConfig): void {
    this.toolbarConfig$$.next({ ...DEFAULT_TOOLBAR_CONFIG, ...config });
    this.toolbarIsNotEmpty = Object.values(this.toolbarConfig).some(Boolean);
  }

  public setItemKeyName(itemKeyName: string): void {
    this.itemKeyName = itemKeyName;
  }

  public setEmptyMessageConfig(config: PrizmNavigationMenuEmptyMessageConfig): void {
    this.emptyMessageConfig$$.next(config);
  }

  /** PRIVATE */

  private fillInternalExpandedItemsMapWithUser(): void {
    const entries = this.userExpandedItemsMap$$.value.entries();

    for (const [userItem, isExpanded] of entries) {
      const internalItem = this.getInternalItem(userItem);
      this.internalExpandedItemsMap.set(internalItem, isExpanded);
    }
  }

  private mapToInternalItemsAndUpdateSetMap(
    items: UserItem[],
    groupId: string
  ): InternalPrizmNavigationMenuItem<UserItem>[] {
    return items.map(item => this.mapWithMetadataAndUpdateMaps(item, groupId, null));
  }

  private mapWithMetadataAndUpdateMaps(
    item: UserItem,
    groupId: string,
    parent: InternalPrizmNavigationMenuItem<UserItem> | null
  ): InternalPrizmNavigationMenuItem<UserItem> {
    if (!item.children) {
      const internal: InternalPrizmNavigationMenuItem<UserItem> = {
        ...item,
        groupId,
        parent,
        breadcrumbs: parent ? [...parent.breadcrumbs, item] : [item],
        children: undefined,
      };

      this.internalToUserMap.set(internal, item);
      this.userToInternalMap.set(item, internal);
      return internal;
    }

    const internalWithMappedChildren: InternalPrizmNavigationMenuItem<UserItem> = {
      ...item,
      groupId,
      parent,
      breadcrumbs: parent ? [...parent.breadcrumbs, item] : [item],
      children: [],
    };
    internalWithMappedChildren.children = item.children.map(child =>
      this.mapWithMetadataAndUpdateMaps(child, groupId, internalWithMappedChildren)
    );

    this.internalToUserMap.set(internalWithMappedChildren, item);
    this.userToInternalMap.set(item, internalWithMappedChildren);
    return internalWithMappedChildren;
  }
}
