import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PrizmDroppableDirective {
    readonly prizmDroppableDropped: Observable<DataTransfer>;
    readonly prizmDroppableDragOverChange: Observable<DataTransfer | null>;
    constructor({ nativeElement }: ElementRef<HTMLElement>, destroy$: Observable<void>);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmDroppableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmDroppableDirective, "[prizmDroppableDropped], [prizmDroppableDragOverChange]", never, {}, { "prizmDroppableDropped": "prizmDroppableDropped"; "prizmDroppableDragOverChange": "prizmDroppableDragOverChange"; }, never, never, false, never>;
}
