import { Directive, Inject, Input, TemplateRef } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';

@Directive({
  selector: `[prizmCell]`,
  exportAs: 'prizmCell',
})
export class PrizmCellDirective {
  @Input()
  @prizmDefaultProp()
  prizmCell = ``;

  constructor(@Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>) {}
}
