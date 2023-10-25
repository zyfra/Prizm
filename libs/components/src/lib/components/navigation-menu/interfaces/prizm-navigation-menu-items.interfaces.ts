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
  /** If set to true - interaction with item will toggle it's expanded state */
  isGroup?: boolean;
  children?: PrizmNavigationMenuItem[];
}

export interface InternalPrizmNavigationMenuItem<T = unknown> extends PrizmNavigationMenuItem {
  groupId: string | null;
  parent: InternalPrizmNavigationMenuItem | null;
  breadcrumbs: T[] | null;
  original: T | null;
  isRubricator?: boolean;
  children?: InternalPrizmNavigationMenuItem[];
}
