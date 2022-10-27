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
import { ZuiEventZoneService } from './event-zone.service';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { takeUntil, tap } from 'rxjs/operators';

/**
 * TODO change after migrate to Angular 13
 * injector support for ng-template
 * */
@Directive({
    selector: `[zuiEventZone]:not(ng-container), [zuiEventZoneChange]:not(ng-container), [zuiEventZoneParent]:not(ng-container)`,
    exportAs: `zuiEventZone`,
    providers: [
      ZuiEventZoneService,
      ZuiDestroyService
    ]
})
export class ZuiDropdownZoneDirective implements OnInit, OnChanges {
  @Output() zuiEventZoneEvent = new EventEmitter<number>();
  @Input() zuiEventZoneParent?: ZuiDropdownZoneDirective;
  @Input() zuiEventZoneHost?: HTMLElement;

  get host(): HTMLElement {
    return this.zuiEventZoneHost ?? this.elementRef.nativeElement;
  }

  constructor(
    @Self() private readonly dz: ZuiEventZoneService,
    @Optional() @SkipSelf() public readonly parentDropdownZoneService: ZuiEventZoneService,
    private readonly destroy$: ZuiDestroyService,
    private readonly elementRef: ElementRef,
    public readonly injector: Injector,
  ) {}

  public ngOnInit(): void {
    this.dz.init(this.host, 'click', this.zuiEventZoneParent?.dz ?? this.parentDropdownZoneService);
    this.dz.event$.pipe(
      tap((time) => this.zuiEventZoneEvent.next(time)),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.zuiEventZoneElement) this.dz.init(this.host, 'click', this.zuiEventZoneParent?.dz);
  }
}
