import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { zuiRequiredSetter } from '../../decorators/required-setter';
import { ZuiContextWithImplicit } from '../../types/context-with-implicit';
import { zuiClamp } from '../../util/math/clamp';

const MAX_VALUE = 0x10000;

export class ZuiRepeatTimesContext implements ZuiContextWithImplicit<number> {
    constructor(readonly $implicit: number) {}
}

/**
 * Directive similar to ngFor but using a number of repetitions rather than an array
 *
 * {@link ZuiRepeatTimesDirective.zuiRepeatTimesOf requested number of times}.
 * {@link ZuiRepeatTimesContext context} for every instance of the template inherits outer context and stores
 * {@link ZuiRepeatTimesContext.$implicit index} of a template instance.
 */
@Directive({
    selector: `[zuiRepeatTimes][zuiRepeatTimesOf]`,
})
export class ZuiRepeatTimesDirective {
    @Input()
    @zuiRequiredSetter()
    set zuiRepeatTimesOf(count: number) {
        const safeCount = Math.floor(zuiClamp(count, 0, MAX_VALUE));

        const {length} = this.viewContainer;

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
        private readonly templateRef: TemplateRef<ZuiRepeatTimesContext>,
    ) {}

    private addContainers(count: number): void {
        for (let index = this.viewContainer.length; index < count; index++) {
            this.viewContainer.createEmbeddedView<ZuiRepeatTimesContext>(
                this.templateRef,
                new ZuiRepeatTimesContext(index),
            );
        }
    }

    private removeContainers(amount: number): void {
        for (let index = 0; index < amount; index++) {
            this.viewContainer.remove();
        }
    }
}
