import { EventEmitter } from '@angular/core';
import { PolymorphContent } from '../../directives';
import { PrizmShadowType } from '../../directives/shadow';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmWidgetComponent extends PrizmAbstractTestId {
    header: PolymorphContent;
    title: PolymorphContent;
    icons: PolymorphContent<{
        idx: number;
    }>[] | PolymorphContent;
    iconClick: EventEmitter<string>;
    readonly shadow: PrizmShadowType;
    readonly testId_ = "ui_area--widget";
    get hasLine(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmWidgetComponent, "prizm-widget", never, { "header": "header"; "title": "title"; "icons": "icons"; }, { "iconClick": "iconClick"; }, never, ["*"], true, never>;
}
