import type { TemplateRef } from '@angular/core';
import type { PolymorphComponent } from '../classes/component';
import type { PolymorphTemplate } from '../directives/template';
import type { PolymorphHandler } from './handler';
import type { PolymorphPrimitive } from './primitive';

/**
 * All content types supported by {@link PolymorphOutletDirective}
 */
export type PolymorphContent<C = any> =
  | PolymorphComponent<unknown>
  | PolymorphHandler<C>
  | PolymorphPrimitive
  | PolymorphTemplate<Partial<C> | ''> // string is untyped, e.g. 'any'
  | TemplateRef<Partial<C>>;
