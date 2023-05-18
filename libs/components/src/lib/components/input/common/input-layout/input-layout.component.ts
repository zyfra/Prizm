import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EMPTY, merge, Subject, timer } from 'rxjs';
import { PrizmInputControl } from '../base/input-control.class';
import { PrizmInputStatusTextDirective } from '../input-status-text/input-status-text.directive';
import { PrizmInputPosition, PrizmInputSize, PrizmInputStatus } from '../models/prizm-input.models';
import { debounceTime, map, startWith, takeUntil, tap } from 'rxjs/operators';
import { PolymorphContent } from '../../../../directives/polymorph';
import { filterTruthy, PrizmDestroyService } from '@prizm-ui/helpers';

@Component({
  selector: 'prizm-input-layout',
  templateUrl: './input-layout.component.html',
  styleUrls: ['./input-layout.component.less', './input-layout-hidden-control.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'prizm-input-layout',
  },
  providers: [PrizmDestroyService],
})
export class PrizmInputLayoutComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() label: string;

  @Input() size: PrizmInputSize = 'l';

  @Input() status: PrizmInputStatus = 'default';

  @Input() outer = false;

  @Input() border = true;
  @Input() position: PrizmInputPosition = 'left';
  @Input() forceClear: boolean | null = null;
  @Output() clear = new EventEmitter<MouseEvent>();

  @HostBinding('class.has-hidden-control') get hasHiddenControl() {
    return this.control.hidden;
  }

  get showClearButton(): boolean {
    return typeof this.forceClear === 'boolean'
      ? this.forceClear
      : this.control.hasClearButton && !this.control.disabled && !this.control.empty;
  }

  @ContentChild(PrizmInputControl, { static: true }) control: PrizmInputControl<any>;
  @ContentChild(PrizmInputStatusTextDirective, { static: false })
  inputStatusText: PrizmInputStatusTextDirective;

  public statusIcon: string;
  public statusMessage: PolymorphContent | null;

  @HostBinding('class.disabled') get disabled() {
    return this.control.disabled;
  }
  @HostBinding('class.enabled') get enabled() {
    return !this.control.disabled;
  }
  private readonly innerClick$$ = new Subject<MouseEvent>();
  public readonly innerClick$ = this.innerClick$$.asObservable();

  private readonly cdr: ChangeDetectorRef = this.injector.get(ChangeDetectorRef);
  private readonly destroy$: PrizmDestroyService = this.injector.get(PrizmDestroyService);

  private foundStatusDirective: PrizmInputStatusTextDirective;

  get correctedStatus() {
    return this.foundStatusDirective?.status && this.foundStatusDirective.enable
      ? this.foundStatusDirective.status
      : this.status;
  }

  get showStatusButton(): boolean {
    return this.status !== 'default' || (this.control.invalid && this.control.touched);
  }

  constructor(private readonly injector: Injector, public readonly el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.control.stateChanges
      .pipe(
        debounceTime(10),
        tap(() => {
          this.actualizeStatusIcon();
          this.cdr.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.actualizeStatusIcon();

    merge(this.inputStatusText ? this.inputStatusText.changed.pipe(map(i => this.inputStatusText)) : EMPTY)
      .pipe(
        startWith(this.control.statusText),
        map(i => i ?? this.control.statusText),
        filterTruthy(),
        tap(text => {
          this.foundStatusDirective = text;
          this.statusMessage = text.getStatusMessage();
          this.actualizeStatusIcon();
          this.cdr.detectChanges();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    // NEED for get view children from nested controll
    timer(0)
      .pipe(
        tap(() => this.cdr.markForCheck()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.status) {
      this.actualizeStatusIcon();
    }
  }

  public onClearClick(event: MouseEvent): void {
    this.clear.next(event);
    this.control.clear(event);
    this.actualizeStatusIcon();
  }

  private actualizeStatusIcon(): void {
    let statusIcon: string;

    switch (this.correctedStatus) {
      case 'warning':
        statusIcon = 'alerts-warning';
        break;

      case 'success':
        statusIcon = 'success-circle-fill';
        break;

      case 'danger':
        statusIcon = 'alerts-info-circle-fill';
        break;

      case 'default':
      default:
        break;
    }

    if (this.control.invalid) {
      statusIcon = 'alerts-info-circle-fill';
    }

    this.statusIcon = statusIcon;
  }

  protected innerClick(event: MouseEvent) {
    this.innerClick$$.next(event);
  }
}
