import {Directive, ElementRef, Inject, Input, OnDestroy, Optional, Renderer2, Self,} from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import {combineLatest, of, Subject} from 'rxjs';
import {delay, distinctUntilChanged, map, startWith, switchMap, take, takeUntil,} from 'rxjs/operators';
import { zuiDefaultProp, zuiRequiredSetter } from '../../decorators';
import { PolymorpheusContent } from '../../directives';

import {ZUI_HINT_OPTIONS, ZuiHintOptions} from './hint-options';

export const HINT_HOVERED_CLASS = '_hint_hovered';

@Directive({
    selector: '[zuiHint]:not(ng-container)',
    providers: [ZuiDestroyService],
})
export class ZuiHintDirective implements OnDestroy {
    @Input()
    zuiHintId?: string;

    @Input()
    @zuiDefaultProp()
    zuiHintShowDelay: ZuiHintOptions['zuiHintShowDelay'] = this.options.zuiHintShowDelay;

    @Input()
    @zuiDefaultProp()
    zuiHintHideDelay: ZuiHintOptions['zuiHintHideDelay'] = this.options.zuiHintHideDelay;

    @Input()
    @zuiDefaultProp()
    zuiHintHost: HTMLElement | null = null;

    @Input()
    @zuiRequiredSetter()
    set zuiHint(value: PolymorpheusContent | null) {
        if (!value) {
            this.hideTooltip();
            this.content = '';

            return;
        }

        this.content = value;
    }

    content: PolymorpheusContent;

    readonly componentHovered$ = new Subject<boolean>();

    constructor(
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(ZuiDestroyService)
        destroy$: ZuiDestroyService,
        @Inject(ZUI_HINT_OPTIONS) protected readonly options: ZuiHintOptions,
    ) {
        super(elementRef, hintService, activeZone, options);

        // @bad TODO: Use private provider
        combineLatest(
            hoveredService.createHovered$(elementRef.nativeElement),
            this.componentHovered$.pipe(startWith(false)),
        )
            .pipe(
                map(
                    ([directiveHovered, componentHovered]) =>
                        directiveHovered || componentHovered,
                ),
                switchMap(visible => {
                    this.toggleClass(visible);

                    return of(visible).pipe(
                        delay(visible ? this.zuiHintShowDelay : this.zuiHintHideDelay),
                    );
                }),
                switchMap(visible =>
                    visible && this.mode !== 'overflow'
                        ? obscured$.pipe(
                              map(obscured => !obscured),
                              take(2),
                          )
                        : of(visible),
                ),
                distinctUntilChanged(),
                takeUntil(destroy$),
            )
            .subscribe(visible => {
                if (visible) {
                    this.showTooltip();
                } else {
                    this.hideTooltip();
                }
            });
    }

    get id(): string | null {
        return this.zuiHintId ? this.zuiHintId + DESCRIBED_BY : null;
    }

    get host(): HTMLElement {
        return this.zuiHintHost ? this.zuiHintHost : this.elementRef.nativeElement;
    }

    public getElementClientRect(): ClientRect {
        return this.host.getBoundingClientRect();
    }

    ngOnDestroy(): void {
    }

    protected showTooltip(): void {
        if (this.content === '') {
            return;
        }

        this.toggleClass(true);
        this.hintService.add(this);
    }

    protected hideTooltip(): void {
        this.toggleClass(false);
        this.hintService.remove(this);
    }

    private toggleClass(add: boolean): void {
        if (add) {
            this.renderer.addClass(this.elementRef.nativeElement, HINT_HOVERED_CLASS);
        } else {
            this.renderer.removeClass(this.elementRef.nativeElement, HINT_HOVERED_CLASS);
        }
    }
}
