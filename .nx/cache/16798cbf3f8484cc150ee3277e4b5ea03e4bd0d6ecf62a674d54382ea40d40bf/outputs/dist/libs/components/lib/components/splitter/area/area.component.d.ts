import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { PrizmSplitterService } from '../splitter.service';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export declare class PrizmSplitterAreaComponent extends PrizmAbstractTestId {
    elementRef: ElementRef<HTMLElement>;
    private cdr;
    private splitterService;
    static id: number;
    readonly testId_ = "ui_splitter--area";
    id: number;
    private _size;
    set size(value: number | null);
    get size(): number | null;
    minSize: number;
    areaMinSize: EventEmitter<any>;
    order: number;
    currentSize: string;
    markForUpdate: boolean;
    hide(): void;
    show(): void;
    get hidden(): boolean;
    setCurrentSize(size: number): void;
    setCurrentSizeWithCalc(gap: number): void;
    setSize(size: number): void;
    constructor(elementRef: ElementRef<HTMLElement>, cdr: ChangeDetectorRef, splitterService: PrizmSplitterService);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSplitterAreaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmSplitterAreaComponent, "prizm-splitter-area", never, { "size": "size"; "minSize": "minSize"; }, { "areaMinSize": "areaMinSize"; }, never, ["*"], true, never>;
}
