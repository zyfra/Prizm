import { TemplateRef } from '@angular/core';
import { PolymorphComponent } from '../classes/component';
import { PolymorphTemplate } from '../directives/template';
import { PolymorphHandler } from './handler';
import { PolymorphPrimitive } from './primitive';

/**
 * All content types supported by {@link PolymorphOutletDirective}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type PolymorphContent<C = any> =
  | TemplateRef<C>
  | C
  | PolymorphTemplate<Partial<C> | ''> // string is untyped, e.g. 'any'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | PolymorphComponent<object, C>
  | PolymorphHandler<C>
  | PolymorphPrimitive;
