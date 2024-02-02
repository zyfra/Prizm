import { ChangeDetectorRef, PipeTransform } from '@angular/core';
import { PrizmLanguage } from '@prizm-ui/i18n';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class PrizmCronHumanReadablePipe implements PipeTransform {
    readonly cdRef: ChangeDetectorRef;
    readonly language$: Observable<PrizmLanguage>;
    readonly asyncPipe: AsyncPipe;
    transform(expression: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCronHumanReadablePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmCronHumanReadablePipe, "prizmCronHumanReadable", true>;
}
