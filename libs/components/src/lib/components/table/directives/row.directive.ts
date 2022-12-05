import { Directive, Inject, Input, TemplateRef } from '@angular/core';
import { PrizmContextWithImplicit } from '../../../types';
import { prizmDefaultProp } from '@prizm-ui/core';

interface PrizmRowContext<T> extends PrizmContextWithImplicit<T> {
  readonly index: number;
}

@Directive({
  selector: `ng-template[prizmRow]`,
})
export class PrizmRowDirective<T extends Partial<Record<keyof T, any>>> {
  @Input()
  @prizmDefaultProp()
  prizmRowOf: readonly T[] = [];

  constructor(@Inject(TemplateRef) readonly template: TemplateRef<PrizmRowContext<T>>) {}

  public static ngTemplateContextGuard<T>(
    _dir: PrizmRowDirective<T>,
    _ctx: unknown
  ): _ctx is PrizmRowContext<T> {
    return true;
  }
}
