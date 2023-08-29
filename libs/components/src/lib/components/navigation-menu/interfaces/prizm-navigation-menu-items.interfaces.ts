import { TemplateRef } from '@angular/core';

export interface PrizmNavigationMenuGroup {
  id: string;
  name: string;
  icon?: string;
  children?: PrizmNavigationMenuItem[];
}

export interface PrizmNavigationMenuItem {
  text: string;
  extraTemplate?: TemplateRef<unknown> | null;
  icon?: string | null;
  children?: PrizmNavigationMenuItem[];
}

export interface InternalPrizmNavigationMenuItem<T = any> extends PrizmNavigationMenuItem {
  groupId: string | null;
  parent: InternalPrizmNavigationMenuItem | null;
  breadcrumbs: T[] | null;
  original: T | null;
  isRubricator?: boolean;
  children?: InternalPrizmNavigationMenuItem[];
}
