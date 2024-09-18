import { ElementRef, InjectionToken, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const TREE_SELECT_VIEW_CONTAINER = new InjectionToken<BehaviorSubject<ViewContainerRef>>(
  'view ref for tree select'
);
export const TREE_SELECT_CONTAINER = new InjectionToken<BehaviorSubject<ElementRef<HTMLElement>>>(
  'element container for tree select'
);
