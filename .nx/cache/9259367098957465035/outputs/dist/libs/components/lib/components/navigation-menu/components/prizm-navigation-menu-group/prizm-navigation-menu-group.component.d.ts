import { ChangeDetectorRef, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { Observable } from 'rxjs';
import { InternalPrizmNavigationMenuItem, PrizmNavigationMenuEmptyMessageConfig, PrizmNavigationMenuItem, PrizmNavigationMenuSearchConfig, PrizmNavigationMenuToolbarConfig, ViewMode } from '../../interfaces';
import { PrizmNavigationMenuService } from '../../services/prizm-navigation-menu.service';
import { PrizmNavigationMenuGroupService } from '../../services/prizm-navigation-menu-group.service';
import { PrizmHandler } from '../../../../../lib/types';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export declare class PrizmNavigationMenuGroupComponent<UserItem extends Omit<PrizmNavigationMenuItem, 'children'> & {
    children?: UserItem[];
}> extends PrizmAbstractTestId implements OnInit {
    private cdr;
    private destroy$;
    private groupService;
    private menuService;
    private menuItemsComponent;
    itemExpandedChanged: EventEmitter<{
        item: UserItem;
        isExpanded: boolean;
    }>;
    groupExpandedChanged: EventEmitter<{
        groupId: string;
        isExpanded: boolean;
    }>;
    groupId: string;
    title: string;
    hideGroupAppearance?: boolean;
    icon?: string;
    toolbarExtraTemplate: TemplateRef<unknown>;
    itemExtraTemplate?: TemplateRef<unknown>;
    set items(items: UserItem[]);
    set toolbarConfig(toolbarConfig: PrizmNavigationMenuToolbarConfig);
    set emptySearchResultMessageConfig(config: PrizmNavigationMenuEmptyMessageConfig);
    set emptyDataMessageConfig(config: PrizmNavigationMenuEmptyMessageConfig);
    set searchConfig(config: PrizmNavigationMenuSearchConfig);
    childrenHandler: PrizmHandler<InternalPrizmNavigationMenuItem<UserItem>, readonly InternalPrizmNavigationMenuItem<UserItem>[]>;
    readonly testId_ = "ui_navigation_menu_group";
    groupIsExpanded: boolean;
    groupItems$: Observable<InternalPrizmNavigationMenuItem<UserItem>[]>;
    expandedItemsMap$: Observable<Map<InternalPrizmNavigationMenuItem<UserItem>, boolean>>;
    toolbarConfig$: Observable<PrizmNavigationMenuToolbarConfig>;
    searchConfig$: Observable<PrizmNavigationMenuSearchConfig>;
    emptyMessageConfig$: Observable<PrizmNavigationMenuEmptyMessageConfig>;
    activeItem$: Observable<InternalPrizmNavigationMenuItem<UserItem> | null>;
    mode$: Observable<ViewMode>;
    private items$$;
    constructor(cdr: ChangeDetectorRef, destroy$: PrizmDestroyService, groupService: PrizmNavigationMenuGroupService<UserItem>, menuService: PrizmNavigationMenuService<UserItem>);
    ngOnInit(): void;
    handleActiveItemChange(item: InternalPrizmNavigationMenuItem<UserItem>): void;
    handleItemExpandedChanged(event: {
        item: InternalPrizmNavigationMenuItem<UserItem>;
        isExpanded: boolean;
    }): void;
    handleGroupExpandedChanged(isExpanded: boolean): void;
    handleGoToParentItem(item: InternalPrizmNavigationMenuItem<UserItem>): void;
    handleGoToRootItem(_item: InternalPrizmNavigationMenuItem<UserItem>): void;
    private registerItems;
    private setGroupIsExpanded;
    private ensureViewUpdatesCorrectly;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmNavigationMenuGroupComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmNavigationMenuGroupComponent<any>, "prizm-navigation-menu-group", never, { "groupId": { "alias": "groupId"; "required": false; }; "title": { "alias": "title"; "required": false; }; "hideGroupAppearance": { "alias": "hideGroupAppearance"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "toolbarExtraTemplate": { "alias": "toolbarExtraTemplate"; "required": false; }; "itemExtraTemplate": { "alias": "itemExtraTemplate"; "required": false; }; "items": { "alias": "items"; "required": false; }; "toolbarConfig": { "alias": "toolbarConfig"; "required": false; }; "emptySearchResultMessageConfig": { "alias": "emptySearchResultMessageConfig"; "required": false; }; "emptyDataMessageConfig": { "alias": "emptyDataMessageConfig"; "required": false; }; "searchConfig": { "alias": "searchConfig"; "required": false; }; "childrenHandler": { "alias": "childrenHandler"; "required": false; }; }, { "itemExpandedChanged": "itemExpandedChanged"; "groupExpandedChanged": "groupExpandedChanged"; }, never, never, true, never>;
}
