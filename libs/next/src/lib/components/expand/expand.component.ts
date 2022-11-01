import { NgIfContext } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { pzmDefaultProp, pzmRequiredSetter } from '../../decorators';
import { zuiIsCurrentTarget } from '../../util/dom';

import { ZuiExpandContentDirective } from './expand-content.directive';
import { ZUI_EXPAND_LOADED } from './expand.const';

enum State {
    Idle,
    Loading,
    Prepared,
    Animated,
}

const LOADER_HEIGHT = 48;

@Component({
    selector: 'zui-expand',
    templateUrl: './expand.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./expand.component.less'],
})
export class ZuiExpandComponent {
    @ViewChild('wrapper')
    private readonly contentWrapper?: ElementRef<HTMLDivElement>;

    private state = State.Idle;

    @Input()
    @pzmDefaultProp()
    isLoading = false;

    @Input()
    @pzmRequiredSetter()
    set expanded(expanded: boolean | null) {
        if (this.expanded_ === null) {
            this.expanded_ = expanded;

            return;
        }

        if (this.state !== State.Idle) {
            this.expanded_ = expanded;
            this.state = State.Animated;

            return;
        }

        this.expanded_ = expanded;
        this.reTrigger(this.isLoading && expanded ? State.Loading : State.Animated);
    }

    @ContentChild(ZuiExpandContentDirective, {read: TemplateRef})
    public content: TemplateRef<NgIfContext<boolean>> | null = null;

    @HostBinding('class._expanded')
    @HostBinding('attr.aria-expanded')
    private expanded_: boolean | null = null;

    @HostBinding('attr.testId')
    readonly testId = 'pzm_expand';

    @HostListener('transitionend', ['$event'])
    public onTransitionEnd(event: TransitionEvent): void {
      if (
        zuiIsCurrentTarget(event) &&
        event.propertyName === 'opacity' &&
        this.state === State.Animated
      ) {
        this.state = State.Idle;
      }
    }

    @HostListener(ZUI_EXPAND_LOADED, ['$event'])
    public onExpandLoaded(event: Event): void {
      event.stopPropagation();

      if (this.state === State.Loading) {
        this.reTrigger(State.Animated);
      }
    }

    constructor(
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    @HostBinding('class._overflow')
    get overflow(): boolean {
        return this.state !== State.Idle;
    }

    @HostBinding('class._loading')
    get loading(): boolean {
        return !!this.expanded_ && this.isLoading && this.state === State.Loading;
    }

    @HostBinding('style.height.px')
    get height(): number | null {
        const {expanded_, state, contentWrapper} = this;

        if (
            (expanded_ && state === State.Prepared) ||
            (!expanded_ && state === State.Animated)
        ) {
            return 0;
        }

        if (
            contentWrapper &&
            ((!expanded_ && state === State.Prepared) ||
                (expanded_ && state === State.Animated))
        ) {
            return contentWrapper.nativeElement.offsetHeight;
        }

        if (contentWrapper && expanded_ && state === State.Loading) {
            return Math.max(contentWrapper.nativeElement.offsetHeight, LOADER_HEIGHT);
        }

        return null;
    }

    get contentVisible(): boolean {
        return this.expanded_ || this.state !== State.Idle;
    }

    private reTrigger(state: State): void {
        this.state = State.Prepared;

        // We need delay to re-trigger CSS height transition from the correct number
        setTimeout(() => {
            if (this.state !== State.Prepared) {
                return;
            }

            this.state = state;
            this.changeDetectorRef.markForCheck();
        });
    }
}
