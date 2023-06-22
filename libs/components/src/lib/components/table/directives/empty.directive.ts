import { Directive, Inject, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: `ng-template[prizmTableEmpty]`,
})
export class PrizmTableEmptyDirective implements OnDestroy {
  constructor(
    @Inject(TemplateRef) readonly template: TemplateRef<unknown>,
    public readonly viewContainer: ViewContainerRef
  ) {}

  public ngOnDestroy(): void {
    this.viewContainer.clear();
  }
}
