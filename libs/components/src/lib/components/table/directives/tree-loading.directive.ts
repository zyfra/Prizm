import { Directive, Inject, TemplateRef } from '@angular/core';

@Directive({
  selector: `ng-template[prizmTableTreeLoading]`,
})
export class PrizmTableTreeLoadingDirective {
  constructor(@Inject(TemplateRef) readonly template: TemplateRef<unknown>) {}
}
