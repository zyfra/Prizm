import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { prizmRequiredSetter } from '@prizm-ui/core';
import { PrizmContextWithImplicit } from '../../types/context-with-implicit';
import { prizmClamp } from '../../util/math/clamp';

const MAX_VALUE = 0x10000;

export class PrizmRepeatTimesContext implements PrizmContextWithImplicit<number> {
  constructor(readonly $implicit: number) {}
}

/**
 * Directive similar to ngFor but using a number of repetitions rather than an array
 *
 * {@link PrizmRepeatTimesDirective.prizmRepeatTimesOf requested number of times}.
 * {@link PrizmRepeatTimesContext context} for every instance of the template inherits outer context and stores
 * {@link PrizmRepeatTimesContext.$implicit index} of a template instance.
 */
@Directive({
  selector: `[prizmRepeatTimes][prizmRepeatTimesOf]`,
})
export class PrizmRepeatTimesDirective {
  @Input()
  @prizmRequiredSetter()
  set prizmRepeatTimesOf(count: number) {
    const safeCount = Math.floor(prizmClamp(count, 0, MAX_VALUE));

    const { length } = this.viewContainer;

    if (count < length) {
      this.removeContainers(length - count);
    } else {
      this.addContainers(safeCount);
    }
  }

  constructor(
    @Inject(ViewContainerRef)
    private readonly viewContainer: ViewContainerRef,
    @Inject(TemplateRef)
    private readonly templateRef: TemplateRef<PrizmRepeatTimesContext>
  ) {}

  private addContainers(count: number): void {
    for (let index = this.viewContainer.length; index < count; index++) {
      this.viewContainer.createEmbeddedView<PrizmRepeatTimesContext>(
        this.templateRef,
        new PrizmRepeatTimesContext(index)
      );
    }
  }

  private removeContainers(amount: number): void {
    for (let index = 0; index < amount; index++) {
      this.viewContainer.remove();
    }
  }
}
