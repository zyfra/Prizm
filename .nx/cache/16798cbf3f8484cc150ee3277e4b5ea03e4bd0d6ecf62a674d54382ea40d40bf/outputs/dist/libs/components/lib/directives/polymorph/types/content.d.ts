import { TemplateRef } from '@angular/core';
import { PolymorphComponent } from '../classes/component';
import { PolymorphTemplate } from '../directives/template';
import { PolymorphHandler } from './handler';
import { PolymorphPrimitive } from './primitive';
/**
 * All content types supported by {@link PolymorphOutletDirective}
 */
export type PolymorphContent<C = any> = TemplateRef<C> | C | PolymorphTemplate<Partial<C> | ''> | PolymorphComponent<object, C> | PolymorphHandler<C> | PolymorphPrimitive;
