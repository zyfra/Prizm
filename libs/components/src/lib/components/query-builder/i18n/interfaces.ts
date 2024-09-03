export interface PrizmLanguageQueryBuilder {
  queryBuilder: {
    and: string;
    or: string;
    addNestedExpression: string;
    addCondition: string;
    exclude: string;
  };
}

declare module '@prizm-ui/i18n' {
  export interface PrizmLanguage extends PrizmLanguageQueryBuilder {}
}
