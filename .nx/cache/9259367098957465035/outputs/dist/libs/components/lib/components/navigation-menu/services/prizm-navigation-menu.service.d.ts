import { Observable, Subject } from 'rxjs';
import { InternalPrizmNavigationMenuItem, PrizmNavigationMenuEmptyMessageConfig, PrizmNavigationMenuItem, PrizmNavigationMenuSearchConfig, PrizmNavigationMenuSettingsConfig, PrizmNavigationMenuToolbarConfig } from '../interfaces';
import * as i0 from "@angular/core";
export declare class PrizmNavigationMenuService<UserItem extends Omit<PrizmNavigationMenuItem, 'children'> & {
    children?: UserItem[];
}> {
    private searchConfigToken;
    private settingsConfigToken;
    private internalItemsState$$;
    private internalToUserMap;
    private userToInternalMap;
    private expandedGroupsMap$$;
    private userExpandedItemsMap$$;
    private activeItem$$;
    get activeItem(): InternalPrizmNavigationMenuItem<UserItem> | null;
    activeItem$: Observable<InternalPrizmNavigationMenuItem<UserItem> | null>;
    internalExpandedItemsMap: Map<InternalPrizmNavigationMenuItem<UserItem>, boolean>;
    itemKeyName: string;
    /** CONFIGURATION */
    private searchConfig$$;
    private toolbarConfig$$;
    private settingsConfig$$;
    private emptySearchResultMessageConfig$$;
    private emptyDataMessageConfig$$;
    get settingsConfig(): PrizmNavigationMenuSettingsConfig;
    get searchConfig(): PrizmNavigationMenuSearchConfig;
    get toolbarConfig(): PrizmNavigationMenuToolbarConfig;
    searchConfig$: Observable<PrizmNavigationMenuSearchConfig>;
    toolbarConfig$: Observable<PrizmNavigationMenuToolbarConfig>;
    emptySearchResultMessageConfig$: Observable<PrizmNavigationMenuEmptyMessageConfig>;
    emptyDataMessageConfig$: Observable<PrizmNavigationMenuEmptyMessageConfig>;
    toolbarIsNotEmpty: boolean;
    /** FORWARD EVENTS */
    activeItemChangedEvent$: Subject<UserItem>;
    breadCrumbsChangedEvent$: Subject<UserItem[]>;
    expandedItemsMapChangedEvent$: Subject<Map<UserItem, boolean>>;
    expandedGroupsMapChangedEvent$: Subject<Map<string, boolean>>;
    itemExpandedChangedEvent$: Subject<{
        item: UserItem;
        isExpanded: boolean;
    }>;
    groupExpandedChangedEvent$: Subject<{
        groupId: string;
        isExpanded: boolean;
    }>;
    constructor(searchConfigToken: PrizmNavigationMenuSearchConfig, settingsConfigToken: PrizmNavigationMenuSettingsConfig);
    /** ITEMS RELATED */
    registerGroupItems(groupId: string, items: UserItem[]): void;
    getGroupItems(groupId: string): Observable<InternalPrizmNavigationMenuItem<UserItem>[]>;
    getUserItem(internalItem: InternalPrizmNavigationMenuItem<UserItem>): UserItem;
    getInternalItem(userItem: UserItem): InternalPrizmNavigationMenuItem<UserItem>;
    /** EXPANDED RELATED */
    registerExpandedItemsMap(expandedItemsMap: Map<UserItem, boolean>): void;
    registerExpandedGroupsMap(expandedGroupsMap: Map<string, boolean>): void;
    getGroupIsExpanded(groupId: string): boolean;
    handleExpandedChanged(event: {
        item: InternalPrizmNavigationMenuItem<UserItem>;
        isExpanded: boolean;
    }): void;
    handleGroupExpandedChanged(event: {
        groupId: string;
        isExpanded: boolean;
    }): void;
    clearExpandedItemsMap(groupId?: string): void;
    /** ACTIVE RELATED */
    setActiveItem(userItem: UserItem): void;
    handleActiveItemChange(internalItem: InternalPrizmNavigationMenuItem<UserItem>): void;
    /** CONFIGURATION RELATED */
    setSettingsConfiguration(settingsConfig: PrizmNavigationMenuSettingsConfig): void;
    setSearchConfig(config: PrizmNavigationMenuSearchConfig): void;
    setToolbarConfig(config: PrizmNavigationMenuToolbarConfig): void;
    setItemKeyName(itemKeyName: string): void;
    setEmptySearchResultMessageConfig(config: PrizmNavigationMenuEmptyMessageConfig): void;
    setEmptyDataMessageConfig(config: PrizmNavigationMenuEmptyMessageConfig): void;
    /** PRIVATE */
    private fillInternalExpandedItemsMapWithUser;
    private mapToInternalItemsAndUpdateSetMap;
    private mapWithMetadataAndUpdateMaps;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmNavigationMenuService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmNavigationMenuService<any>>;
}
