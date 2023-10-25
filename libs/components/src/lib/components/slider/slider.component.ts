import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';

import { fromEvent, merge, Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PrizmSliderCnobComponent } from './slider-cnob.component';
import { PrizmSliderCnobValuePosition, PrizmSliderOrientation, PrizmSliderValue } from './types';
import { PrizmAbstractTestId } from '@prizm-ui/core';

@Component({
  selector: 'prizm-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: `prizm-slider`,
    '[class.horizontal]': 'isHorizontal',
    '[class.vertical]': '!isHorizontal',
    '[attr.disabled]': "isDisabled ? '' : null",
  },
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: PrizmSliderComponent, multi: true },
    PrizmDestroyService,
  ],
})
export class PrizmSliderComponent
  extends PrizmAbstractTestId
  implements ControlValueAccessor, AfterViewInit, OnChanges
{
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() orientation: PrizmSliderOrientation = 'horizontal';
  @Input() @HostBinding('class.range') range = false;
  @Input() showMinMax = true;
  @Input() showValue = true;
  @Input() cnobValuePosition: PrizmSliderCnobValuePosition = 'top';

  @ViewChild('track') scrollbar!: ElementRef<HTMLDivElement>;

  @ViewChildren(PrizmSliderCnobComponent) private _cnobs!: QueryList<PrizmSliderCnobComponent>;

  private get cnobs(): Observable<QueryList<PrizmSliderCnobComponent>> {
    return this._cnobs.changes.pipe(startWith(this._cnobs));
  }
  private _value: PrizmSliderValue = null;

  private cnobPositions = [0, 0];

  public isDisabled = false;

  override readonly testId_ = 'ui_slider';
  touchedFn!: () => void;
  changedFn!: (obj: number | [number, number] | null) => void;

  private getSortedValue(): PrizmSliderValue {
    if (Array.isArray(this._value)) {
      return [...this._value].sort((a, b) => a - b).map(item => Math.round(item)) as [number, number];
    } else {
      return Math.round(this._value ?? 0);
    }
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private destroy$: PrizmDestroyService,
    @Inject(DOCUMENT) private document: Document
  ) {
    super();
  }

  public ngAfterViewInit(): void {
    this.initCnobMoveHandler();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const min = changes.min?.currentValue ?? this.min;
    const max = changes.max?.currentValue ?? this.max;
    const step = changes.step?.currentValue ?? this.step;

    if (min >= max) {
      this.defaultErrorHandler();
      throw new Error('min >= max');
    }

    if (step <= 0 || this.valueRange % step) {
      this.defaultErrorHandler();
      throw new Error('invalid step value');
    }

    if (('min' in changes && !changes.min.firstChange) || ('max' in changes && !changes.max.firstChange)) {
      this.setPositionFromValue();
    }

    if ('showMinMax' in changes && !changes.showMinMax.firstChange) {
      this.setPositionFromValue();
    }
  }

  public onCnobKeydown(cnobIndex: number, event: KeyboardEvent): void {
    if (['ArrowLeft', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      if (this.cnobPositions[cnobIndex] === 0) {
        return;
      }
      this.moveCnobOneStep(cnobIndex, 'back');
      return;
    }

    if (['ArrowUp', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
      if (this.cnobPositions[cnobIndex] === 100) {
        return;
      }
      this.moveCnobOneStep(cnobIndex, 'forward');
      return;
    }
  }

  public getPosition(cnobIndex: number): number {
    return this.cnobPositions[cnobIndex];
  }

  public getCnobValue(cnobIndex: number): number {
    if (this._value === null) {
      return 0;
    }

    if (this.range === false) {
      return this._value as number;
    }

    const cnobPosition = this.cnobPositions[cnobIndex];
    const anotherCnobPosition = this.cnobPositions[this.getAnotherCnobIndex(cnobIndex)];

    const value = this.getSortedValue() as [number, number];

    if (cnobPosition < anotherCnobPosition) {
      return value[0];
    } else {
      return value[1];
    }
  }

  public get scrollbarLinearGradient(): string {
    let [cnob1, cnob2] = this.cnobPositions;

    if (cnob1 > cnob2) {
      [cnob1, cnob2] = [cnob2, cnob1];
    }

    const color = this.isDisabled ? 'var(--disabled)' : 'var(--progress)';

    return `
    ${this.isHorizontal ? 'to right' : 'to top'},
    transparent 0,
    transparent ${cnob1}%,
    ${color} ${cnob1}%,
    ${color} ${cnob2}%,
    transparent ${cnob2}%,
    transparent 100%`;
  }

  public get isHorizontal(): boolean {
    return this.orientation === 'horizontal';
  }

  public writeValue(value: PrizmSliderValue): void {
    this._value = value;
    this.setPositionFromValue();
  }

  public registerOnChange(fn: unknown): void {
    this.changedFn = fn;
  }

  public registerOnTouched(fn: unknown): void {
    this.touchedFn = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.cdr.markForCheck();
  }

  private moveCnobOneStep(cnobIndex: number, direction: 'forward' | 'back'): void {
    const currentPosition = this.cnobPositions[cnobIndex];

    if (direction === 'forward') {
      this.updatePositionsAndValue(cnobIndex, currentPosition + this.positionStepSize);
    } else {
      this.updatePositionsAndValue(cnobIndex, currentPosition - this.positionStepSize);
    }
  }

  private get valueRange(): number {
    return Math.abs(this.max - this.min);
  }

  private get stepsCount(): number {
    return this.valueRange / this.step;
  }

  private get positionStepSize(): number {
    return 100 / this.stepsCount;
  }

  private setPositionFromValue(): void {
    if (Array.isArray(this._value)) {
      for (let i = 0; i < this._value.length; i++) {
        const currentStep = Math.abs(this._value[i] - this.min) / this.step;
        this.cnobPositions[i] = (currentStep / this.stepsCount) * 100;
      }
    } else {
      const currentStep = Math.abs((this._value ?? 0) - this.min) / this.step;
      this.cnobPositions[1] = (currentStep / this.stepsCount) * 100;
    }
  }

  private initCnobMoveHandler(): void {
    const pointerMove$ = fromEvent<PointerEvent>(this.document, 'pointermove');
    const pointerUp$ = fromEvent<PointerEvent>(this.document, 'pointerup');

    const scrollbarEl = this.scrollbar.nativeElement;

    this.cnobs
      .pipe(
        switchMap(cnobs =>
          merge(...cnobs.map(cnob => cnob.dragStart)).pipe(
            switchMap(({ index, shiftX, shiftY }) => {
              this.touchedFn();

              const scrollBarRect = scrollbarEl.getBoundingClientRect();
              const scrollBarSize = this.isHorizontal ? scrollBarRect.width : scrollBarRect.height;

              return pointerMove$.pipe(
                map(event => {
                  const newPositionPx = this.isHorizontal
                    ? event.clientX - scrollBarRect.left - shiftX
                    : scrollBarSize - (event.clientY - scrollBarRect.top - shiftY);

                  const newPosition = (newPositionPx / scrollBarSize) * 100;

                  // курсор вышел из слайдера => оставить бегунок в его границах.
                  if (newPositionPx < 0) {
                    return 0;
                  }

                  if (newPositionPx > scrollBarSize) {
                    return 100;
                  }

                  const currentPosition: number = this.cnobPositions[index];

                  if (Math.abs(currentPosition - newPosition) < this.positionStepSize) {
                    return currentPosition;
                  }

                  const diff = currentPosition - newPosition;

                  if (diff < 0) {
                    return (
                      currentPosition +
                      Math.floor(Math.abs(diff) / this.positionStepSize) * this.positionStepSize
                    );
                  } else {
                    return (
                      currentPosition -
                      Math.floor(Math.abs(diff) / this.positionStepSize) * this.positionStepSize
                    );
                  }
                }),
                distinctUntilChanged(),
                tap(value => {
                  this.updatePositionsAndValue(index, value);
                }),
                takeUntil(pointerUp$)
              );
            }),
            takeUntil(this.destroy$)
          )
        )
      )
      .subscribe();
  }
  private getAnotherCnobIndex(currentCnobIndex: number): number {
    if (currentCnobIndex === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  private updatePositionsAndValue(cnobIndex: number, position: number): void {
    this.cnobPositions[cnobIndex] = position;

    const newValue = this.min + (this.valueRange * position) / 100;

    if (Array.isArray(this._value)) {
      this._value[cnobIndex] = Math.round(newValue);
    } else {
      this._value = Math.round(newValue);
    }

    this.changedFn(this.getSortedValue());
    this.cdr.markForCheck();
  }

  private defaultErrorHandler(): void {
    if (this.range) {
      this._value = [0, 0];
    } else {
      this._value = 0;
    }

    this.setPositionFromValue();
  }
}
