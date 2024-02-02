import { EventEmitter } from '@angular/core';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { PrizmColumnSettings } from './../../column-settings.model';
import { PrizmLanguageColumnSettings } from '@prizm-ui/i18n';
import * as i0 from "@angular/core";
export declare class PrizmColumnDropListComponent extends PrizmAbstractTestId {
    columns: PrizmColumnSettings[];
    translations: PrizmLanguageColumnSettings['columnSettings'];
    isLastColumnShown: boolean;
    statusChanged: EventEmitter<void>;
    readonly testId_ = "ui_column_drop-list";
    toggleColumnStatus(column: PrizmColumnSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmColumnDropListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmColumnDropListComponent, "prizm-column-drop-list", never, { "columns": { "alias": "columns"; "required": false; }; "translations": { "alias": "translations"; "required": false; }; "isLastColumnShown": { "alias": "isLastColumnShown"; "required": false; }; }, { "statusChanged": "statusChanged"; }, never, never, true, never>;
}
