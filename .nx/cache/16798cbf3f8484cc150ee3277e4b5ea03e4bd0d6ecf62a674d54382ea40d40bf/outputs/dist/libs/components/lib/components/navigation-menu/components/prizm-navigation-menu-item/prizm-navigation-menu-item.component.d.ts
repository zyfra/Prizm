import { ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { InternalPrizmNavigationMenuItem, ViewMode } from '../../interfaces';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { prizmIsTextOverflow } from '../../../../util';
import * as i0 from "@angular/core";
export declare class PrizmNavigationMenuItemComponent<T> extends PrizmAbstractTestId {
    cdr: ChangeDetectorRef;
    interaction: EventEmitter<InternalPrizmNavigationMenuItem<T>>;
    toggleExpanded: EventEmitter<InternalPrizmNavigationMenuItem<T>>;
    goToParentItem: EventEmitter<InternalPrizmNavigationMenuItem<T>>;
    goToRootItem: EventEmitter<InternalPrizmNavigationMenuItem<T>>;
    itemExtraTemplate: TemplateRef<unknown>;
    isExpandable: boolean;
    isExpanded: boolean;
    isActive: boolean;
    item: InternalPrizmNavigationMenuItem<T>;
    mode: ViewMode;
    showGoToButtons: boolean;
    readonly prizmIsTextOverflow: typeof prizmIsTextOverflow;
    isHovered: boolean;
    get expandButtonVisible(): boolean;
    get goToButtonsVisible(): boolean;
    readonly testId_ = "ui_navigation_menu_item";
    constructor(cdr: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmNavigationMenuItemComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmNavigationMenuItemComponent<any>, "prizm-navigation-menu-item", never, { "itemExtraTemplate": "itemExtraTemplate"; "isExpandable": "isExpandable"; "isExpanded": "isExpanded"; "isActive": "isActive"; "item": "item"; "mode": "mode"; "showGoToButtons": "showGoToButtons"; }, { "interaction": "interaction"; "toggleExpanded": "toggleExpanded"; "goToParentItem": "goToParentItem"; "goToRootItem": "goToRootItem"; }, never, never, true, never>;
}
