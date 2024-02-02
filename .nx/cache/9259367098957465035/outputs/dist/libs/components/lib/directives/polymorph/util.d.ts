import { PolymorphContent } from './types/content';
import { PolymorphTemplate } from './directives/template';
import { PolymorphComponent } from './classes/component';
export declare const isPolymorphPrimitive: <T = any>(content: PolymorphContent<T>) => boolean;
export declare const isPolymorphTemplate: <T = any>(content: PolymorphContent<T>) => boolean;
export declare const isPolymorphDirective: <C = any>(content: PolymorphContent<C> | null) => content is PolymorphTemplate<C>;
export declare const isPolymorphComponent: <C = any>(content: PolymorphContent<C> | null) => content is PolymorphComponent<Record<string, unknown>, C>;
