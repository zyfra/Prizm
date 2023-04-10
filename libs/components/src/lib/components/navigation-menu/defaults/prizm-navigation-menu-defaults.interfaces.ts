import {
  PrizmNavigationMenuEmptyMessageConfig,
  PrizmNavigationMenuHeaderConfig,
  PrizmNavigationMenuSearchConfig,
  PrizmNavigationMenuSettingsConfig,
  PrizmNavigationMenuToolbarConfig,
} from '../interfaces';

export const DEFAULT_HEADER_CONFIG: PrizmNavigationMenuHeaderConfig = {
  showSettings: false,
  showHome: true,
};

export const DEFAULT_SETTINGS: PrizmNavigationMenuSettingsConfig = {
  singleGroup: false,
  selectionMode: 'single',
  selectedSize: 'standard',
};

export const DEFAULT_TOOLBAR_CONFIG: PrizmNavigationMenuToolbarConfig = {
  filter: false,
  group: false,
  folderMode: false,
  rubricatorMode: false,
  search: false,
  closeAll: false,
  refresh: false,
};

export const DEFAULT_SEARCH_CONFIG: PrizmNavigationMenuSearchConfig = {
  searchSource: 'hierarchical',
  searchDebounce: 300,
  searchPlaceholder: '',
};

export const DEFAULT_EMPTY_MESSAGE_CONFIG: PrizmNavigationMenuEmptyMessageConfig = {
  title: 'Нет данных для отображения',
  subtitle: 'Чтобы просмотреть информацию в этой области нужно изменить условия отображения или фильтрации.',
};
