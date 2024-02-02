import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export type PrizmMapper<T, G> = (item: T, ...args: any[]) => G;
export declare class PrizmMapperPipe implements PipeTransform {
    /**
     * Maps object to an arbitrary result through a mapper function
     *
     * @param value an item to transform
     * @param mapper a mapping function
     * @param args arbitrary number of additional arguments
     */
    transform<T, G>(value: T, mapper: PrizmMapper<T, G>, ...args: any[]): G;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmMapperPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmMapperPipe, "prizmMapper", false>;
}
