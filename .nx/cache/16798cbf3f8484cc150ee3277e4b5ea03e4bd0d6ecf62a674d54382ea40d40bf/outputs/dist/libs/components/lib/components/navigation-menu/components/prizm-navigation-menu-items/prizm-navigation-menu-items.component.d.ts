import { TemplateRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { InternalPrizmNavigationMenuItem, ViewMode } from '../../interfaces';
import { PrizmNavigationMenuChildrenHandler } from '../../tokens';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PrizmTreeControllerDirective } from '../../../tree';
import * as i0 from "@angular/core";
export declare class PrizmNavigationMenuItemsComponent<T extends {
    children?: unknown[];
}> extends PrizmAbstractTestId {
    private childrenHandlerToken;
    cdr: ChangeDetectorRef;
    private menuItemsList;
    itemExpandedChanged: EventEmitter<{
        item: InternalPrizmNavigationMenuItem<T>;
        isExpanded: boolean;
    }>;
    activeItemChanged: EventEmitter<InternalPrizmNavigationMenuItem<T>>;
    goToRootItem: EventEmitter<InternalPrizmNavigationMenuItem<T>>;
    goToParentItem: EventEmitter<InternalPrizmNavigationMenuItem<T>>;
    items: InternalPrizmNavigationMenuItem<T>[];
    mode: ViewMode;
    activeItem: InternalPrizmNavigationMenuItem<T>;
    itemExtraTemplate: TemplateRef<unknown>;
    expandedItemsMap: Map<InternalPrizmNavigationMenuItem<T>, boolean>;
    childrenHandler: PrizmNavigationMenuChildrenHandler<T>;
    get menuItemsChildrenHandler(): PrizmNavigationMenuChildrenHandler<T>;
    readonly testId_ = "ui_navigation_menu_items";
    constructor(childrenHandlerToken: PrizmNavigationMenuChildrenHandler<T>, cdr: ChangeDetectorRef);
    handleInteraction(item: InternalPrizmNavigationMenuItem<T>, treeCtrl: PrizmTreeControllerDirective<InternalPrizmNavigationMenuItem<T>>): void;
    handleExpandedChanged({ value, isExpanded, }: {
        value: InternalPrizmNavigationMenuItem<T>;
        isExpanded: boolean;
    }): void;
    getItemIsExpanded(item: InternalPrizmNavigationMenuItem<T>): boolean;
    getItemIsActive(item: InternalPrizmNavigationMenuItem<T>): boolean;
    triggerCdr(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmNavigationMenuItemsComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmNavigationMenuItemsComponent<any>, "prizm-navigation-menu-items", never, { "items": "items"; "mode": "mode"; "activeItem": "activeItem"; "itemExtraTemplate": "itemExtraTemplate"; "expandedItemsMap": "expandedItemsMap"; "childrenHandler": "childrenHandler"; }, { "itemExpandedChanged": "itemExpandedChanged"; "activeItemChanged": "activeItemChanged"; "goToRootItem": "goToRootItem"; "goToParentItem": "goToParentItem"; }, never, never, true, never>;
}
