import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: `[prizmHead]`,
})
export class PrizmHeadDirective<T extends Partial<Record<keyof T, unknown>>> {
  @Input()
  prizmHead!: keyof T;

  constructor(
    @Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>,
    public readonly viewContainer: ViewContainerRef
  ) {}

  public ngOnDestroy(): void {
    this.viewContainer.clear();
  }
}
