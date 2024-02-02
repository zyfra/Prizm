import { InjectionToken } from '@angular/core';
import { InternalPrizmNavigationMenuItem } from '../interfaces';
import { PrizmHandler } from '../../../types';
export type PrizmNavigationMenuChildrenHandler<T> = PrizmHandler<InternalPrizmNavigationMenuItem<T>, readonly InternalPrizmNavigationMenuItem<T>[]>;
export declare const defaultNavigationMenuChildrenHandler: PrizmNavigationMenuChildrenHandler<unknown>;
export declare const PRIZM_NAVIGATION_MENU_CHILDREN_HANDLER: InjectionToken<PrizmNavigationMenuChildrenHandler<unknown>>;
