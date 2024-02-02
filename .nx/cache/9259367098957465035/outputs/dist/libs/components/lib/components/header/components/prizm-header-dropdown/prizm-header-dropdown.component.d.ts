import { EventEmitter } from '@angular/core';
import { IScreen } from './../../../navigation/navigation.interfaces';
import * as i0 from "@angular/core";
export declare class PrizmHeaderDropdownComponent {
    data: IScreen[];
    currentScreenIdx: number;
    screenIdxChange: EventEmitter<number>;
    openDropdown: boolean;
    changeScreen(idx: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmHeaderDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmHeaderDropdownComponent, "prizm-header-dropdown", never, { "data": { "alias": "data"; "required": false; }; "currentScreenIdx": { "alias": "currentScreenIdx"; "required": false; }; }, { "screenIdxChange": "screenIdxChange"; }, never, never, true, never>;
}
