import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmLanguageQueryBuilder } from './interfaces';

export const PRIZM_QUERY_BUILDER = new InjectionToken<Observable<PrizmLanguageQueryBuilder['queryBuilder']>>(
  `query builder texts`
);
