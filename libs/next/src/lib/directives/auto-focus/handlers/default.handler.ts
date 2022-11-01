import { Directive, ElementRef, Inject, Optional, Self } from '@angular/core';
import { ANIMATION_FRAME } from '@ng-web-apis/common';
import { Observable, race, timer } from 'rxjs';
import { map, skipWhile, take, throttleTime } from 'rxjs/operators';
import { PZM_POLLING_TIME } from '../../../constants/polling-time';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens/focusable-item-accessor';
import { PzmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { AbstractPzmAutofocusHandler } from './abstract.handler';

const TIMEOUT = 1000;
const NG_ANIMATION_SELECTOR = `.ng-animating`;

@Directive()
export class PzmDefaultAutofocusHandler extends AbstractPzmAutofocusHandler {
    constructor(
        @Optional()
        @Self()
        @Inject(PZM_FOCUSABLE_ITEM_ACCESSOR)
        pzmFocusableComponent: PzmFocusableElementAccessor | null,
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(ANIMATION_FRAME) private readonly animationFrame$: Observable<number>,
    ) {
        super(pzmFocusableComponent, elementRef);
    }

    public setFocus(): void {
        if (this.isTextFieldElement) {
            race(
                timer(TIMEOUT),
                this.animationFrame$.pipe(
                    throttleTime(PZM_POLLING_TIME),
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
