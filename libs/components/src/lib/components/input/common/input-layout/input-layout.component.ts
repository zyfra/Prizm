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
import { timer } from 'rxjs';
import { PrizmInputControl } from '../base/input-control.class';
import { PrizmInputStatusTextDirective } from '../input-status-text/input-status-text.directive';
import { PrizmInputPosition, PrizmInputSize, PrizmInputStatus } from '../models/prizm-input.models';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { PolymorphContent } from '../../../../directives/polymorph';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Component({
  selector: 'prizm-input-layout',
  templateUrl: './input-layout.component.html',
  styleUrls: ['./input-layout.component.less'],
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
  private readonly cdr: ChangeDetectorRef = this.injector.get(ChangeDetectorRef);
  private readonly destroy$: PrizmDestroyService = this.injector.get(PrizmDestroyService);

  get showStatusButton(): boolean {
    return this.status !== 'default' || (this.control.invalid && this.control.touched);
  }

  constructor(private readonly injector: Injector, public readonly el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.control.stateChanges
      .pipe(
        debounceTime(10),
        tap(() => {
          this.actualaizeStatus();
          this.cdr.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.actualaizeStatus();

    if (this.inputStatusText) {
      this.inputStatusText.changed
        .pipe(
          tap(() => {
            this.statusMessage = this.inputStatusText.getStatusMessage();
            this.cdr.detectChanges();
          }),
          takeUntil(this.destroy$)
        )
        .subscribe();
    }

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
      this.actualaizeStatus();
    }
  }

  public onClearClick(event: MouseEvent): void {
    this.clear.next(event);
    this.control.clear(event);
    this.actualaizeStatus();
  }

  private actualaizeStatus(): void {
    let statusIcon: string;

    switch (this.status) {
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
    this.statusMessage = this.inputStatusText?.getStatusMessage() || '';
  }
}
