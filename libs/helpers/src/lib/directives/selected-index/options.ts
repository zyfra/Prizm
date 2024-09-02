import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const PRIZM_SELECTED_INDEX_ITEMS = new InjectionToken<Observable<any[]>>(
  'items for correct selected index'
);
export const PRIZM_SELECTED_INDEX_INITIAL = new InjectionToken<number>('initial selected index');
