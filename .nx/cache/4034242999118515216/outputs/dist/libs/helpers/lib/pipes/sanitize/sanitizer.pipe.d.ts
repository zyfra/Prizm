import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';
import * as i0 from "@angular/core";
type Method = Exclude<keyof DomSanitizer, 'sanitize'>;
export declare class PrizmSanitizerPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(value: string, method: Method): SafeValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSanitizerPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmSanitizerPipe, "prizmSanitizer", true>;
}
export {};
