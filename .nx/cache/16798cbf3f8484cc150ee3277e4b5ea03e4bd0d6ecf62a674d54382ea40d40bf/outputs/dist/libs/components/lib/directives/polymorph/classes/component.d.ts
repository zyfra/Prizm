import { Injector, Type } from '@angular/core';
/**
 * Wrapper class for a component that will be used as content for {@link PolymorphOutletDirective}
 *
 * @param component — an Angular component to be dynamically created
 * @param injector — optional {@link Injector} for lazy loaded module case
 */
export declare class PolymorphComponent<T extends object, C = any> {
    readonly component: Type<T>;
    private readonly injector;
    constructor(component: Type<T>, injector?: Injector | null);
    createInjector(injector: Injector, context: C): Injector;
}
