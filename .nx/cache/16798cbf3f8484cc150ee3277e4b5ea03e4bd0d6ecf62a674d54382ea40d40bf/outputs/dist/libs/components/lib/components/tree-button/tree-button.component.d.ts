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
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmTreeButtonComponent<any>, "prizm-tree-button", ["prizmTreeButton"], { "icon": "icon"; "open": "open"; "manualChange": "manualChange"; "removeIcon": "removeIcon"; "visibilityIcon": "visibilityIcon"; "iconOpen": "iconOpen"; "iconClose": "iconClose"; "level": "level"; "size": "size"; "factor": "factor"; }, { "openChange": "openChange"; }, never, ["*"], false, never>;
}
