import { Directive, Inject, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Directive({
  selector: 'ng-template[prizmBreadcrumb]',
  providers: [PrizmDestroyService],
})
export class PrizmBreadcrumbDirective implements OnDestroy {
  constructor(
    @Inject(TemplateRef) readonly template: TemplateRef<any>,
    private readonly viewContainer: ViewContainerRef
  ) {}

  public ngOnDestroy(): void {
    this.viewContainer.clear();
  }
}
