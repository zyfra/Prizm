import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmZoneEventService } from './zone-event.service';
import { PrizmDestroyService } from '@prizm-ui/helpers';

/**
 * listening inside/ouside events in zone
 * also can use in none nested elements to create common zone and detect events
 * TODO: add example to doc
 * */
@Directive({
  selector: '[prizmZoneEvent]',
  exportAs: 'prizmZoneEvent',
  standalone: true,
  providers: [PrizmZoneEventService, PrizmDestroyService],
})
export class PrizmZoneEventDirective implements OnInit, OnChanges, OnDestroy {
  @Input() zoneElement?: HTMLElement;
  @Input() parentZone?: PrizmZoneEventDirective;
  @Input() childrenZones: PrizmZoneEventService[] = [];

  @Input()
  @prizmDefaultProp()
  zoneEventName = 'click';

  @Input()
  @prizmDefaultProp()
  zoneActive = true;

  @Output() readonly zoneOutsideEvent = new EventEmitter<UIEvent>();
  @Output() readonly zoneInsideEvent = new EventEmitter<UIEvent>();
  public readonly destroyPrevious$ = new Subject<void>();

  get htmlElement(): HTMLElement {
    return this.zoneElement ?? this.elementRef.nativeElement;
  }
  private readonly elementRef: ElementRef = inject(ElementRef);
  private readonly destroyService: PrizmDestroyService = inject(PrizmDestroyService);
  private readonly eventZoneService: PrizmZoneEventService = inject(PrizmZoneEventService, {
    self: true,
  });
  private readonly parentEventZoneService: PrizmZoneEventService | null = inject(PrizmZoneEventService, {
    skipSelf: true,
    optional: true,
  });

  constructor() {
    if (this.parentEventZoneService) {
      this.eventZoneService.setParent(this.parentEventZoneService);
    }
  }

  private initChildren(childrenZones: PrizmZoneEventService[]) {
    childrenZones.map(childZone => {
      this.initChild(childZone);
    });
  }

  private initChild(child: PrizmZoneEventService) {
    if (child.parents.includes(this.eventZoneService)) return;
    child.setParent(this.eventZoneService);
    child.parents.forEach(c => this.initChild(c));
  }
  private deleteChildren(childrenZones: PrizmZoneEventService[]) {
    childrenZones.map(childZone => {
      this.deleteChild(childZone);
    });
  }

  private deleteChild(child: PrizmZoneEventService) {
    if (!child.parents.includes(this.eventZoneService)) return;
    child.deleteParent(this.eventZoneService);
    child.parents.forEach(c => this.deleteChild(c));
  }

  public ngOnInit(): void {
    if (this.parentZone) {
      this.eventZoneService.setParent(this.parentZone.eventZoneService);
    }
    this.safeInit();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.safeInit();
    if (changes['childrenZones']?.previousValue) this.deleteChildren(changes['childrenZones']?.previousValue);
    if (changes['childrenZones']?.currentValue) this.initChildren(changes['childrenZones']?.currentValue);
  }

  public async safeInit(): Promise<void> {
    this.destroyPrevious$.next();
    this.eventZoneService.destroy();
    if (!this.zoneActive) return;
    this.eventZoneService.safeAddListener(this.zoneEventName, this.htmlElement);

    this.eventZoneService.outside$$
      .pipe(
        tap(event => {
          this.zoneOutsideEvent.next(event?.event);
        }),
        takeUntil(this.destroyService),
        takeUntil(this.destroyPrevious$)
      )
      .subscribe();

    this.eventZoneService.inside$$
      .pipe(
        tap(event => {
          this.zoneInsideEvent.next(event?.event);
        }),
        takeUntil(this.destroyService),
        takeUntil(this.destroyPrevious$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroyPrevious$.next();
    this.destroyPrevious$.complete();
    this.deleteChildren(this.childrenZones);
  }
}
