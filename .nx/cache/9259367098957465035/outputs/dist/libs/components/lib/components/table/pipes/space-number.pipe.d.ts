import { PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class SpaceNumberPipe implements PipeTransform {
    private readonly decimal;
    constructor(decimal: DecimalPipe);
    transform(value: string | number, ...args: string[]): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpaceNumberPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SpaceNumberPipe, "spaceNumber", false>;
}
