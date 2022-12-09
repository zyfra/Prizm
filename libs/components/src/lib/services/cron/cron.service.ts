import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PrizmCronValueObject } from './model';
import { prizmCronConvertToObject } from './util';

@Injectable()
export class PrizmCronService {
  private readonly value$$ = new BehaviorSubject<PrizmCronValueObject>(prizmCronConvertToObject('0 0 * ? * * *'));
  public readonly value$ = this.value$$.asObservable();
  public readonly valueAsString$ = this.value$.pipe(
    map(
      (v) => {
        return `${v.second} ${v.minute} ${v.hour} ${v.dayOfMonth} ${v.month} ${v.dayOfWeek} ${v.year}`
      }
    ),
    shareReplay(1)
  );
  public readonly second$ = this.value$.pipe(
    map(value => value.second)
  );
  public readonly dayOfWeek$ = this.value$.pipe(
    map(value => value.dayOfWeek)
  );
  public readonly minute$ = this.value$.pipe(
    map(value => value.minute)
  );
  public readonly hour$ = this.value$.pipe(
    map(value => value.hour)
  );
  public readonly dayOfMonth$ = this.value$.pipe(
    map(value => value.dayOfMonth)
  );
  public readonly month$ = this.value$.pipe(
    map(value => value.month)
  );
  public readonly year$ = this.value$.pipe(
    map(value => value.year)
  );

  public updateWith(ojb: Partial<PrizmCronValueObject>): void
  public updateWith(ojb: string): void
  public updateWith(value: Partial<PrizmCronValueObject> | string): void {
    const obj = (value && typeof value === 'object')
      ? value
      : prizmCronConvertToObject(value as string);

    console.log('#mz updateWith', {
      newValue: {
        ...this.value$$.value,
        ...obj,
      },
      obj,
      value,
      old: this.value$$.value
    });
   this.value$$.next({
     ...this.value$$.value,
     ...obj,
   });
  }
}
