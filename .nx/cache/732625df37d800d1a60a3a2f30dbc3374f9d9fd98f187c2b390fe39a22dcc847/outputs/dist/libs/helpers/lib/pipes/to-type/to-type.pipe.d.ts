import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Этот пайп можно использовать для приведения типов переменных контекста ng-template,
 * чтобы ввести хотя бы какую-то проверку типа шаблона для таких ссылок.
 *
 * @button <ng-template let-someArg><span *ngIf="someArg | prizmToType : typeName"></span></ng-template>
 */
export declare class PrizmToTypePipe implements PipeTransform {
    transform<T>(value: unknown, _typeSource: T): T;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmToTypePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmToTypePipe, "prizmToType", true>;
}
/**
 * TODO v5: remove
 * @deprecated
 * */
export declare const ToTypePipe: typeof PrizmToTypePipe;
