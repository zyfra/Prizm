import { AfterContentInit, ElementRef, QueryList } from '@angular/core';
import { PrizmGridItemComponent } from './components/grid-item/grid-item.component';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmGridComponent extends PrizmAbstractTestId implements AfterContentInit {
    cols: '8' | '12';
    rows: string;
    container: ElementRef;
    gridItems: QueryList<ElementRef>;
    gridItemsData: QueryList<PrizmGridItemComponent>;
    readonly testId_ = "ui-area--grid";
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmGridComponent, "prizm-grid", never, { "cols": "cols"; "rows": "rows"; }, {}, ["gridItems", "gridItemsData"], ["*"], true, never>;
}
/**
 * TODO v5: remove
 * @deprecated
 * */
export declare const GridComponent: typeof PrizmGridComponent;
