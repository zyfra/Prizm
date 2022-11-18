import { Directive, Inject, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: `[prizmHead]`,
})
export class PrizmHeadDirective<T extends Partial<Record<keyof T, any>>> {
  @Input()
  prizmHead!: keyof T;

  constructor(@Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>) {}
}
