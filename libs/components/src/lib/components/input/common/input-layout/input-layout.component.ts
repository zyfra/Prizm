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
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, EMPTY, merge, Subject, timer } from 'rxjs';
import { PrizmInputControl } from '../base/input-control.class';
import { PrizmInputStatusTextDirective } from '../input-status-text/input-status-text.directive';
import { PrizmInputPosition, PrizmInputSize, PrizmInputStatus } from '../models/prizm-input.models';
import { debounceTime, map, startWith, takeUntil, tap } from 'rxjs/operators';
import { isPolymorphPrimitive, PolymorphComponent, PolymorphContent } from '../../../../directives/polymorph';
import { Compare, filterTruthy, PrizmDestroyService, PrizmLetDirective } from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';

export type PrizmInputLayoutClearButtonContext = {
  clear: (event: MouseEvent) => void;
  disabled: boolean;
  showStatusButton: boolean;
};

@Component({
  selector: 'prizm-input-layout',
  templateUrl: './input-layout.component.html',
  styleUrls: [
    './input-layout.component.less',
    './input-layout-hidden-control.component.less',
    './input-layout-textarea.component.less',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'prizm-input-layout',
  },
  providers: [PrizmDestroyService],
})
export class PrizmInputLayoutComponent
  extends PrizmAbstractTestId
  implements OnInit, OnChanges, AfterViewInit
{
  @Input() set label(val: string | null) {
    this.label$.next(val);
  }
  get label(): string {
    return this.label$.value as string;
  }

  @Input() size: PrizmInputSize = 'l';

  @Input() status: PrizmInputStatus = 'default';

  @Input() outer = false;

  @Input() clearButton: PolymorphContent<PrizmInputLayoutClearButtonContext> = 'cancel-delete-content';

  @Input() border = true;
  @Input() position: PrizmInputPosition = 'left';
  @Input() forceClear: boolean | null = null;
  @Output() clear = new EventEmitter<MouseEvent>();

  @ViewChild(PrizmLetDirective) letDirective!: PrizmLetDirective<{
    focused: boolean;
    disabled: boolean;
    empty: boolean;
    touched: boolean;
    invalid: boolean;
    required: boolean;
  }>;

  @HostBinding('class.has-hidden-control') get hasHiddenControl() {
    return this.control.hidden;
  }

  @HostBinding('class.has-textarea') get hasTextarea() {
    return this.control.nativeElementType === 'textarea';
  }

  override testId_ = 'ui_input_layout';
  protected readonly isPolymorphPrimitive = isPolymorphPrimitive;

  public readonly label$ = new BehaviorSubject<string | null>(null);
  get showClearButton(): boolean {
    if (this.disabled) return false;
    return typeof this.forceClear === 'boolean'
      ? this.forceClear
      : this.control.hasClearButton &&
          !this.letDirective?.context?.disabled &&
          !this.letDirective?.context?.empty;
  }

  @ContentChild(PrizmInputControl, { static: true }) control!: PrizmInputControl<any>;
  @ContentChild(PrizmInputStatusTextDirective, { static: false })
  inputStatusText!: PrizmInputStatusTextDirective;

  public statusIcon!: string;
  public statusMessage!: PolymorphContent | null;

  @HostBinding('class.disabled') get disabled() {
    return this.letDirective?.context?.disabled;
  }
  @HostBinding('class.enabled') get enabled() {
    return !this.letDirective?.context?.disabled;
  }
  private readonly innerClick$$ = new Subject<MouseEvent>();
  public readonly innerClick$ = this.innerClick$$.asObservable();

  public readonly cdr: ChangeDetectorRef = this.injector.get(ChangeDetectorRef);
  private readonly destroy$: PrizmDestroyService = this.injector.get(PrizmDestroyService);

  private foundStatusDirective!: PrizmInputStatusTextDirective;

  get correctedStatus() {
    return this.foundStatusDirective?.status && this.foundStatusDirective.enable
      ? this.foundStatusDirective.status
      : this.status;
  }

  get emptyLabel() {
    return !this.label?.replace(/[ ]+/, '');
  }

  get showStatusButton(): boolean {
    return Boolean(
      this.status !== 'default' ||
        (this.letDirective?.context?.invalid && this.letDirective?.context?.touched)
    );
  }

  readonly onClearClick = (event: MouseEvent) => {
    this.clear.next(event);
    this.control.clear(event);
    this.actualizeStatusIcon();
  };

  constructor(private readonly injector: Injector, public readonly el: ElementRef<HTMLElement>) {
    super();
  }

  ngOnInit(): void {
    this.control.stateChanges
      .pipe(
        debounceTime(10),
        tap(() => {
          this.actualizeStatusIcon();
          this.cdr.detectChanges();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.actualizeStatusIcon();

    if (this.control.defaultLabel && Compare.isNullish(this.label)) {
      this.label$.next(this.control.defaultLabel);
    }

    merge(this.inputStatusText ? this.inputStatusText.changed.pipe(map(() => this.inputStatusText)) : EMPTY)
      .pipe(
        startWith(this.inputStatusText),
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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.statusIcon = statusIcon;
  }

  protected innerClick(event: MouseEvent) {
    this.innerClick$$.next(event);
  }
}
