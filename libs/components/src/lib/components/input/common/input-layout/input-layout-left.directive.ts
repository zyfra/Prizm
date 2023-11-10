import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'ng-template[prizmInputLayoutLeft]',
  standalone: true,
})
export class PrizmInputLayoutLeftDirective {
  constructor(public readonly templateRef: TemplateRef<unknown>, public readonly view: ViewContainerRef) {}

  ngOnDestroy() {
    this.view.clear();
  }
}
