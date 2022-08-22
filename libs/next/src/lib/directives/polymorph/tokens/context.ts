import {InjectionToken} from '@angular/core';

/**
 * Use this token to access context within your components when
 * instantiating them through {@link PolymorphOutletDirective}
 */
export const POLYMORPH_CONTEXT = new InjectionToken<Record<string, unknown>>(
    'Context from *polymorphOutlet',
);
