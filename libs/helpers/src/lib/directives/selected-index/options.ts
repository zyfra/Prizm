import { InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

export const PRIZM_SELECTED_INDEX_ITEMS = new InjectionToken<Observable<any[]>>(
  'items for correct selected index'
);
export const PRIZM_SELECTED_INDEX_INITIAL = new InjectionToken<number>('initial selected index');
export const PRIZM_INDEX_SELECT_FN = new InjectionToken<(index: number) => boolean>(
  'func to select by index'
);
export const PRIZM_ALL_INDEXES_READY = new InjectionToken<ReplaySubject<void>>('all indexes ready');
