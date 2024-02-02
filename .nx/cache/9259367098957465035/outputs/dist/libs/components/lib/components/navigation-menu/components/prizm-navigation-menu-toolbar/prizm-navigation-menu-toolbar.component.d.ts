import { TemplateRef } from '@angular/core';
import { PrizmNavigationMenuSearchConfig, PrizmNavigationMenuToolbarConfig } from '../../interfaces';
import { PrizmNavigationMenuToolbarService } from '../../services/prizm-navigation-menu-toolbar.service';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export declare class PrizmNavigationMenuToolbarComponent extends PrizmAbstractTestId {
    toolbarService: PrizmNavigationMenuToolbarService;
    toolbarExtraTemplate: TemplateRef<unknown>;
    toolbarConfig: PrizmNavigationMenuToolbarConfig;
    searchConfig: PrizmNavigationMenuSearchConfig;
    hideGroupAppearance: boolean;
    get toolbarIsVisible(): boolean;
    readonly testId_ = "ui_navigation_menu_toolbar";
    constructor(toolbarService: PrizmNavigationMenuToolbarService);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmNavigationMenuToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmNavigationMenuToolbarComponent, "prizm-navigation-menu-toolbar", never, { "toolbarExtraTemplate": { "alias": "toolbarExtraTemplate"; "required": false; }; "toolbarConfig": { "alias": "toolbarConfig"; "required": false; }; "searchConfig": { "alias": "searchConfig"; "required": false; }; "hideGroupAppearance": { "alias": "hideGroupAppearance"; "required": false; }; }, {}, never, never, true, never>;
}
