import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[zuiTemplate]',
})
export class ZuiTemplateDirective {
  @Input() zuiTemplate: string;

  constructor(public templateRef: TemplateRef<unknown>) {}
}
