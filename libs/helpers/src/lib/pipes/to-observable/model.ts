import { MonoTypeOperatorFunction, OperatorFunction } from 'rxjs';

export type PrizmToObservableOperator =
  | string
  | unknown[]
  | OperatorFunction<unknown, unknown>
  | MonoTypeOperatorFunction<unknown>;
