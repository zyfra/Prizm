import { ElementRef, InjectionToken, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PrizmSwitcherItemsTrackBy } from './switcher.interface';

export const INITIAL_SWITHCER_INDEX = 0;
export const SWITCHER_VIEW_CONTAINER = new InjectionToken<BehaviorSubject<ViewContainerRef>>(
  'view ref for switcher'
);
export const SWITCHER_CONTAINER = new InjectionToken<BehaviorSubject<ElementRef<HTMLElement>>>(
  'element container for switcher'
);

export const SWITCHER_DEFAULT_ITEMS_TRACK_BY: PrizmSwitcherItemsTrackBy = (idx, item) => {
  return !!item;
};
