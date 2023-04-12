import { PrizmNavigationMenuItem, PrizmNavigationMenuToolbarConfig } from '@prizm-ui/components';

export interface PersistentExpandedValue {
  [key: string]: boolean;
}

export interface CustomGroupConfig {
  title: string;
  items: CustomItem[];
  toolbarConfig?: PrizmNavigationMenuToolbarConfig;
}

export interface CustomItem extends PrizmNavigationMenuItem {
  id: string;
  groupName?: string;
  children?: CustomItem[];
}
