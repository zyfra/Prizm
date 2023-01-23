import { FormControl } from '@angular/forms';
import { concat, merge, Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

export class PrizmFormControlHelpers {
  public static getDisabled$(origin: FormControl): Observable<boolean> {
    return origin.statusChanges.pipe(map(() => this.getDisabled(origin)));
  }

  public static getValue$<T = any>(origin: FormControl): Observable<T> {
    return origin.valueChanges.pipe(map(() => this.getValue<T>(origin)));
  }

  public static getDisabled(origin: FormControl): boolean {
    return origin.disabled;
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
      bidirectional
        ? merge(
          ...all.map(
            (control) => this.getDisabled$(control)
          )
        )
        : this.getDisabled$(origin)
    ).pipe(
      tap(
        (disabled) => {
          (bidirectional ? all : others).forEach((control) => {
            if (disabled === control.disabled) return;
            if (disabled) {
              control.disable();
            } else {
              control.enable();
            }
          });
        }
      )
    )
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
    if(!disabled)
      control.enable(options)
    else
      control.disable(options)
  }

  public static syncValues<
    ORIGIN_VALUE = any,
    OTHER_VALUE = any
  >(
    origin: FormControl,
    fromOrigin: (valueFromOrigin: ORIGIN_VALUE) => OTHER_VALUE,
    fromOthers: (valueFromOther: OTHER_VALUE) => ORIGIN_VALUE,
    ...others: FormControl[]
  ): Observable<ORIGIN_VALUE> {
    return merge(
      this.getValue$(origin).pipe(
        filter(() => Boolean(fromOrigin)),
        tap((valueFromOrigin: ORIGIN_VALUE) => {
          const value = fromOrigin(valueFromOrigin);
          others.forEach((control) => this.setValue(control, value));
        })
      ),
      merge(...others.map(
        (control) => this.getValue$(control)
      )).pipe(
        filter(() => Boolean(fromOthers)),
        tap((valueFromOther: OTHER_VALUE) => {
          const value = fromOthers(valueFromOther);
          this.setValue(origin, value)
        })
      )
    ).pipe(
      map(() => this.getValue(origin))
    )
  }
}
