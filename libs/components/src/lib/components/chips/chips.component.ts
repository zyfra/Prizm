import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmOverlayOutsidePlacement } from '../../modules';
import { BehaviorSubject, Subscription, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  PrizmCallFuncPipe,
  PrizmContextDirective,
  PrizmContextGetByKysPipe,
  PrizmDestroyService,
  PrizmIdentityMatcherDirective,
  PrizmLetDirective,
  PrizmOverflowHostDirective,
  PrizmOverflowItemDirective,
  PrizmStringifyDirective,
} from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { PrizmElementReadyDirective, PrizmHintDirective, PrizmLifecycleDirective } from '../../directives';
import { PrizmChipsItemComponent } from './chips-item';
import { PrizmInputLayoutComponent } from '../input';

@Component({
  selector: 'prizm-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmChipsComponent),
      multi: true,
    },
    PrizmDestroyService,
  ],
  hostDirectives: [],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgTemplateOutlet,
    AsyncPipe,
    PrizmChipsItemComponent,
    PrizmCallFuncPipe,
    PrizmLifecycleDirective,
    PrizmElementReadyDirective,
    PrizmLetDirective,
    PrizmHintDirective,
    PrizmOverflowItemDirective,
    PrizmOverflowHostDirective,
    PrizmContextDirective,
    PrizmContextGetByKysPipe,
  ],
})
export class PrizmChipsComponent<T = any>
  extends PrizmAbstractTestId
  implements ControlValueAccessor, OnInit, OnDestroy, AfterViewInit
{
  @Input() @HostBinding('attr.data-size') public size: 's' | 'l' = 'l';
  @Input() set chips(data: T[]) {
    this.chipsList = data;
  }
  @Input() public deletable = true;
  @Input() @HostBinding('class.single-line') public singleLine = true;
  @Input() public hintCanShow = true;
  @Input() public hintDirection: PrizmOverlayOutsidePlacement = PrizmOverlayOutsidePlacement.RIGHT;

  @Output() public addChipEvent: EventEmitter<T> = new EventEmitter();
  @Output() public removeChipEvent: EventEmitter<T> = new EventEmitter();
  @Output() public clickChipEvent: EventEmitter<T> = new EventEmitter();

  override readonly testId_ = 'ui_chips';

  public readonly layoutComponent = inject(PrizmInputLayoutComponent, {
    optional: true,
  });
  public accessorIsDisabled = false;
  public readonly stringifyDirective = inject(PrizmStringifyDirective, {
    host: true,
    optional: true,
  });
  public readonly identityMatcherDirective = inject(PrizmIdentityMatcherDirective, {
    optional: true,
    host: true,
  });

  public chipsList$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  private subscription: Subscription = new Subscription();

  constructor(private readonly cdRef: ChangeDetectorRef, private readonly destroy$: PrizmDestroyService) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onChange: (value: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onTouched: (value: unknown) => void = () => {};

  get chipsList(): T[] {
    return this.chipsList$.getValue() ?? ([] as T[]);
  }

  set chipsList(data: T[]) {
    this.chipsList$.next(data);
  }

  public addChips(chipName: T): void {
    if (this.accessorIsDisabled) return;
    this.chipsList = [...this.chipsList, chipName];
    this.addChipEvent.emit(chipName);
    this.cdRef.markForCheck();
  }

  public removeChips(event: MouseEvent, idx: number, item: T): void {
    if (this.accessorIsDisabled) return;
    event.stopPropagation();
    this.removeChipEvent.emit(this.chipsList[idx]);
    this.chipsList = this.chipsList.filter(currentItem => !this.identityMatcher(currentItem, item));
    this.cdRef.markForCheck();
  }

  public identityMatcher(a: T, b: T) {
    return this.identityMatcherDirective ? this.identityMatcherDirective.identityMatcher(a, b) : a === b;
  }

  public stringify(a: T) {
    return this.stringifyDirective ? this.stringifyDirective.stringify(a) : a?.toString();
  }

  public chipClick(chipName: T): void {
    this.clickChipEvent.emit(chipName);
  }

  public ngOnInit(): void {
    this.subscription = this.chipsList$.pipe(takeUntil(this.destroy$)).subscribe(chips => {
      this.onChange(chips);
    });
  }

  public ngOnDestroy(): void {
    this.chipsList$.complete();
    this.subscription.unsubscribe();
  }

  public writeValue(data: T[]): void {
    this.chipsList = data;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.accessorIsDisabled = isDisabled;
    this.cdRef.markForCheck();
  }

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public joinHints(hints: null | T[]) {
    return hints?.map(i => this.stringify(i)).join(', ') ?? '';
  }

  ngAfterViewInit(): void {
    timer(0).subscribe(() => {
      this.chipsList = [...this.chipsList];
    });
  }

  public trackByIdx(idx: number): number {
    return idx;
  }
}
