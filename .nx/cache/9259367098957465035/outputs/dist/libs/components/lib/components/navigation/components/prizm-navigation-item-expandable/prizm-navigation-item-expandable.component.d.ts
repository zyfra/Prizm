import { INavigationTree } from './../../navigation.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActiveNavigationItemService } from '../../services/active-navigation-item.service';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export declare class PrizmNavigationItemExpandableComponent extends PrizmAbstractTestId {
    activeItemService: ActiveNavigationItemService;
    set data(tree: INavigationTree);
    deep: number;
    isExpanded: boolean;
    readonly testId_ = "ui_navigation--item-expandable";
    data$: BehaviorSubject<INavigationTree | null>;
    isActive$: Observable<boolean>;
    get menuItem(): INavigationTree | null;
    constructor(activeItemService: ActiveNavigationItemService);
    toggle($event: Event): void;
    navClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmNavigationItemExpandableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmNavigationItemExpandableComponent, "prizm-navigation-item-expandable", never, { "data": { "alias": "data"; "required": false; }; "deep": { "alias": "deep"; "required": false; }; }, {}, never, never, false, never>;
}
