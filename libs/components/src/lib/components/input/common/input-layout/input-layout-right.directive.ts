import { Directive, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'ng-template[prizmInputLayoutRight]',
  standalone: true,
})
export class PrizmInputLayoutRightDirective implements OnDestroy {
  constructor(public readonly templateRef: TemplateRef<unknown>, public readonly view: ViewContainerRef) {}

  ngOnDestroy() {
    this.view.clear();
  }
}
