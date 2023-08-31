import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[prizmSplitterCustomGutter]',
})
export class PrizmSplitterCustomGutterDirective {
  @Input() size!: number;
  constructor(public template: TemplateRef<any>) {}
}
