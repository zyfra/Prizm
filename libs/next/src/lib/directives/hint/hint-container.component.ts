import {Directive, ElementRef, Inject, Input, OnDestroy, OnInit, Output, Renderer2, TemplateRef,} from '@angular/core';
import {ZuiDestroyService} from '@digital-plant/zyfra-helpers';
import {zuiDefaultProp, zuiRequiredSetter} from '../../decorators';
import {PolymorpheusContent} from '../index';

import {ZUI_HINT_OPTIONS, ZuiHintOptions} from './hint-options';
import {ZuiOverlayControl, ZuiOverlayRelativePosition, ZuiOverlayService} from "../../modules/overlay";
import {Observable, of} from "rxjs";
import {ZuiHoveredService} from "../../services";
import {delay, switchMap, takeUntil, tap} from "rxjs/operators";

export const HINT_HOVERED_CLASS = '_hint_hovered';

@Directive({
    selector: '[zuiHint]:not(ng-container)',
    providers: [ZuiDestroyService],
    exportAs: 'zuiHint'
})
export class ZuiHintDirective implements OnInit, OnDestroy {
    @zuiDefaultProp()
    zuiHintMode: ZuiHintOptions['mode'] = this.options.mode;

    @zuiDefaultProp()
    zuiAutoReposition: ZuiHintOptions['autoReposition'] = this.options.autoReposition;

    @zuiDefaultProp()
    zuiHintDirection: ZuiHintOptions['direction'] = this.options.direction;

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
            this.content = '';
            return;
        }

        this.content = value;
    }

    @Output()
    readonly zuiHoveredChange: Observable<boolean>;

    content: PolymorpheusContent;

    overlay: ZuiOverlayControl;

    constructor(
        private readonly zuiOverlayService: ZuiOverlayService,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(ZuiDestroyService) private readonly destroy$: ZuiDestroyService,
        @Inject(ZUI_HINT_OPTIONS) protected readonly options: ZuiHintOptions,
        @Inject(ZuiHoveredService) private readonly hoveredService: ZuiHoveredService,
    ) {}

    get id(): string | null {
        return this.zuiHintId ?? null;
    }

    get host(): HTMLElement {
        return this.zuiHintHost ?? this.elementRef.nativeElement;
    }

    ngOnInit() {
      const position = new ZuiOverlayRelativePosition({
        placement: this.zuiHintDirection,
        autoReposition: this.zuiAutoReposition,
        element: this.host
      });

      this.overlay = this.zuiOverlayService
        .position(position)
        .content(this.content as TemplateRef<unknown>)
        .create();

      this.hoveredService.createHovered$(this.host).pipe(
        switchMap(show => {
          const delayTime = show ? this.zuiHintShowDelay : this.zuiHintHideDelay;
          return of(show).pipe(delay(delayTime));
        }),
        tap(show => this.toggle(show)),
        takeUntil(this.destroy$),
      ).subscribe();
    }

    ngOnDestroy(): void {
      if (this.overlay) this.overlay.close();
    }

    public toggle(add: boolean): void {
        if (add) {
            this.renderer.addClass(this.elementRef.nativeElement, HINT_HOVERED_CLASS);
            this.overlay.open();
        } else {
            this.renderer.removeClass(this.elementRef.nativeElement, HINT_HOVERED_CLASS);
            this.overlay.close();
        }
    }
}
