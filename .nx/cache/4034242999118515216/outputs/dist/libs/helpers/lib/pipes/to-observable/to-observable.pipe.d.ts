import { OnDestroy, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmToObservableOperator } from './model';
import * as i0 from "@angular/core";
export declare class PrizmToObservablePipe<T> implements PipeTransform, OnDestroy {
    private subject$$;
    private lastObservable$$;
    private lastOperators;
    transform(value: T | Observable<T> | Promise<T>, operators?: PrizmToObservableOperator[]): Observable<T>;
    private addOperatorsToObservable;
    private getOperatorFunction;
    private getOperatorFunctionByKey;
    private parseFunctionString;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmToObservablePipe<any>, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmToObservablePipe<any>, "prizmToObservable", true>;
}
