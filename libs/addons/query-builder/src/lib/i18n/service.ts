import { Injectable } from '@angular/core';
import { PrizmI18nCustomService, PrizmI18nFn } from '@prizm-ui/i18n';
import { PrizmLanguageQueryBuilder } from './model';
import { PRIZM_RUSSIAN_QUERY_BUILDER } from './languages/ru';
import { PRIZM_ENGLISH_QUERY_BUILDER } from './languages/en';

@Injectable({
  providedIn: 'root',
})
export class PrizmI18nQueryBuilderService extends PrizmI18nCustomService<PrizmLanguageQueryBuilder> {
  override fn: PrizmI18nFn<PrizmLanguageQueryBuilder> = key => {
    if (key === 'english') return PRIZM_ENGLISH_QUERY_BUILDER;
    return PRIZM_RUSSIAN_QUERY_BUILDER;
  };
}
