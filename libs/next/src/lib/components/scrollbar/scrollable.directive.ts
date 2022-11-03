import { Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { PZM_SCROLLABLE } from '../../constants/events';

@Directive({
    selector: '[pzmScrollable]',
})
export class PrizmScrollableDirective implements OnInit {
    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    ngOnInit(): void {
        this.elementRef.nativeElement.dispatchEvent(
            new CustomEvent(PZM_SCROLLABLE, {
                bubbles: true,
                detail: this.elementRef.nativeElement,
            }),
        );
    }
}
