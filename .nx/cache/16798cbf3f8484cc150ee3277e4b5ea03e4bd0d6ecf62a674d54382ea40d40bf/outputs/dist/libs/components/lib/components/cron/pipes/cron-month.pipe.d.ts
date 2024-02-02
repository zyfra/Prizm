import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class PrizmCronMonthPipe implements PipeTransform {
    private locale;
    readonly datePipe: DatePipe;
    constructor(locale: string);
    transform(month: number, day?: number, format?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCronMonthPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmCronMonthPipe, "prizmCronMonth", true>;
}
