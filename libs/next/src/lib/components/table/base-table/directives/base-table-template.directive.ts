import { Directive, Input, TemplateRef } from '@angular/core';

export type TableTemplateType =
  | 'caption'
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

@Directive({
  selector: '[prizmTableTemplate]',
})
export class BaseTableTemplateDirective {
  @Input() prizmTableTemplate: TableTemplateType;

  constructor(public templateRef: TemplateRef<unknown>) {}

  get template(): TemplateRef<unknown> {
    return this.templateRef;
  }

  public getType(): TableTemplateType {
    return this.prizmTableTemplate;
  }
}
