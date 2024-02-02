import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class PrizmCronWeekPipe implements PipeTransform {
    private locale;
    readonly datePipe: DatePipe;
    constructor(locale: string);
    transform(day?: number, format?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCronWeekPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmCronWeekPipe, "prizmCronWeek", true>;
}
