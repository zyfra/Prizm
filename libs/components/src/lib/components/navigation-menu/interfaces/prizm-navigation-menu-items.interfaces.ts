import { TemplateRef } from '@angular/core';

export interface PrizmNavigationMenuGroup {
  id: string;
  name: string;
  icon?: string;
  children?: PrizmNavigationMenuItem[];
}

export interface PrizmNavigationMenuItem {
  text: string;
  extraTemplate?: TemplateRef<unknown>;
  icon?: string;
  children?: PrizmNavigationMenuItem[];
}

export interface InternalPrizmNavigationMenuItem<T = any> extends PrizmNavigationMenuItem {
  groupId: string;
  parent: InternalPrizmNavigationMenuItem | null;
  breadcrumbs: T[];
  original: T;
  isRubricator?: boolean;
  children?: InternalPrizmNavigationMenuItem[];
}
