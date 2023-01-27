import { Injector, Type } from '@angular/core';
import { POLYMORPH_CONTEXT } from '../tokens/context';

/**
 * Wrapper class for a component that will be used as content for {@link PolymorphOutletDirective}
 *
 * @param component — an Angular component to be dynamically created
 * @param injector — optional {@link Injector} for lazy loaded module case
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export class PolymorphComponent<T extends object, C extends object> {
  constructor(readonly component: Type<T>, private readonly injector: Injector | null = null) {}

  public createInjector(injector: Injector, context: C): Injector {
    return Injector.create({
      parent: this.injector || injector,
      providers: [
        {
          provide: POLYMORPH_CONTEXT,
          useValue: context,
        },
      ],
    });
  }
}
