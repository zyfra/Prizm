import { InjectionToken } from '@angular/core';
import { InternalPrizmNavigationMenuItem } from '../interfaces';
import { PrizmHandler } from '../../../types';
import { PRIZM_EMPTY_ARRAY } from '@prizm-ui/core';

export type PrizmNavigationMenuChildrenHandler<T> = PrizmHandler<
  InternalPrizmNavigationMenuItem<T>,
  readonly InternalPrizmNavigationMenuItem<T>[]
>;

export const defaultNavigationMenuChildrenHandler: PrizmNavigationMenuChildrenHandler<unknown> = item => {
  return item.children || PRIZM_EMPTY_ARRAY;
};

export const PRIZM_NAVIGATION_MENU_CHILDREN_HANDLER = new InjectionToken<
  PrizmNavigationMenuChildrenHandler<unknown>
>('PRIZM_NAVIGATION_MENU_CHILDREN_HANDLER', {
  factory: () => defaultNavigationMenuChildrenHandler,
});
