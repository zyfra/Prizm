import { ChangeDetectorRef, PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
type Method<T = any> = (this: T, ...args: any[]) => any;
type Head<T extends Method> = Parameters<T>[0];
type Tail<T extends Method> = T extends (first: any, ...rest: infer R) => any ? R : never;
/**
 * Этот пайп позволяет снизить кол-во вызовов функций которые вызываются из шаблона,
 * когда входящие аргументы не меняются.
 *
 * @button <ng-container *ngIf="firstArg | prizmCallFunc : someMethod">SomeValue</ng-container>
 * @button <ng-container>{{firstArg | prizmCallFunc : someMethod : secondArg}}</ng-container>
 */
export declare class PrizmCallFuncPipe<C> implements PipeTransform {
    private cd;
    private readonly context;
    constructor(cd: ChangeDetectorRef);
    transform<M extends Method<C>>(param: Head<M>, fn: M, ...params: Tail<M>): ReturnType<M>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCallFuncPipe<any>, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmCallFuncPipe<any>, "prizmCallFunc", true>;
}
/**
 * TODO v5: remove
 * @deprecated
 * */
export declare const CallFuncPipe: typeof PrizmCallFuncPipe;
export {};
