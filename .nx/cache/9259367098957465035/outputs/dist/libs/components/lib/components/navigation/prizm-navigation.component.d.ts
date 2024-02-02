import { INavigationTree } from './navigation.interfaces';
import { ActiveNavigationItemService } from './services/active-navigation-item.service';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export declare class PrizmNavigationComponent extends PrizmAbstractTestId {
    private readonly activeItemService;
    set data(tree: INavigationTree[]);
    set activeElement(el: INavigationTree);
    activeItemChange: import("rxjs").Observable<INavigationTree | null>;
    menuItems: INavigationTree[];
    readonly testId_ = "ui_navigation";
    constructor(activeItemService: ActiveNavigationItemService);
    calculateStatuses(data: INavigationTree): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmNavigationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmNavigationComponent, "prizm-navigation", never, { "data": { "alias": "data"; "required": false; }; "activeElement": { "alias": "activeElement"; "required": false; }; }, { "activeItemChange": "activeItemChange"; }, never, never, false, never>;
}
