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
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs/operators';

/**
 * TODO change after migrate to Angular 13
 * injector support for ng-template
 * */
@Directive({
    selector: `[prizmEventZone]:not(ng-container), [prizmEventZoneChange]:not(ng-container), [prizmEventZoneParent]:not(ng-container)`,
    exportAs: `prizmEventZone`,
    providers: [
      PrizmEventZoneService,
      PrizmDestroyService
    ]
})
export class PrizmDropdownZoneDirective implements OnInit, OnChanges {
  @Output() prizmEventZoneEvent = new EventEmitter<number>();
  @Input() prizmEventZoneParent?: PrizmDropdownZoneDirective;
  @Input() prizmEventZoneHost?: HTMLElement;

  get host(): HTMLElement {
    return this.prizmEventZoneHost ?? this.elementRef.nativeElement;
  }

  constructor(
    @Self() private readonly dz: PrizmEventZoneService,
    @Optional() @SkipSelf() public readonly parentDropdownZoneService: PrizmEventZoneService,
    private readonly destroy$: PrizmDestroyService,
    private readonly elementRef: ElementRef,
    public readonly injector: Injector,
  ) {}

  public ngOnInit(): void {
    this.dz.init(this.host, 'click', this.prizmEventZoneParent?.dz ?? this.parentDropdownZoneService);
    this.dz.event$.pipe(
      tap((time) => this.prizmEventZoneEvent.next(time)),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.prizmEventZoneElement) this.dz.init(this.host, 'click', this.prizmEventZoneParent?.dz);
  }
}
