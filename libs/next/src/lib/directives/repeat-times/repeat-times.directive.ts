import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { pzmRequiredSetter } from '../../decorators/required-setter';
import { PzmContextWithImplicit } from '../../types/context-with-implicit';
import { pzmClamp } from '../../util/math/clamp';

const MAX_VALUE = 0x10000;

export class PzmRepeatTimesContext implements PzmContextWithImplicit<number> {
    constructor(readonly $implicit: number) {}
}

/**
 * Directive similar to ngFor but using a number of repetitions rather than an array
 *
 * {@link PzmRepeatTimesDirective.pzmRepeatTimesOf requested number of times}.
 * {@link PzmRepeatTimesContext context} for every instance of the template inherits outer context and stores
 * {@link PzmRepeatTimesContext.$implicit index} of a template instance.
 */
@Directive({
    selector: `[pzmRepeatTimes][pzmRepeatTimesOf]`,
})
export class PzmRepeatTimesDirective {
    @Input()
    @pzmRequiredSetter()
    set pzmRepeatTimesOf(count: number) {
        const safeCount = Math.floor(pzmClamp(count, 0, MAX_VALUE));

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
        private readonly templateRef: TemplateRef<PzmRepeatTimesContext>,
    ) {}

    private addContainers(count: number): void {
        for (let index = this.viewContainer.length; index < count; index++) {
            this.viewContainer.createEmbeddedView<PzmRepeatTimesContext>(
                this.templateRef,
                new PzmRepeatTimesContext(index),
            );
        }
    }

    private removeContainers(amount: number): void {
        for (let index = 0; index < amount; index++) {
            this.viewContainer.remove();
        }
    }
}
