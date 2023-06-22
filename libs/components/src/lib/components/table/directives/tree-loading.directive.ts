import { Directive, Inject, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: `ng-template[prizmTableTreeLoading]`,
})
export class PrizmTableTreeLoadingDirective implements OnDestroy {
  constructor(
    @Inject(TemplateRef) readonly template: TemplateRef<any>,
    public readonly viewContainer: ViewContainerRef
  ) {}

  public ngOnDestroy(): void {
    this.viewContainer.clear();
  }
}
