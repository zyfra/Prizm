import { AsyncValidatorFn, UntypedFormControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
export declare class PrizmFormControlHelpers {
    static getDisabled$(origin: UntypedFormControl): Observable<boolean>;
    static getValidators$(origin: UntypedFormControl): Observable<ValidatorFn | ValidatorFn[] | null>;
    static getAsyncValidators$(origin: UntypedFormControl): Observable<AsyncValidatorFn | AsyncValidatorFn[] | null>;
    static getValue$<T = any>(origin: UntypedFormControl): Observable<T>;
    static getDisabled(origin: UntypedFormControl): boolean;
    static isTouched(origin: UntypedFormControl): boolean;
    static isDirty(origin: UntypedFormControl): boolean;
    static getValidators(origin: UntypedFormControl): ValidatorFn | ValidatorFn[] | null;
    static getAsyncValidators(origin: UntypedFormControl): AsyncValidatorFn | AsyncValidatorFn[] | null;
    static getValue<T>(origin: UntypedFormControl): T;
    static syncStates(origin: UntypedFormControl, bidirectional: boolean, ...others: UntypedFormControl[]): Observable<boolean>;
    static syncValidators(origin: UntypedFormControl, bidirectional: boolean, ...others: UntypedFormControl[]): Observable<ValidatorFn | ValidatorFn[] | null>;
    static syncAllValidators(origin: UntypedFormControl, bidirectional: boolean, ...others: UntypedFormControl[]): Observable<ValidatorFn | ValidatorFn[] | AsyncValidatorFn | AsyncValidatorFn[] | null>;
    static syncAsyncValidators(origin: UntypedFormControl, bidirectional: boolean, ...others: UntypedFormControl[]): Observable<AsyncValidatorFn | AsyncValidatorFn[] | null>;
    static setValue<T = any>(control: UntypedFormControl, newValue: T, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
        emitViewToModelChange?: boolean;
    }): void;
    static setDisabled(control: UntypedFormControl, disabled: boolean, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    static syncControlVisualStates(control: UntypedFormControl, other: UntypedFormControl): void;
    static syncValues<ORIGIN_VALUE = any, OTHER_VALUE = any>(origin: UntypedFormControl, fromOrigin: (valueFromOrigin: ORIGIN_VALUE) => OTHER_VALUE, fromOthers: null | ((valueFromOther: OTHER_VALUE) => ORIGIN_VALUE), ...others: UntypedFormControl[]): Observable<ORIGIN_VALUE>;
}
