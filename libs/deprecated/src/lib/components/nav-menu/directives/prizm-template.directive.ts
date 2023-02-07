import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[prizmTemplate]',
})
export class PrizmTemplateDirective {
  @Input() prizmTemplate: string;

  constructor(public templateRef: TemplateRef<unknown>) {}
}
