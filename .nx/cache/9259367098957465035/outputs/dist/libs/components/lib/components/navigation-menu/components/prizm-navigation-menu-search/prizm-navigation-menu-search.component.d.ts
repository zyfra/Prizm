import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export declare class PrizmNavigationMenuSearchComponent extends PrizmAbstractTestId implements AfterViewInit {
    private destroy$;
    searchInput: ElementRef<HTMLInputElement>;
    searchChange: EventEmitter<string>;
    searchDebounce: number;
    placeholder: string;
    readonly testId_ = "ui_navigation_menu_search";
    searchFormControl: UntypedFormControl;
    constructor(destroy$: PrizmDestroyService);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmNavigationMenuSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmNavigationMenuSearchComponent, "prizm-navigation-menu-search", never, { "searchDebounce": { "alias": "searchDebounce"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; }, { "searchChange": "searchChange"; }, never, never, true, never>;
}
