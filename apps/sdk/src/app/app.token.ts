import { InjectionToken } from '@angular/core';
import { TabPanelItem } from './app.types';

export const APP_TOKEN = new InjectionToken<TabPanelItem>('appToken');
