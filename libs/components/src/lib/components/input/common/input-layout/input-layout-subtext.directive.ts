import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'ng-template[prizmInputLayoutSubtext]',
})
export class PrizmInputLayoutSubtextDirective {
  constructor(public readonly templateRef: TemplateRef<unknown>, public readonly view: ViewContainerRef) {}

  ngOnDestroy() {
    this.view.clear();
  }
}
