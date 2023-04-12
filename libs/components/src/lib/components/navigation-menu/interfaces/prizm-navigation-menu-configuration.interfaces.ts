export interface PrizmNavigationMenuSearchConfig {
  /**
    [hierarchical] - If menu's search input has value it will apply on a group. If group's search input has value it will take precedence over menu's value;

    [menu] - Only menu's search value is taken into account

    [group] - Only group's search value is taken into account
  */
  searchSource?: 'hierarchical' | 'menu' | 'group';

  searchDebounce?: number;

  searchPlaceholder?: string;
}

export interface PrizmNavigationMenuHeaderConfig {
  showHome?: boolean;
  /** Temporary unavailable - settings dropdown figma + implementation required */
  showSettings?: boolean;
}

export interface PrizmNavigationMenuToolbarConfig {
  filter?: boolean;
  group?: boolean;
  folderMode?: boolean;
  rubricatorMode?: boolean;
  search?: boolean;
  closeAll?: boolean;
  refresh?: boolean;
}

export interface PrizmNavigationMenuEmptyMessageConfig {
  title: string;
  subtitle: string;
}

/** Temporary unavailable - settings dropdown figma + implementation required */
export interface PrizmNavigationMenuSettingsConfig {
  singleGroup?: boolean;
  selectionMode?: SelectionType;
  selectedSize?: MenuItemSize;
}

export type SelectionType = 'single' | 'checkbox';
export type MenuItemSize = 'standard' | 'enlarged';
export type ViewMode = 'rubricator' | 'folder' | 'hierarchy';
