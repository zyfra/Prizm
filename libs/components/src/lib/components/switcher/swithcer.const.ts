import { InjectionToken, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const INITIAL_SWITHCER_INDEX = 0;
export const SWITCHER_VIEW_CONTAINER = new InjectionToken<BehaviorSubject<ViewContainerRef>>(
  'view ref for switcher'
);
