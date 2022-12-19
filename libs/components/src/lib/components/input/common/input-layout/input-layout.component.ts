import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef, EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Output,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { PrizmInputControl } from '../base/input-control.class';
import { PrizmInputStatusTextDirective } from '../input-status-text/input-status-text.directive';
import { PrizmInputPosition, PrizmInputSize, PrizmInputStatus } from '../models/prizm-input.models';
import { debounceTime } from 'rxjs/operators';
import { PolymorphContent } from '../../../../directives/polymorph';

@Component({
  selector: 'prizm-input-layout',
  templateUrl: './input-layout.component.html',
  styleUrls: ['./input-layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'prizm-input-layout',
  },
})
export class PrizmInputLayoutComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit {
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
  @ContentChild(PrizmInputStatusTextDirective, { static: false }) inputStatusText: PrizmInputStatusTextDirective;

  public statusIcon: string;
  public statusMessage: PolymorphContent | null;

  private readonly cdr: ChangeDetectorRef = this.injector.get(ChangeDetectorRef);

  private subscriptions: Subscription = new Subscription();

  constructor(private readonly injector: Injector, private el: ElementRef) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.control.stateChanges.pipe(debounceTime(10)).subscribe(() => {
        this.actualaizeStatus();
        this.cdr.detectChanges();
      })
    );
  }

  ngAfterContentInit(): void {
    this.actualaizeStatus();

    this.inputStatusText &&
    this.subscriptions.add(
      this.inputStatusText.changed.subscribe(() => {
        this.statusMessage = this.inputStatusText.getStatusMessage();
        this.cdr.detectChanges();
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.status) {
      this.actualaizeStatus();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onClearClick(event: MouseEvent): void {
    this.clear.next(event);
    this.control.clear();
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

  get showStatusButton(): boolean {
    return (
      !this.control.disabled && (this.status !== 'default' || (this.control.invalid && this.control.touched))
    );
  }
}
