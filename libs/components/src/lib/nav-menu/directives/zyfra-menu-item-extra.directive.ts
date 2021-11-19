import { Directive, TemplateRef } from '@angular/core';
@Directive({
  selector: '[zyfraMenuItemExtra]'
})
export class ZyfraMenuItemExtraDirective {
  constructor(public template: TemplateRef<any>) {}
}
