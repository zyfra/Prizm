import { TemplateRef } from '@angular/core';
import { PolymorphContent } from './types/content';
import { PolymorphTemplate } from './directives/template';
import { PolymorphComponent } from './classes/component';

export const isPolymorphPrimitive = <T = any>(content: PolymorphContent<T>): boolean => {
  if (isPolymorphTemplate(content)) return false;
  if (isPolymorphComponent(content)) return false;
  return true;
};

export const isPolymorphTemplate = <T = any>(content: PolymorphContent<T>) => {
  if (isPolymorphDirective(content)) {
    return true;
  }

  return content instanceof TemplateRef ? true : false;
};

export const isPolymorphDirective = <C = any>(
  content: PolymorphContent<C> | null
): content is PolymorphTemplate<C> => {
  return content instanceof PolymorphTemplate;
};

export const isPolymorphComponent = <C = any>(
  content: PolymorphContent<C> | null
): content is PolymorphComponent<C> => {
  return content instanceof PolymorphComponent;
};
