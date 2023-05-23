import { Directive, Inject, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';

@Directive({
  selector: `[prizmCell]`,
  exportAs: 'prizmCell',
})
export class PrizmCellDirective implements OnDestroy {
  @Input()
  @prizmDefaultProp()
  prizmCell = ``;

  constructor(
    @Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>,
    public readonly viewContainer: ViewContainerRef
  ) {}

  public ngOnDestroy(): void {
    this.viewContainer.clear();
  }
}
