import { AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';
import { concat, EMPTY, merge, Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

export class PrizmFormControlHelpers {
  public static getDisabled$(origin: FormControl): Observable<boolean> {
    return origin.statusChanges.pipe(map(() => this.getDisabled(origin)));
  }
  public static getValidators$(origin: FormControl): Observable<ValidatorFn | ValidatorFn[] | null> {
    return origin.statusChanges.pipe(map(() => this.getValidators(origin)));
  }
  public static getAsyncValidators$(
    origin: FormControl
  ): Observable<AsyncValidatorFn | AsyncValidatorFn[] | null> {
    return origin.statusChanges.pipe(map(() => this.getAsyncValidators(origin)));
  }

  public static getValue$<T = any>(origin: FormControl): Observable<T> {
    return origin.valueChanges.pipe(map(() => this.getValue<T>(origin)));
  }

  public static getDisabled(origin: FormControl): boolean {
    return origin.disabled;
  }

  public static getValidators(origin: FormControl): ValidatorFn | ValidatorFn[] | null {
    return (origin as any)?.['_rawValidators'] ?? null;
  }

  public static getAsyncValidators(origin: FormControl): AsyncValidatorFn | AsyncValidatorFn[] | null {
    return (origin as any)?.['_rawAsyncValidators'] ?? null;
  }

  public static getValue<T>(origin: FormControl): T {
    return origin.value;
  }

  public static syncStates(
    origin: FormControl,
    bidirectional: boolean,
    ...others: FormControl[]
  ): Observable<boolean> {
    const all = [origin, ...others];
    return concat(
      of(origin.disabled),
      bidirectional ? merge(...all.map(control => this.getDisabled$(control))) : this.getDisabled$(origin)
    ).pipe(
      tap(disabled => {
        (bidirectional ? all : others).forEach(control => {
          if (disabled === control.disabled) return;
          if (disabled) {
            control.disable();
          } else {
            control.enable();
          }
        });
      })
    );
  }

  public static syncValidators(
    origin: FormControl,
    bidirectional: boolean,
    ...others: FormControl[]
  ): Observable<ValidatorFn | ValidatorFn[] | null> {
    const all = [origin, ...others];
    return concat(
      of(this.getValidators(origin)),
      bidirectional ? merge(...all.map(control => this.getValidators$(control))) : this.getValidators$(origin)
    ).pipe(
      tap(validators => {
        (bidirectional ? all : others).forEach(control => {
          control.setValidators(validators);
        });
      })
    );
  }

  public static syncAllValidators(
    origin: FormControl,
    bidirectional: boolean,
    ...others: FormControl[]
  ): Observable<ValidatorFn | ValidatorFn[] | AsyncValidatorFn | AsyncValidatorFn[] | null> {
    return merge(
      this.syncValidators(origin, bidirectional, ...others),
      this.syncAsyncValidators(origin, bidirectional, ...others)
    );
  }

  public static syncAsyncValidators(
    origin: FormControl,
    bidirectional: boolean,
    ...others: FormControl[]
  ): Observable<AsyncValidatorFn | AsyncValidatorFn[] | null> {
    const all = [origin, ...others];
    return concat(
      of(this.getAsyncValidators(origin)),
      bidirectional
        ? merge(...all.map(control => this.getAsyncValidators$(control)))
        : this.getAsyncValidators$(origin)
    ).pipe(
      tap(asyncValidators => {
        (bidirectional ? all : others).forEach(control => {
          control.setAsyncValidators(asyncValidators);
        });
      })
    );
  }

  public static setValue<T = any>(
    control: FormControl,
    newValue: T,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    }
  ): void {
    const currentValue = this.getValue<T>(control);
    if (currentValue === newValue) return;
    control.setValue(newValue, options);
  }

  public static setDisabled(
    control: FormControl,
    disabled: boolean,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
    }
  ): void {
    if (disabled === control.disabled) return;
    if (!disabled) control.enable(options);
    else control.disable(options);
  }

  public static syncValues<ORIGIN_VALUE = any, OTHER_VALUE = any>(
    origin: FormControl,
    fromOrigin: (valueFromOrigin: ORIGIN_VALUE) => OTHER_VALUE,
    fromOthers: null | ((valueFromOther: OTHER_VALUE) => ORIGIN_VALUE),
    ...others: FormControl[]
  ): Observable<ORIGIN_VALUE> {
    return merge(
      this.getValue$(origin).pipe(
        filter(() => Boolean(fromOrigin)),
        tap((valueFromOrigin: ORIGIN_VALUE) => {
          const value = fromOrigin(valueFromOrigin);
          others.forEach(control => this.setValue(control, value));
        })
      ),
      fromOthers
        ? merge(...others.map(control => this.getValue$(control))).pipe(
            filter(() => Boolean(fromOthers)),
            tap((valueFromOther: OTHER_VALUE) => {
              const value = fromOthers(valueFromOther);
              this.setValue(origin, value);
            })
          )
        : EMPTY
    ).pipe(map(() => this.getValue(origin)));
  }
}
