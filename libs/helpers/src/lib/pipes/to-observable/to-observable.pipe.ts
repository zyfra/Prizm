import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject, defer, isObservable, Observable, of } from 'rxjs';
import * as operators from 'rxjs/operators';
import { shareReplay } from 'rxjs/operators';
import { PrizmToObservableOperator } from './model';

@Pipe({ name: 'prizmToObservable' })
export class PrizmToObservablePipe<T> implements PipeTransform, OnDestroy {
  private subject$$!: BehaviorSubject<T | unknown>;
  private lastObservable$$!: Observable<T | unknown>;
  private lastOperators!: PrizmToObservableOperator[];
  public transform(
    value: T | Observable<T> | Promise<T>,
    operators: PrizmToObservableOperator[] = []
  ): Observable<T> {
    if (typeof (value as Promise<T>)?.then === 'function') {
      value = defer(() => value as Promise<T>);
    }
    let $: Observable<T> = of(value as T);
    if (!isObservable(value)) {
      if (!this.subject$$ || this.lastOperators !== operators) {
        this.subject$$ = new BehaviorSubject<unknown>(value);
        this.lastObservable$$ = this.addOperatorsToObservable(
          this.subject$$ as Observable<unknown> as Observable<T>,
          (this.lastOperators = operators)
        ).pipe(shareReplay(1));
        $ = this.lastObservable$$ as Observable<T>;
      } else {
        this.subject$$.next(value);
        return this.lastObservable$$ as Observable<T>;
      }
    } else {
      $ = value as Observable<T>;
    }

    return this.addOperatorsToObservable($, operators) as Observable<T>;
  }

  private addOperatorsToObservable(
    $: Observable<T>,
    operators: PrizmToObservableOperator[]
  ): Observable<unknown> {
    const operatorsArray = (operators ?? [])
      .map(operator => {
        if (typeof operator === 'string') return this.getOperatorFunction(operator);
        if (Array.isArray(operator)) {
          const [key, ...args] = operator;
          return this.getOperatorFunctionByKey(key as string, args);
        }
        return operator;
      })
      .filter(Boolean);

    return operators?.length ? $.pipe(...(operatorsArray as [])) : $;
  }

  private getOperatorFunction(str: string): unknown {
    const result = this.parseFunctionString(str);
    if (!result) return null;
    return this.getOperatorFunctionByKey(result.functionName, result?.args);
  }

  private getOperatorFunctionByKey(key: string, args: unknown[]): unknown {
    const method = operators[key as keyof typeof operators] as any;
    if (typeof method !== 'function') return null;
    return method(...args);
  }

  private parseFunctionString(str: string): {
    functionName: string;
    args: string[];
  } | null {
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

  ngOnDestroy(): void {
    this.subject$$?.complete();
    this.subject$$?.unsubscribe();
  }
}
