import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[zyfraTemplate]',
})
export class ZyfraTemplateDirective {
  @Input() zyfraTemplate: string;

  constructor(public templateRef: TemplateRef<unknown>) {}
}
