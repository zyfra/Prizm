import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[zyfraSplitterTemplate]',
})
export class ZyfraSplitterTemplateDirective {
  @Input() type: string;

  constructor(public template: TemplateRef<any>) {}
}
