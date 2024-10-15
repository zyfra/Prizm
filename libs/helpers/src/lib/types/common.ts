import { Type } from '@angular/core';

export type PrizmNonNullableProperties<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

export type PrizmHostDirective =
  | Type<unknown>
  | {
      directive: Type<unknown>;
      inputs?: string[];
      outputs?: string[];
    };
