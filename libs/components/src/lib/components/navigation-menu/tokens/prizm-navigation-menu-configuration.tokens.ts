import { InjectionToken } from '@angular/core';
import { DEFAULT_SEARCH_CONFIG, DEFAULT_SETTINGS } from '../defaults';
import {
  PrizmNavigationMenuSearchConfig,
  PrizmNavigationMenuSettingsConfig,
} from '../interfaces/prizm-navigation-menu-configuration.interfaces';

export const PRIZM_NAVIGATION_MENU_SEARCH_CONFIG = new InjectionToken<PrizmNavigationMenuSearchConfig>(
  'PRIZM_NAVIGATION_MENU_SEARCH_CONFIG',
  {
    factory: (): PrizmNavigationMenuSearchConfig => DEFAULT_SEARCH_CONFIG,
  }
);

export const PRIZM_NAVIGATION_MENU_SETTINGS_CONFIG = new InjectionToken<PrizmNavigationMenuSettingsConfig>(
  'PRIZM_NAVIGATION_MENU_SETTINGS_CONFIG',
  {
    factory: (): PrizmNavigationMenuSettingsConfig => DEFAULT_SETTINGS,
  }
);
