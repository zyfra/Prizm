import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmHoveredService } from '../../services/hovered.service';
import * as i0 from "@angular/core";
export declare class PrizmHoveredDirective {
    readonly prizmHoveredChange: Observable<boolean>;
    constructor({ nativeElement }: ElementRef<Element>, hoveredService: PrizmHoveredService);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmHoveredDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmHoveredDirective, "[prizmHoveredChange]", never, {}, { "prizmHoveredChange": "prizmHoveredChange"; }, never, never, true, never>;
}
