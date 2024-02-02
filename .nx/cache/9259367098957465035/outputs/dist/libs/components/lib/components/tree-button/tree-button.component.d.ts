import { EventEmitter } from '@angular/core';
import { PolymorphContent } from '../../directives/polymorph/types/content';
import * as i0 from "@angular/core";
export declare class PrizmTreeButtonComponent<T extends Partial<Record<keyof T, any>>> {
    icon: PolymorphContent;
    open: boolean;
    manualChange: boolean;
    removeIcon: boolean;
    visibilityIcon: boolean;
    iconOpen: PolymorphContent<{
        size: number;
    }>;
    iconClose: PolymorphContent<{
        size: number;
    }>;
    level: number;
    size: number;
    factor: number;
    get space(): string;
    readonly openChange: EventEmitter<boolean>;
    changeOpenState(open: boolean): void;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTreeButtonComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmTreeButtonComponent<any>, "prizm-tree-button", ["prizmTreeButton"], { "icon": { "alias": "icon"; "required": false; }; "open": { "alias": "open"; "required": false; }; "manualChange": { "alias": "manualChange"; "required": false; }; "removeIcon": { "alias": "removeIcon"; "required": false; }; "visibilityIcon": { "alias": "visibilityIcon"; "required": false; }; "iconOpen": { "alias": "iconOpen"; "required": false; }; "iconClose": { "alias": "iconClose"; "required": false; }; "level": { "alias": "level"; "required": false; }; "size": { "alias": "size"; "required": false; }; "factor": { "alias": "factor"; "required": false; }; }, { "openChange": "openChange"; }, never, ["*"], false, never>;
}
