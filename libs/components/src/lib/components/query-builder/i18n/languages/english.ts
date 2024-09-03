import { PrizmLanguageQueryBuilder } from '../interfaces';

export const PRIZM_ENGLISH_CRON: PrizmLanguageQueryBuilder = {
  queryBuilder: {
    and: 'And',
    or: 'Or',
    exclude: 'Exclude',
    addCondition: 'Add query',
    addNestedExpression: 'Add subquery',
  },
};
