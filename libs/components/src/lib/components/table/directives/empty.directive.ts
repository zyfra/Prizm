import { Directive, Inject, TemplateRef } from '@angular/core';

@Directive({
  selector: `ng-template[prizmTableEmpty]`,
})
export class PrizmTableEmptyDirective {
  constructor(@Inject(TemplateRef) readonly template: TemplateRef<unknown>) {}
}
