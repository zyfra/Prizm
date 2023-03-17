import { Directive, Inject, TemplateRef } from '@angular/core';

@Directive({
  selector: `ng-template[prizmTableLoading]`,
})
export class PrizmTableLoadingDirective {
  constructor(@Inject(TemplateRef) readonly template: TemplateRef<unknown>) {}
}
