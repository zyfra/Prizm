import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  NgZone,
  Optional,
  Output,
} from '@angular/core';
import { ANIMATION_FRAME } from '@ng-web-apis/common';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith, throttleTime } from 'rxjs/operators';
import { prizmFadeIn } from '../../animations';
import { prizmZoneOptimized } from '../../observables';
import { PRIZM_ANIMATION_OPTIONS, PRIZM_SCROLL_REF } from '../../tokens';
import { AnimationOptions } from '@angular/animations';
import { PrizmAbstractTestId } from '../../abstract/interactive';

@Component({
  selector: 'prizm-scroll-controls',
  templateUrl: './scroll-controls.component.html',
  styleUrls: ['./scroll-controls.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [prizmFadeIn],
})
export class PrizmScrollControlsComponent extends PrizmAbstractTestId {
  override readonly testId_ = 'ui_scroll_controls';

  @Input() scrollRef: HTMLElement | null = this.scrollRef_?.nativeElement ?? null;

  readonly refresh$ = this.animationFrame$.pipe(
    throttleTime(300),
    map(() => this.scrollbars),
    startWith([false, false]),
    distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
    prizmZoneOptimized(this.ngZone)
  );

  @Output() horizontal = this.refresh$.pipe(map(bars => Boolean(bars[1])));

  @Output() vertical = this.refresh$.pipe(map(bars => Boolean(bars[0])));

  readonly animation = {
    value: '',
    ...this.options,
  } as const;

  constructor(
    @Inject(PRIZM_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
    @Inject(NgZone) private readonly ngZone: NgZone,
    @Inject(DOCUMENT) private readonly documentRef: Document,
    @Optional()
    @Inject(PRIZM_SCROLL_REF)
    private readonly scrollRef_: ElementRef<HTMLElement> | null,
    @Inject(ANIMATION_FRAME) private readonly animationFrame$: Observable<number>
  ) {
    super();
  }

  private get scrollbars(): [boolean, boolean] {
    const ele = this.scrollRef ? this.scrollRef : this.documentRef.documentElement;
    const { clientHeight, scrollHeight, clientWidth, scrollWidth } = this.scrollRef
      ? this.scrollRef
      : this.documentRef.documentElement;
    console.log('#mz ', {
      ele,
      scrollRef: this.scrollRef,
      documentElement: this.documentRef.documentElement,
    });

    return [
      Math.ceil((clientHeight / scrollHeight) * 100) < 100,
      Math.ceil((clientWidth / scrollWidth) * 100) < 100,
    ];
  }
}
