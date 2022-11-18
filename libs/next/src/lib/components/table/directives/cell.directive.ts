import { Directive, Inject, Input, TemplateRef } from '@angular/core';
import { tuiDefaultProp } from '@taiga-ui/cdk';

@Directive({
  selector: `[prizmCell]`,
})
export class PrizmCellDirective {
  @Input()
  @tuiDefaultProp()
  prizmCell = ``;

  constructor(@Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>) {}
}
