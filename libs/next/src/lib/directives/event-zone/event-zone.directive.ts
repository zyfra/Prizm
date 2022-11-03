import {
  Directive,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  Self,
  SimpleChanges,
  SkipSelf,
} from '@angular/core';
import { PrizmEventZoneService } from './event-zone.service';
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
import { takeUntil, tap } from 'rxjs/operators';

/**
 * TODO change after migrate to Angular 13
 * injector support for ng-template
 * */
@Directive({
    selector: `[pzmEventZone]:not(ng-container), [pzmEventZoneChange]:not(ng-container), [pzmEventZoneParent]:not(ng-container)`,
    exportAs: `pzmEventZone`,
    providers: [
      PrizmEventZoneService,
      PrizmDestroyService
    ]
})
export class PrizmDropdownZoneDirective implements OnInit, OnChanges {
  @Output() pzmEventZoneEvent = new EventEmitter<number>();
  @Input() pzmEventZoneParent?: PrizmDropdownZoneDirective;
  @Input() pzmEventZoneHost?: HTMLElement;

  get host(): HTMLElement {
    return this.pzmEventZoneHost ?? this.elementRef.nativeElement;
  }

  constructor(
    @Self() private readonly dz: PrizmEventZoneService,
    @Optional() @SkipSelf() public readonly parentDropdownZoneService: PrizmEventZoneService,
    private readonly destroy$: PrizmDestroyService,
    private readonly elementRef: ElementRef,
    public readonly injector: Injector,
  ) {}

  public ngOnInit(): void {
    this.dz.init(this.host, 'click', this.pzmEventZoneParent?.dz ?? this.parentDropdownZoneService);
    this.dz.event$.pipe(
      tap((time) => this.pzmEventZoneEvent.next(time)),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.pzmEventZoneElement) this.dz.init(this.host, 'click', this.pzmEventZoneParent?.dz);
  }
}
