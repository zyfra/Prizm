import * as i0 from '@angular/core';
import { Pipe, NgModule, Injectable, Directive, Input, QueryList } from '@angular/core';
import { prizmAssert } from '@prizm-ui/core';
import * as i1 from '@angular/platform-browser';
import { defer, of, isObservable, BehaviorSubject, ReplaySubject, merge, Observable, asyncScheduler, race, concat, timer, mapTo, EMPTY } from 'rxjs';
import * as operators from 'rxjs/operators';
import { shareReplay, filter, throttleTime, map, observeOn, switchMap, debounceTime, tap, first } from 'rxjs/operators';
import { v4 } from 'uuid';

/**
 * Этот пайп позволяет снизить кол-во вызовов функций которые вызываются из шаблона,
 * когда входящие аргументы не меняются.
 *
 * @button <ng-container *ngIf="firstArg | prizmCallFunc : someMethod">SomeValue</ng-container>
 * @button <ng-container>{{firstArg | prizmCallFunc : someMethod : secondArg}}</ng-container>
 */
class PrizmCallFuncPipe {
    // with Ivy you can inject EmbeddedViewRef directly
    constructor(cd) {
        this.cd = cd;
        this.context = this.cd.context;
    }
    transform(param, fn, ...params) {
        return fn.apply(this.context, [param, ...params]);
    }
}
PrizmCallFuncPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCallFuncPipe, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Pipe });
PrizmCallFuncPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmCallFuncPipe, isStandalone: true, name: "prizmCallFunc" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCallFuncPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'prizmCallFunc', standalone: true }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; } });
/**
 * TODO v5: remove
 * @deprecated
 * */
const CallFuncPipe = PrizmCallFuncPipe;

/**
 * @deprecated
 * use standalone components instead
 * */
class PrizmCallFuncModule {
}
PrizmCallFuncModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCallFuncModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmCallFuncModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmCallFuncModule, imports: [PrizmCallFuncPipe], exports: [PrizmCallFuncPipe] });
PrizmCallFuncModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCallFuncModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCallFuncModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [PrizmCallFuncPipe],
                    imports: [PrizmCallFuncPipe],
                }]
        }] });

class PrizmPluckPipe {
    transform(input, key, defaultValue = null) {
        var _a;
        if (!input || typeof input !== 'object') {
            prizmAssert.assert(false, 'prizmPluck in input instead of object or array, get ' + input);
            return null;
        }
        if (key == null) {
            throw new Error('prizmPluck in key instead of valid key, get ' + key);
        }
        if (Array.isArray(key)) {
            let result = input;
            for (const k of key) {
                result = result === null || result === void 0 ? void 0 : result[k];
            }
            return result !== null && result !== void 0 ? result : defaultValue;
        }
        return (_a = input === null || input === void 0 ? void 0 : input[key]) !== null && _a !== void 0 ? _a : defaultValue;
    }
}
PrizmPluckPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPluckPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PrizmPluckPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmPluckPipe, isStandalone: true, name: "prizmPluck" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPluckPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'prizmPluck',
                    standalone: true,
                }]
        }] });

/**
 * @deprecated
 * use standalone components instead
 * */
class PrizmPluckPipeModule {
}
PrizmPluckPipeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPluckPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmPluckPipeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmPluckPipeModule, imports: [PrizmPluckPipe], exports: [PrizmPluckPipe] });
PrizmPluckPipeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPluckPipeModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPluckPipeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PrizmPluckPipe],
                    exports: [PrizmPluckPipe],
                }]
        }] });

/**
 * Этот пайп можно использовать для приведения типов переменных контекста ng-template,
 * чтобы ввести хотя бы какую-то проверку типа шаблона для таких ссылок.
 *
 * @button <ng-template let-someArg><span *ngIf="someArg | prizmToType : typeName"></span></ng-template>
 */
class PrizmToTypePipe {
    transform(value, _typeSource) {
        return value;
    }
}
PrizmToTypePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmToTypePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PrizmToTypePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmToTypePipe, isStandalone: true, name: "prizmToType" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmToTypePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'prizmToType', standalone: true }]
        }] });
/**
 * TODO v5: remove
 * @deprecated
 * */
const ToTypePipe = PrizmToTypePipe;

/**
 * @deprecated
 * use standalone components instead
 * */
class PrizmToTypeModule {
}
PrizmToTypeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmToTypeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmToTypeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmToTypeModule, imports: [PrizmToTypePipe], exports: [PrizmToTypePipe] });
PrizmToTypeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmToTypeModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmToTypeModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [PrizmToTypePipe],
                    imports: [PrizmToTypePipe],
                }]
        }] });

class PrizmSanitizerPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, method) {
        return this.sanitizer[method](value);
    }
}
PrizmSanitizerPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSanitizerPipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
PrizmSanitizerPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmSanitizerPipe, isStandalone: true, name: "prizmSanitizer" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSanitizerPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'prizmSanitizer',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; } });

/**
 * @deprecated
 * use standalone components instead
 * */
class PrizmSanitizerPipeModule {
}
PrizmSanitizerPipeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSanitizerPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmSanitizerPipeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmSanitizerPipeModule, imports: [PrizmSanitizerPipe], exports: [PrizmSanitizerPipe] });
PrizmSanitizerPipeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSanitizerPipeModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSanitizerPipeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PrizmSanitizerPipe],
                    exports: [PrizmSanitizerPipe],
                }]
        }] });

class PrizmToObservablePipe {
    transform(value, operators = []) {
        if (typeof (value === null || value === void 0 ? void 0 : value.then) === 'function') {
            value = defer(() => value);
        }
        let $ = of(value);
        if (!isObservable(value)) {
            if (!this.subject$$ || this.lastOperators !== operators) {
                this.subject$$ = new BehaviorSubject(value);
                this.lastObservable$$ = this.addOperatorsToObservable(this.subject$$, (this.lastOperators = operators)).pipe(shareReplay(1));
                $ = this.lastObservable$$;
            }
            else {
                this.subject$$.next(value);
                return this.lastObservable$$;
            }
        }
        else {
            $ = value;
        }
        return this.addOperatorsToObservable($, operators);
    }
    addOperatorsToObservable($, operators) {
        const operatorsArray = (operators !== null && operators !== void 0 ? operators : [])
            .map(operator => {
            if (typeof operator === 'string')
                return this.getOperatorFunction(operator);
            if (Array.isArray(operator)) {
                const [key, ...args] = operator;
                return this.getOperatorFunctionByKey(key, args);
            }
            return operator;
        })
            .filter(Boolean);
        return (operators === null || operators === void 0 ? void 0 : operators.length) ? $.pipe(...operatorsArray) : $;
    }
    getOperatorFunction(str) {
        const result = this.parseFunctionString(str);
        if (!result)
            return null;
        return this.getOperatorFunctionByKey(result.functionName, result === null || result === void 0 ? void 0 : result.args);
    }
    getOperatorFunctionByKey(key, args) {
        const method = operators[key];
        if (typeof method !== 'function')
            return null;
        return method(...args);
    }
    parseFunctionString(str) {
        const regex = /^(\w+)\((.*)\)$/;
        const match = str.match(regex);
        if (!match) {
            return null;
        }
        const functionName = match[1];
        const argsString = match[2].trim();
        const args = argsString ? argsString.split(',').map(arg => JSON.parse(arg.trim())) : [];
        return { functionName, args };
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.subject$$) === null || _a === void 0 ? void 0 : _a.complete();
        (_b = this.subject$$) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
PrizmToObservablePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmToObservablePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PrizmToObservablePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmToObservablePipe, isStandalone: true, name: "prizmToObservable" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmToObservablePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'prizmToObservable', standalone: true }]
        }] });

/**
 * @deprecated
 * use standalone components instead
 * */
class PrizmToObservableModule {
}
PrizmToObservableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmToObservableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmToObservableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmToObservableModule, imports: [PrizmToObservablePipe], exports: [PrizmToObservablePipe] });
PrizmToObservableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmToObservableModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmToObservableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PrizmToObservablePipe],
                    exports: [PrizmToObservablePipe],
                }]
        }] });

class PrizmLetContextService {
    constructor() {
        this.context$$ = new BehaviorSubject(null);
    }
    get context$() {
        return this.context$$.asObservable();
    }
    get context() {
        return this.context$$.value;
    }
    setContext(newContext) {
        this.context$$.next(newContext);
    }
    ngOnDestroy() {
        this.context$$.complete();
        this.context$$.unsubscribe();
    }
}
PrizmLetContextService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetContextService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PrizmLetContextService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetContextService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetContextService, decorators: [{
            type: Injectable
        }] });

/**
 * Это директива позволяет повторно использовать вычисленное значение в нескольких местах в шаблоне,
 * чтобы избежать пересчета геттеров или множества асинхронных каналов.
 *
 * @button <ng-container *prizmLet="{items: items$ | async, center: center} as $"> {{$.items?.count}} {{$.center}}</ng-container>
 * @button <ng-container *prizmLet="queryParams.isMap$ | async as isMap">{{isMap}}</ng-container>
 */
class PrizmLetDirective {
    get context() {
        return this.contextService.context;
    }
    get context$() {
        return this.contextService.context$;
    }
    constructor(templateRef, viewContainer, contextService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.contextService = contextService;
        this.ctx = { $implicit: null, prizmLet: null };
        this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
    }
    set init(newContext) {
        this.updateContext(newContext);
    }
    ngOnDestroy() {
        this.viewContainer.clear();
        if (this.viewRef) {
            this.viewRef.destroy();
            this.viewRef = null;
        }
    }
    updateContext(newContext) {
        this.ctx.$implicit = this.ctx.prizmLet = newContext;
        this.contextService.setContext(newContext);
        if (this.viewRef) {
            this.viewRef.markForCheck();
        }
    }
}
PrizmLetDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: PrizmLetContextService }], target: i0.ɵɵFactoryTarget.Directive });
PrizmLetDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmLetDirective, isStandalone: true, selector: "[prizmLet]", inputs: { init: ["prizmLet", "init"] }, providers: [PrizmLetContextService], exportAs: ["prizmLet"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmLet]',
                    exportAs: 'prizmLet',
                    standalone: true,
                    providers: [PrizmLetContextService],
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: PrizmLetContextService }]; }, propDecorators: { init: [{
                type: Input,
                args: ['prizmLet']
            }] } });

/**
 * @deprecated
 * use standalone instead
 * */
class PrizmLetModule {
}
PrizmLetModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmLetModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetModule, imports: [PrizmLetDirective], exports: [PrizmLetDirective] });
PrizmLetModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PrizmLetDirective],
                    exports: [PrizmLetDirective],
                }]
        }] });

/**
 * Observable abstraction over ngOnDestroy for use with takeUntil
 */
class PrizmDestroyService extends ReplaySubject {
    constructor() {
        super(1);
        this.cb = new Set();
    }
    ngOnDestroy() {
        this.next();
        this.complete();
        this.cb.forEach((cb) => cb());
        this.cb.clear();
    }
    addCallback(cb) {
        this.cb.add(cb);
    }
}
PrizmDestroyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmDestroyService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PrizmDestroyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmDestroyService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmDestroyService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

/**
 * sort number, string, date by asc or desc
 * */
function prizmSort(x, y, asc = true) {
    const a = x instanceof Date ? Number(x) : x;
    const b = y instanceof Date ? Number(y) : y;
    let result = 0;
    if (a === b) {
        return result;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        result = a.localeCompare(b);
    }
    else {
        result = a > b ? 1 : -1;
    }
    if (!asc) {
        if (result === -1)
            result = 1;
        else if (result === 1)
            result = -1;
    }
    return result;
}
function prizmEmptyQueryList() {
    return new QueryList();
}

class Compare {
    static isTruthy(value) {
        return Boolean(value) === true;
    }
    static isFalsy(value) {
        return Boolean(value) === false;
    }
    static isUndefined(value) {
        return value === undefined;
    }
    static isNullish(value) {
        return value == null;
    }
    static isNotNullish(value) {
        return value != null;
    }
    static isNull(value) {
        return value === null;
    }
    static isEqualDates(a, b) {
        return a === b || a.getTime() === b.getTime();
    }
}

/**
 * Фильтрует значения, которые являются неправдивыми (falsy).
 * @returns Оператор, который можно использовать с Observable.
 */
function filterFalsy() {
    return filter(Compare.isFalsy);
}
/**
 * Использует первый observable, который будет излучен в заданном промежутке времени.
 * @param time - время в миллисекундах
 * @param sources - массив источников Observable
 * @returns Observable, который эмитирует первое значение из источников.
 */
function raceEmit(time, ...sources) {
    return merge(...sources).pipe(throttleTime(time));
}
/**
 * Создает Observable, который излучает изменения размера элемента.
 * @param elements - массив элементов, для которых должны быть отслеживаны изменения размера.
 * @returns Observable, который эмитирует массив событий изменения размера.
 */
function prizmElementResized$(...elements) {
    return new Observable((subscriber) => {
        const resizeObserver = new ResizeObserver((entries) => subscriber.next(entries));
        elements.forEach(elem => resizeObserver.observe(elem));
        return () => resizeObserver.disconnect();
    });
}
/**
 * Фильтрует значения, которые являются истинными (truthy).
 * @returns Оператор, который можно использовать с Observable.
 */
function filterTruthy() {
    return filter(Compare.isTruthy);
}
/**
 * Фильтрует значения, которые не являются нулевыми или неопределенными.
 * @returns Оператор, который можно использовать с Observable.
 */
function filterNotNullish() {
    return filter(Compare.isNotNullish);
}
/**
 * Фильтрует значения, которые являются нулевыми или неопределенными.
 * @returns Оператор, который можно использовать с Observable.
 */
function filterNullish() {
    return filter(Compare.isNullish);
}
/**
 * Преобразует неопределенные значения в null.
 * @returns Оператор, который можно использовать с Observable.
 */
function mapUndefinedToNull() {
    return map((v) => (Compare.isUndefined(v) ? null : v));
}
/**
 * Перемещает выполнение функции на указанное количество итераций в цикле событий.
 * @param count - Количество итераций цикла событий для перемещения.
 * @returns Оператор, который можно использовать с Observable для продолжения цепочки.
 */
function moveInEventLoopIteration(count) {
    return (source) => {
        if (!count)
            return source;
        source = source.pipe(observeOn(asyncScheduler, 0));
        if (count > 1) {
            source = source.pipe(moveInEventLoopIteration(count - 1));
        }
        return source;
    };
}
function prizmRaceInEmit(inner, reloadTime) {
    const repeat$ = new BehaviorSubject(void 0);
    let result = repeat$.pipe(switchMap(() => {
        return race(...inner);
    }));
    if (Compare.isNotNullish(reloadTime))
        result = result.pipe(debounceTime(reloadTime));
    return result.pipe(tap(() => repeat$.next()));
}

function prizmFromMutationObserver$(target, config) {
    return new Observable(observer => {
        const mutation = new MutationObserver((mutations, instance) => {
            observer.next(mutations);
        });
        mutation.observe(target, config);
        return () => {
            mutation.disconnect();
        };
    });
}

class PrizmFormControlHelpers {
    static getDisabled$(origin) {
        return origin.statusChanges.pipe(map(() => this.getDisabled(origin)));
    }
    static getValidators$(origin) {
        return origin.statusChanges.pipe(map(() => this.getValidators(origin)));
    }
    static getAsyncValidators$(origin) {
        return origin.statusChanges.pipe(map(() => this.getAsyncValidators(origin)));
    }
    static getValue$(origin) {
        return origin.valueChanges.pipe(map(() => this.getValue(origin)));
    }
    static getDisabled(origin) {
        return origin.disabled;
    }
    static isTouched(origin) {
        return origin.touched;
    }
    static isDirty(origin) {
        return origin.dirty;
    }
    static getValidators(origin) {
        var _a;
        return (_a = origin === null || origin === void 0 ? void 0 : origin['_rawValidators']) !== null && _a !== void 0 ? _a : null;
    }
    static getAsyncValidators(origin) {
        var _a;
        return (_a = origin === null || origin === void 0 ? void 0 : origin['_rawAsyncValidators']) !== null && _a !== void 0 ? _a : null;
    }
    static getValue(origin) {
        return origin.value;
    }
    static syncStates(origin, bidirectional, ...others) {
        const all = [origin, ...others];
        return concat(timer(0).pipe(map(() => origin)), bidirectional
            ? merge(...all.map(control => control.statusChanges.pipe(mapTo(control))))
            : origin.statusChanges.pipe(mapTo(origin))).pipe(map(origin => {
            (bidirectional ? all : others).forEach(control => {
                const disabled = this.getDisabled(origin);
                if (disabled === control.disabled)
                    return;
                if (disabled) {
                    control.disable();
                }
                else {
                    control.enable();
                }
                this.syncControlVisualStates(origin, control);
            });
            return this.getDisabled(origin);
        }));
    }
    static syncValidators(origin, bidirectional, ...others) {
        const all = [origin, ...others];
        return concat(of(this.getValidators(origin)), bidirectional ? merge(...all.map(control => this.getValidators$(control))) : this.getValidators$(origin)).pipe(tap(validators => {
            (bidirectional ? all : others).forEach(control => {
                control.setValidators(validators);
            });
        }));
    }
    static syncAllValidators(origin, bidirectional, ...others) {
        return merge(this.syncValidators(origin, bidirectional, ...others), this.syncAsyncValidators(origin, bidirectional, ...others));
    }
    static syncAsyncValidators(origin, bidirectional, ...others) {
        const all = [origin, ...others];
        return concat(of(this.getAsyncValidators(origin)), bidirectional
            ? merge(...all.map(control => this.getAsyncValidators$(control)))
            : this.getAsyncValidators$(origin)).pipe(tap(asyncValidators => {
            (bidirectional ? all : others).forEach(control => {
                control.setAsyncValidators(asyncValidators);
            });
        }));
    }
    static setValue(control, newValue, options) {
        const currentValue = this.getValue(control);
        if (currentValue === newValue)
            return;
        control.setValue(newValue, options);
    }
    static setDisabled(control, disabled, options) {
        if (disabled === control.disabled)
            return;
        if (!disabled)
            control.enable(options);
        else
            control.disable(options);
    }
    static syncControlVisualStates(control, other) {
        if (control.pristine)
            other.markAsPristine();
        if (control.dirty)
            other.markAsDirty();
        if (control.touched)
            other.markAsTouched();
        if (control.untouched)
            other.markAsUntouched();
        if (control.pending)
            other.markAsPending();
    }
    static syncValues(origin, fromOrigin, fromOthers, ...others) {
        return merge(timer(0).pipe(first(), map(() => this.getValue(origin)), tap((valueFromOrigin) => {
            const value = fromOrigin(valueFromOrigin);
            others.forEach(control => {
                this.setValue(control, value);
                this.syncControlVisualStates(origin, control);
            });
        })), this.getValue$(origin).pipe(filter(() => Boolean(fromOrigin)), tap((valueFromOrigin) => {
            const value = fromOrigin(valueFromOrigin);
            others.forEach(control => {
                this.setValue(control, value);
                this.syncControlVisualStates(origin, control);
            });
        })), fromOthers
            ? merge(...others.map(control => this.getValue$(control))).pipe(filter(() => Boolean(fromOthers)), tap((valueFromOther) => {
                const value = fromOthers(valueFromOther);
                this.setValue(origin, value);
            }))
            : EMPTY).pipe(map(() => this.getValue(origin)));
    }
}

function PrizmLogExecution(options = {}) {
    const { enabled = true, logArguments = true, logResult = true, logExecutionTime = true } = options;
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        if (!enabled)
            return descriptor;
        if (descriptor.set) {
            const originalSetter = descriptor.set;
            descriptor.set = function (value) {
                const className = target.constructor.name;
                const propertyName = propertyKey;
                const fullPropertyName = `${className}.${propertyName}`;
                console.log(`Вызов сеттера: ${fullPropertyName}`);
                if (logArguments) {
                    console.log('Аргумент:', value);
                }
                const startTime = performance.now();
                originalSetter.call(this, value);
                if (logExecutionTime) {
                    const endTime = performance.now();
                    console.log(`Время выполнения: ${endTime - startTime} мс`);
                }
            };
        }
        else if (descriptor.value) {
            descriptor.value = function (...args) {
                const className = target.constructor.name;
                const functionName = propertyKey || target.constructor.name;
                const fullFunctionName = propertyKey ? `${className}.${functionName}` : functionName;
                console.log(fullFunctionName, `Вызов функции`);
                if (logArguments) {
                    console.log(fullFunctionName, 'Аргументы:', args);
                }
                const startTime = performance.now();
                let result = originalMethod.apply(this, args);
                if (result instanceof Promise) {
                    result = result.then(res => {
                        if (logResult) {
                            console.log(fullFunctionName, 'Результат:', res);
                        }
                        if (logExecutionTime) {
                            const endTime = performance.now();
                            console.log(fullFunctionName, `Время выполнения: ${endTime - startTime} мс`);
                        }
                        return res;
                    });
                }
                else if (result instanceof Observable) {
                    result = result.pipe(tap(res => {
                        if (logResult) {
                            console.log(fullFunctionName, 'Результат:', res);
                        }
                        if (logExecutionTime) {
                            const endTime = performance.now();
                            console.log(fullFunctionName, `Время выполнения: ${endTime - startTime} мс`);
                        }
                    }));
                }
                else {
                    if (logResult) {
                        console.log(fullFunctionName, 'Результат:', result);
                    }
                    if (logExecutionTime) {
                        const endTime = performance.now();
                        console.log(fullFunctionName, `Время выполнения: ${endTime - startTime} мс`);
                    }
                }
                return result;
            };
        }
        return descriptor;
    };
}

function prizmGenerateId() {
    return v4();
}

function prizmStyleGetVars(obj) {
    return Object.entries(obj).reduce((base, [key, value]) => {
        var _a;
        key = prizmStyleToSnake(key);
        if (key.startsWith('--'))
            key = key.replace(/^--/, '');
        if (key.startsWith('prizm'))
            key = key.replace(/^prizm-/, '');
        key = `--prizm-${key}`;
        base[key] = Compare.isNullish(value) ? '' : (_a = value === null || value === void 0 ? void 0 : value.toString()) !== null && _a !== void 0 ? _a : '';
        return base;
    }, {});
}
function prizmStyleToSnake(str) {
    return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

function prizmFormatNumber(num, precision, decimal = 'never') {
    if (precision === Infinity) {
        switch (decimal) {
            case 'not-zero':
                return num.toString().replace(/\.0+$/, '');
            case 'never':
                return Math.round(num).toString();
            default:
                return num.toString();
        }
    }
    switch (decimal) {
        case 'not-zero':
            return (Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision)).toString();
        case 'always':
            return num.toFixed(precision);
        case 'never':
        default:
            return Math.round(num).toString();
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { Compare, PrizmCallFuncModule, PrizmCallFuncPipe, PrizmDestroyService, PrizmFormControlHelpers, PrizmLetContextService, PrizmLetDirective, PrizmLetModule, PrizmLogExecution, PrizmPluckPipe, PrizmPluckPipeModule, PrizmSanitizerPipe, PrizmSanitizerPipeModule, PrizmToObservableModule, PrizmToObservablePipe, PrizmToTypeModule, PrizmToTypePipe, filterFalsy, filterNotNullish, filterNullish, filterTruthy, mapUndefinedToNull, moveInEventLoopIteration, prizmElementResized$, prizmEmptyQueryList, prizmFormatNumber, prizmFromMutationObserver$, prizmGenerateId, prizmRaceInEmit, prizmSort, prizmStyleGetVars, prizmStyleToSnake, raceEmit };
//# sourceMappingURL=prizm-ui-helpers.mjs.map
