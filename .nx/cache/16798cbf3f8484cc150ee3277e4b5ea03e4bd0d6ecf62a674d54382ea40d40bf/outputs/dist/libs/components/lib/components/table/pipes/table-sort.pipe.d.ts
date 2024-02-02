import { PipeTransform } from '@angular/core';
import { PrizmTableDirective } from '../directives/table.directive';
import * as i0 from "@angular/core";
export declare class PrizmTableSortPipe<T extends Partial<Record<keyof T, any>>> implements PipeTransform {
    private readonly table;
    constructor(table: PrizmTableDirective<T>);
    transform(data: readonly T[]): readonly T[];
    private sort;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTableSortPipe<any>, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmTableSortPipe<any>, "prizmTableSort", false>;
}
