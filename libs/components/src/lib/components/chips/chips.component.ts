import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmOverlayOutsidePlacement } from '../../modules';
import { BehaviorSubject, Observable, Subscription, timer } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { PrizmCallFuncPipe, PrizmDestroyService, PrizmLetDirective } from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { PrizmElementReadyDirective, PrizmHintDirective, PrizmLifecycleDirective } from '../../directives';
import { PrizmChipsItemComponent } from './chips-item';

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
  ],
})
export class PrizmChipsComponent
  extends PrizmAbstractTestId
  implements ControlValueAccessor, OnInit, OnDestroy, AfterViewInit
{
  @Input() @HostBinding('attr.data-size') public size: 's' | 'l' = 'l';
  @Input() set chips(data: string[]) {
    this.chipsList = data;
  }
  @Input() public deletable = true;
  @Input() @HostBinding('class.single-line') public singleLine = true;
  @Input() public hintCanShow = true;
  @Input() public hintDirection: PrizmOverlayOutsidePlacement = PrizmOverlayOutsidePlacement.RIGHT;

  @Output() public addChipEvent: EventEmitter<string> = new EventEmitter();
  @Output() public removeChipEvent: EventEmitter<string> = new EventEmitter();
  @Output() public clickChipEvent: EventEmitter<string> = new EventEmitter();

  override readonly testId_ = 'ui_chips';

  public accessorIsDisabled = false;
  public readonly overflowedChipsList$ = new BehaviorSubject<Set<number>>(new Set());

  public chipsList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private subscription: Subscription = new Subscription();
  readonly ready: (el: ElementRef) => boolean = (el: ElementRef) => {
    const { x, y } = el.nativeElement.getBoundingClientRect();
    return Math.max(x, y) > 0;
  };

  constructor(private readonly cdRef: ChangeDetectorRef, private readonly destroy$: PrizmDestroyService) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onChange: (value: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onTouched: (value: unknown) => void = () => {};

  get chipsList(): string[] {
    return this.chipsList$.getValue() ?? ([] as string[]);
  }

  set chipsList(data: string[]) {
    this.chipsList$.next(data);
  }

  public addChips(chipName: string): void {
    if (this.accessorIsDisabled) return;
    this.chipsList = [...this.chipsList, chipName];
    this.addChipEvent.emit(chipName);
    this.cdRef.markForCheck();
  }

  public removeChips(event: MouseEvent, idx: number): void {
    if (this.accessorIsDisabled) return;
    this.overflowedChipsList$.value.delete(idx);
    this.overflowedChipsList$.next(this.overflowedChipsList$.value);

    event.stopPropagation();
    this.removeChipEvent.emit(this.chipsList[idx]);
    this.chipsList = this.chipsList.filter((item, i) => i !== idx);
    this.cdRef.markForCheck();
  }

  public chipClick(chipName: string): void {
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

  public writeValue(data: string[]): void {
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

  public isChipsContent$(
    observable: Observable<ElementRef>,
    parent: HTMLElement,
    singleLine: boolean,
    chips: string,
    idx: number,
    allChipsCount: number
  ): Observable<string> {
    return this.chipsList$.pipe(
      switchMap(() => observable),
      map((current: ElementRef) => {
        if (idx === 0) this.overflowedChipsList$.value.clear();
        if (!singleLine || this.chipsList.length === 1) return false;
        if (idx === 0) return 0;
        const maxPadding = 2;
        const needWidthPlaceForShowDots = 35;

        let elementDisplayIsModified = false;

        if (window.getComputedStyle(current.nativeElement).display === 'none') {
          current.nativeElement.style.display = 'block';
          elementDisplayIsModified = true;
        }
        const offsetY = Math.abs(parent.offsetTop - current.nativeElement.offsetTop) > maxPadding;

        const parentX = parent.offsetLeft + parent.offsetWidth;
        const currentX = current.nativeElement.offsetLeft + current.nativeElement.offsetWidth;
        const result = offsetY || parentX - currentX < needWidthPlaceForShowDots;

        if (result) this.overflowedChipsList$.value.add(idx);
        else this.overflowedChipsList$.value.delete(idx);

        this.overflowedChipsList$.next(new Set([...this.overflowedChipsList$.value]));

        if (elementDisplayIsModified) current.nativeElement.style.display = 'none';
        return result;
      }),
      map(i => (i ? 'hidden' : 'visible'))
    );
  }

  public getOverflowedChipsListHint(): string {
    const list = [...this.overflowedChipsList$.value.values()];
    return [...list]
      .map(i => {
        return this.chipsList[i];
      })
      .join(', ');
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
