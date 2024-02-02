import { ChangeDetectorRef } from '@angular/core';
import { PrizmInputZoneService } from './input-zone.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PrizmInputZoneDirective {
    private readonly inputZoneService;
    private readonly cdRef;
    readonly focused$: Observable<boolean>;
    readonly blur$: Observable<boolean>;
    get focused(): boolean;
    get elements(): import("@prizm-ui/components").PrizmInputInZoneDirective[];
    get inputs(): HTMLInputElement[];
    get values(): string[];
    constructor(inputZoneService: PrizmInputZoneService, cdRef: ChangeDetectorRef);
    focus(idx?: number): this;
    getFocusedByIdx(idx?: number): this;
    updateNativeValue(idx: number, value: string | number | null): PrizmInputZoneDirective;
    updateNativeValues(...values: {
        idx: number;
        value: string | number | null;
    }[]): PrizmInputZoneDirective;
    selectionToStart(idx?: number): this;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputZoneDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmInputZoneDirective, "[prizmInputZone]", ["prizmInputZone"], {}, { "focused$": "focused$"; "blur$": "blur$"; }, never, never, false, never>;
}
