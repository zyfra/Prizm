import {Directive, ElementRef, Inject, Input, OnChanges, OnDestroy, Output, Renderer2,} from '@angular/core';
import {ZuiDestroyService} from '@digital-plant/zyfra-helpers';
import {zuiDefaultProp, zuiRequiredSetter} from '../../decorators';
import {PolymorpheusContent} from '../index';

import {ZUI_HINT_OPTIONS, ZuiHintOptions} from './hint-options';
import {ZuiOverlayControl, ZuiOverlayRelativePosition, ZuiOverlayService} from "../../modules/overlay";
import {combineLatest, Observable, of} from "rxjs";
import {ZuiHoveredService} from "../../services";
import {delay, map, skip, switchMap, takeUntil, tap} from "rxjs/operators";
import {ZuiHintContainerComponent} from "./hint-container.component";
import { ZuiHintService } from './hint.service';

export const HINT_HOVERED_CLASS = '_hint_hovered';

@Directive({
    selector: '[zuiHint]:not(ng-container)',
    providers: [
      ZuiDestroyService,
    ],
    exportAs: 'zuiHint'
})
export class ZuiHintDirective implements OnChanges, OnDestroy {
    @Input()
    @zuiDefaultProp()
    zuiHintMode: ZuiHintOptions['mode'] = this.options.mode;

    @Input()
    @zuiDefaultProp()
    zuiAutoReposition: ZuiHintOptions['autoReposition'] = this.options.autoReposition;

    @Input()
    @zuiDefaultProp()
    zuiHintDirection: ZuiHintOptions['direction'] = this.options.direction;

    @Input()
    @zuiDefaultProp()
    zuiHintId: string = 'hintId_' + Math.random();

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
      @Inject(ZuiHintService) private readonly hintService: ZuiHintService,
    ) {}

    get id(): string | null {
      return this.zuiHintId ?? null;
    }

    get host(): HTMLElement {
      return this.zuiHintHost ?? this.elementRef.nativeElement;
    }

    ngOnChanges(): void {
      this.destroy$.next();
      const position = new ZuiOverlayRelativePosition({
        // TODO remove any
        placement: this.zuiHintDirection as any,
        autoReposition: this.zuiAutoReposition,
        element: this.host
      });


      this.overlay = this.zuiOverlayService
        .position(position)
        .content(ZuiHintContainerComponent, {
          content: () => this.content,
          mode: () => this.zuiHintMode,
          id: this.zuiHintId,
          context: {
            // TODO add optional context $implicit
            hintMode: this.zuiHintMode,
            autoReposition: this.zuiAutoReposition,
            hintDirection: this.zuiHintDirection,
            hintId: this.zuiHintId,
            hintShowDelay: this.zuiHintShowDelay,
            hintHideDelay: this.zuiHintHideDelay,
            hintHost: this.zuiHintHost,
          },
        })
        .create();

      combineLatest([
        this.hoveredService.createHovered$(this.host),
        this.hintService.childHovered(this.id)
      ]).pipe(
        map(([thisHovered, containerHovered]) => {
          return thisHovered || containerHovered
        }),
        switchMap(show => {
          const delayTime = show ? this.zuiHintShowDelay : this.zuiHintHideDelay;
          return of(show).pipe(delay(delayTime));
        }),
        tap(show => this.toggle(show)),
        takeUntil(this.destroy$.pipe(skip(1))),
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
