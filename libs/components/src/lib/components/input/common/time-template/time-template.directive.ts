import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[prizmTimeTemplate]',
  standalone: true,
})
export class PrizmTimeTemplateDirective {
  @Input()
  prizmTimeTemplate: TemplateRef<unknown> | null = null;
}
