import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'ng-template[prizmInputLayoutBottom]',
})
export class PrizmInputLayoutBottomDirective {
  constructor(public readonly templateRef: TemplateRef<unknown>, public readonly view: ViewContainerRef) {}

  ngOnDestroy() {
    this.view.clear();
  }
}
