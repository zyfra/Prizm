import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Self,
  SimpleChanges,
  SkipSelf,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { prizmDefaultProp } from '@prizm-ui/core';
import { OutsizeEventService } from './outsize-event.service';
import { PrizmDestroyService } from '@prizm-ui/helpers';

/**
 * TODO add info to doc
 * */
@Directive({
  selector: '[prizmOutsideEvent]',
  providers: [OutsizeEventService, PrizmDestroyService],
})
export class PrizmOutsideEventDirective implements OnInit, OnChanges, OnDestroy {
  @Input() outsideElement?: HTMLElement;
  @Input() outsideParent?: PrizmOutsideEventDirective;

  @Input()
  @prizmDefaultProp()
  outsideEventName = 'click';

  @Output() readonly prizmOutsideEvent = new EventEmitter<UIEvent>();
  public readonly destroyPrevious$ = new Subject<void>();

  get htmlElement(): HTMLElement {
    return this.outsideElement ?? this.elementRef.nativeElement;
  }

  constructor(
    private elementRef: ElementRef,
    private destroyService: PrizmDestroyService,
    @Self()
    private eventZoneService: OutsizeEventService,
    @SkipSelf()
    @Optional()
    private parentEventZoneService: OutsizeEventService,
    @Inject(DOCUMENT) private readonly documentRef: Document
  ) {
    if (this.parentEventZoneService) {
      this.eventZoneService.setParent(this.parentEventZoneService);
    }
  }

  public ngOnInit(): void {
    this.safeInit();

    this.eventZoneService.outside$$
      .pipe(
        tap(v => {
          this.prizmOutsideEvent.next(v?.event);
        }),
        takeUntil(this.destroyService)
      )
      .subscribe();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.safeInit();
  }

  public async safeInit(): Promise<void> {
    this.eventZoneService.safeAddListener(this.outsideEventName, this.htmlElement);
  }

  ngOnDestroy(): void {
    this.destroyPrevious$.next();
    this.destroyPrevious$.complete();
  }
}
