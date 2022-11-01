import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[pzmTemplate]',
})
export class PzmTemplateDirective {
  @Input() pzmTemplate: string;

  constructor(public templateRef: TemplateRef<unknown>) {}
}
