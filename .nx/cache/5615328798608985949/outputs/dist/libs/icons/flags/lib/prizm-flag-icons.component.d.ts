import { ElementRef } from '@angular/core';
import { PrizmFlagIconsRegistry } from './prizm-flag-icons.registry';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export declare class PrizmFlagIconsComponent extends PrizmAbstractTestId {
    private element;
    private iconRegistry;
    private document;
    private svgIcon;
    private name_;
    set name(iconName: string);
    get name(): string;
    _size: string;
    set size(size: string | number);
    get generateManeTestId(): string;
    constructor(element: ElementRef, iconRegistry: PrizmFlagIconsRegistry, document: Document);
    private svgElementFromString;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmFlagIconsComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmFlagIconsComponent, "prizm-flag-icons", never, { "name": { "alias": "name"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
