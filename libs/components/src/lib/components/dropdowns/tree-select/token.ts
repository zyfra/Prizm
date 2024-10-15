import { InjectionToken, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const PRIZM_TREE_SELECT_ITEMS_VIEW_CONTAINER_REF = new InjectionToken<
  BehaviorSubject<ViewContainerRef | null>
>('view container ref for tree select items');

export const PRIZM_TREE_SELECT_DROPDOWN_CONTROLLER = new InjectionToken<BehaviorSubject<boolean>>(
  'dropdown controller for tree select items'
);
