import { ZuiMenuItem } from './zui-menu-item.interface';

export type SelectionType = 'single' | 'checkbox';
export type MenuItemSize = 'standard' | 'enlarged';
export type ViewMode = 'rubricator' | 'folder' | 'hierarchy';

export interface NavMenuEvent {
  item: ZuiMenuItem;
  groupIndex?: number;
}

export interface NavMenuSelectionEvent {
  selection: ZuiMenuItem | ZuiMenuItem[];
  groupIndex?: number;
}

export interface SettingsConfig {
  singleGroup?: boolean;
  selectionMode?: SelectionType;
  selectedSize?: MenuItemSize;
}

export const DEFAULT_SETTINGS: SettingsConfig = {
  singleGroup: false,
  selectionMode: 'single',
  selectedSize: 'standard',
};

export type HeaderConfig = {
  settings?: boolean;
  home?: boolean;
};

export interface ToolbarConfig {
  filter?: boolean;
  group?: boolean;
  filesMode?: boolean;
  rubricatorMode?: boolean;
  search?: boolean;
  closeAll?: boolean;
  refresh?: boolean;
}

export const DEFAULT_TOOLBAR_CONFIG: ToolbarConfig = {
  filter: false,
  group: false,
  filesMode: false,
  rubricatorMode: false,
  search: false,
  closeAll: false,
  refresh: false,
};
