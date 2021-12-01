import { Directive, TemplateRef } from '@angular/core';
import { BaseTableTemplateDirective } from '../../@core/base-table/directives/base-table-template.directive';


@Directive({
  selector: '[zyfraTableTemplate]'
})
export class ZyfraTreeTableTemplateDirective extends BaseTableTemplateDirective{
  constructor(templateRef: TemplateRef<any>) {
    super(templateRef);
  }
}
