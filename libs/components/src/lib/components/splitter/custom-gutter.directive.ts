import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[prizmSplitterCustomGutter]',
  standalone: true,
})
export class PrizmSplitterCustomGutterDirective {
  @Input() size!: number;
  constructor(public template: TemplateRef<any>) {}
}
