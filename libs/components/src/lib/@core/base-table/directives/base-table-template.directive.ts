import { Directive, Input, TemplateRef } from '@angular/core';

export type TableTemplateType =
  'caption'
  | 'header'
  | 'headergrouped'
  | 'body'
  | 'loadingbody'
  | 'footer'
  | 'footergrouped'
  | 'summary'
  | 'colgroup'
  | 'rowexpansion'
  | 'groupheader'
  | 'rowspan'
  | 'groupfooter'
  | 'frozenrows'
  | 'frozenheader'
  | 'frozenbody'
  | 'frozenfooter'
  | 'frozencolgroup'
  | 'frozenrowexpansion'
  | 'emptymessage'
  | 'paginatorleft'
  | 'paginatorright'
  | 'paginatordropdownitem'
  | 'input'
  | 'output'
  | 'filter';

@Directive()
export class BaseTableTemplateDirective {
  @Input() zyfraTableTemplate: TableTemplateType;

  constructor(public templateRef: TemplateRef<any>) {}

  get template() {
    return this.templateRef;
  }

  getType() {
    return this.zyfraTableTemplate;
  }
}
