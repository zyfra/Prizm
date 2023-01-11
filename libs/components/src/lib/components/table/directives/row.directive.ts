import { Directive, Inject, Input, TemplateRef, TrackByFunction } from '@angular/core';
import { PrizmContextWithImplicit } from '../../../types';
import { prizmDefaultProp } from '@prizm-ui/core';

interface PrizmRowContext<T> extends PrizmContextWithImplicit<T> {
  readonly index: number;
  readonly first: boolean;
  readonly last: boolean;
  readonly odd: boolean;
  readonly even: boolean;
  readonly count: number;
}

@Directive({
  selector: `ng-template[prizmRow]`,
})
export class PrizmRowDirective<T extends Partial<Record<keyof T, any>>> {
  @Input()
  @prizmDefaultProp()
  prizmRowOf: readonly T[] = [];

  public static ngTemplateContextGuard<T>(
    _dir: PrizmRowDirective<T>,
    _ctx: unknown
  ): _ctx is PrizmRowContext<T> {
    return true;
  }

  @Input()
  prizmRowTrackBy: TrackByFunction<T> = () => {
    null;
  };

  constructor(@Inject(TemplateRef) readonly template: TemplateRef<PrizmRowContext<T>>) {}
}
