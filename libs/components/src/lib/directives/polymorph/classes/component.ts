import type { Type } from '@angular/core';
// eslint-disable-next-line no-duplicate-imports
import { Injector } from '@angular/core';
import { POLYMORPH_CONTEXT } from '../tokens/context';

export class PolymorphComponent<T> {
  constructor(public readonly component: Type<T>, private readonly i?: Injector) {}

  public createInjector<C>(injector: Injector, useValue?: C): Injector {
    return Injector.create({
      parent: this.i || injector,
      providers: [
        {
          provide: POLYMORPH_CONTEXT,
          useValue,
        },
      ],
    });
  }
}
