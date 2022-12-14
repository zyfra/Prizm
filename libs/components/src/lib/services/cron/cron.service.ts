import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
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
    map(value => value.second),
    distinctUntilChanged()
  );
  public readonly dayOfWeek$ = this.value$.pipe(
    map(value => value.dayOfWeek),
    distinctUntilChanged()
  );
  public readonly minute$ = this.value$.pipe(
    map(value => value.minute),
    distinctUntilChanged(),
  );
  public readonly hour$ = this.value$.pipe(
    map(value => value.hour),
    distinctUntilChanged()
  );
  public readonly dayOfMonth$ = this.value$.pipe(
    map(value => value.dayOfMonth),
    distinctUntilChanged()
  );
  public readonly month$ = this.value$.pipe(
    map(value => value.month),
    distinctUntilChanged()
  );
  public readonly year$ = this.value$.pipe(
    map(value => value.year),
    distinctUntilChanged()
  );

  public updateWith(ojb: Partial<PrizmCronValueObject>): void
  public updateWith(ojb: string): void
  public updateWith(value: Partial<PrizmCronValueObject> | string): void {
    const obj = (value && typeof value === 'object')
      ? value
      : prizmCronConvertToObject(value as string);

   this.value$$.next({
     ...this.value$$.value,
     ...obj,
   });
  }
}
