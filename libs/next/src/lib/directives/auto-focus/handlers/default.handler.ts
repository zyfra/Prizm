import { Directive, ElementRef, Inject, Optional, Self } from '@angular/core';
import { ANIMATION_FRAME } from '@ng-web-apis/common';
import { Observable, race, timer } from 'rxjs';
import { map, skipWhile, take, throttleTime } from 'rxjs/operators';
import { PRIZM_POLLING_TIME } from '../../../constants/polling-time';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens/focusable-item-accessor';
import { PrizmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { AbstractPrizmAutofocusHandler } from './abstract.handler';

const TIMEOUT = 1000;
const NG_ANIMATION_SELECTOR = `.ng-animating`;

@Directive()
export class PrizmDefaultAutofocusHandler extends AbstractPrizmAutofocusHandler {
    constructor(
        @Optional()
        @Self()
        @Inject(PRIZM_FOCUSABLE_ITEM_ACCESSOR)
        prizmFocusableComponent: PrizmFocusableElementAccessor | null,
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(ANIMATION_FRAME) private readonly animationFrame$: Observable<number>,
    ) {
        super(prizmFocusableComponent, elementRef);
    }

    public setFocus(): void {
        if (this.isTextFieldElement) {
            race(
                timer(TIMEOUT),
                this.animationFrame$.pipe(
                    throttleTime(PRIZM_POLLING_TIME),
                    map(() => this.element.closest(NG_ANIMATION_SELECTOR)),
                    skipWhile(Boolean),
                    take(1),
                ),
            ).subscribe(() => this.element.focus());
        } else {
            this.element.focus();
        }
    }
}
