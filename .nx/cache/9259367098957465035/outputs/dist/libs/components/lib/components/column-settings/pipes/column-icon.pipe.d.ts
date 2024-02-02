import { PipeTransform } from '@angular/core';
import { PrizmColumnStatus } from '../column-settings.model';
import * as i0 from "@angular/core";
export declare class PrizmColumnIconPipe implements PipeTransform {
    transform(status: PrizmColumnStatus): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmColumnIconPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmColumnIconPipe, "prizmColumnIcon", true>;
}
