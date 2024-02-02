import { INavigationTree } from '../../navigation.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActiveNavigationItemService } from '../../services/active-navigation-item.service';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export declare class PrizmNavigationItemSimpleComponent extends PrizmAbstractTestId {
    activeItemService: ActiveNavigationItemService;
    set data(tree: INavigationTree);
    deep: number;
    readonly testId_ = "ui_navigation--item-simple";
    data$: BehaviorSubject<INavigationTree | null>;
    isActive$: Observable<boolean>;
    get menuItem(): INavigationTree | null;
    constructor(activeItemService: ActiveNavigationItemService);
    navClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmNavigationItemSimpleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmNavigationItemSimpleComponent, "prizm-navigation-item-simple", never, { "data": "data"; "deep": "deep"; }, {}, never, never, false, never>;
}
