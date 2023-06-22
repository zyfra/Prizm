import { Directive, Inject, Input, TemplateRef } from '@angular/core';
import { tuiDefaultProp } from '@taiga-ui/cdk';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: `[prizmDocPageTab]`,
})
export class PrizmDocPageTabConnectorDirective {
  @Input()
  @tuiDefaultProp()
  prizmDocPageTab?: string | '';

  constructor(@Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>) {}
}
