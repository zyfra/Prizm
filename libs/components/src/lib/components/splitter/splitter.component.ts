import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PrizmSplitterOrientation } from './types';

import { asyncScheduler, combineLatest, fromEvent, merge, Observable } from 'rxjs';
import { map, observeOn, shareReplay, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';

import { PrizmDestroyService } from '@prizm-ui/helpers';

import { PrizmSplitterGutterComponent } from './gutter/gutter.component';
import { PrizmSplitterAreaComponent } from './area/area.component';

import { PrizmSplitterService } from './splitter.service';

type AreaRealSizes = { area: PrizmSplitterAreaComponent; realSize: number; realMinSize: number };

@Component({
  selector: 'prizm-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService, PrizmSplitterService],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class]': "'prizm-spliiter ' + orientation",
  },
})
export class PrizmSplitterComponent implements AfterViewInit, AfterContentInit {
  @Input() orientation: PrizmSplitterOrientation = 'horizontal';

  @Output() areasSizeChange = new EventEmitter<Array<number>>();
  @Output() areasSplitStart = new EventEmitter<Array<number>>();
  @Output() areasSplitEnd = new EventEmitter<Array<number>>();

  guttersData: Array<{ areaBefore: number; areaAfter: number; order: number }> = [];

  @ViewChild('container', { static: true }) private containerElement!: ElementRef<HTMLElement>;

  @ContentChildren(PrizmSplitterAreaComponent) splitterAreaQueryList: QueryList<PrizmSplitterAreaComponent>;

  @ViewChildren(PrizmSplitterGutterComponent)
  splitterGutterQueryList: QueryList<PrizmSplitterGutterComponent>;

  gutterElementSize = 8;

  areas$: Observable<PrizmSplitterAreaComponent[]>;
  gutters$: Observable<PrizmSplitterGutterComponent[]>;

  constructor(
    private cdr: ChangeDetectorRef,
    private destroy$: PrizmDestroyService,
    private splitterService: PrizmSplitterService
  ) {}

  public ngAfterViewInit(): void {
    this.gutters$ = this.splitterGutterQueryList.changes.pipe(
      startWith<QueryList<PrizmSplitterGutterComponent>>(this.splitterGutterQueryList),
      map(ql => ql.toArray()),
      shareReplay(1)
    );

    combineLatest([
      this.areas$.pipe(map(areas => areas.length)),
      this.gutters$.pipe(map(gutters => gutters.length * this.gutterElementSize)),
      this.splitterService.areaInputSizeChange$$,
    ])
      .pipe(observeOn(asyncScheduler))
      .subscribe(([areasCount, guttersSize, area]) => {
        const guttersGapInPx = this.splitterService.mathOperation(guttersSize, areasCount, '/');
        area.setCurrentSize(guttersGapInPx);
        this.cdr.markForCheck();
      });

    this.gutters$
      .pipe(
        switchMap(gutters =>
          merge(
            ...gutters.map(gutter => {
              const elem = gutter.elementRef.nativeElement;

              return fromEvent<PointerEvent>(elem, 'pointerdown').pipe(
                switchMap(event => {
                  event.preventDefault();
                  elem.setPointerCapture(event.pointerId);

                  const containerBCR = this.containerElement.nativeElement.getBoundingClientRect();
                  const containerSize = this.isHorizontal ? containerBCR.width : containerBCR.height;

                  const guttersSize = this.splitterGutterQueryList.length * this.gutterElementSize;
                  const guttersGapInPx = this.splitterService.mathOperation(
                    guttersSize,
                    this.splitterAreaQueryList.length,
                    '/'
                  );
                  const guttersGapInPercent =
                    this.splitterService.mathOperation(guttersGapInPx, containerSize, '/') * 100;

                  const guttersBefore = gutter.order - 1;
                  const guttersAfter = this.guttersData.length - gutter.order;

                  const areasBefore = this.splitterAreaQueryList
                    .filter(area => area.order < gutter.order)
                    .map(area => this.getAreaRealSizes(area, containerSize, guttersGapInPercent));

                  console.log(areasBefore[0]);
                  const areasAfter = this.splitterAreaQueryList
                    .filter(area => area.order >= gutter.order)
                    .map(area => this.getAreaRealSizes(area, containerSize, guttersGapInPercent));

                  const min = this.splitterService.mathOperation(
                    this.isHorizontal ? containerBCR.left : containerBCR.top,
                    this.splitterService.mathOperation(this.gutterElementSize, guttersBefore, '*'),
                    '+'
                  );

                  const max = this.splitterService.mathOperation(
                    this.isHorizontal ? containerBCR.right : containerBCR.bottom,
                    this.gutterElementSize * (guttersAfter + 1),
                    '-'
                  );

                  const splitterBCR = elem.getBoundingClientRect();

                  const offset = {
                    left: this.splitterService.mathOperation(event.clientX, splitterBCR.left, '-'),
                    top: this.splitterService.mathOperation(event.clientY, splitterBCR.top, '-'),
                  };

                  gutter.position = this.isHorizontal
                    ? this.splitterService.mathOperation(event.clientX, offset.left, '-')
                    : this.splitterService.mathOperation(event.clientY, offset.top, '-');

                  this.areasSplitStart.emit(
                    this.getAreasSize(
                      [...areasBefore, ...areasAfter],
                      containerSize,
                      containerSize - guttersSize
                    )
                  );

                  return fromEvent<PointerEvent>(elem, 'pointermove').pipe(
                    map(event => {
                      event.preventDefault();
                      return {
                        gutter,
                        event,
                        offset,
                        min,
                        max,
                        areasBefore,
                        areasAfter,
                        containerSize,
                        guttersSize,
                      };
                    }),
                    takeUntil(
                      merge(fromEvent(document, 'pointerup'), fromEvent(elem, 'pointercancel')).pipe(
                        tap(event => {
                          this.areasSplitEnd.emit(
                            this.getAreasSize(
                              [...areasBefore, ...areasAfter],
                              containerSize,
                              containerSize - guttersSize
                            )
                          );
                        })
                      )
                    )
                  );
                })
              );
            })
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(
        ({ gutter, event, offset, min, max, areasBefore, areasAfter, containerSize, guttersSize }) => {
          let newPosition = this.isHorizontal
            ? this.splitterService.mathOperation(event.clientX, offset.left, '-')
            : this.splitterService.mathOperation(event.clientY, offset.top, '-');

          if (newPosition < min) {
            newPosition = min;
          }
          if (newPosition > max) {
            newPosition = max;
          }

          const diff = this.splitterService.mathOperation(gutter.position, newPosition, '-');

          let offsetInPercent;

          if (newPosition === min) {
            offsetInPercent = areasBefore.reduce((prev, curr) => prev + curr.realSize, 0);
          } else if (newPosition === max) {
            offsetInPercent = areasAfter.reduce((prev, curr) => prev + curr.realSize, 0);
          } else {
            offsetInPercent = Math.abs(this.splitterService.mathOperation(diff, containerSize, '/')) * 100;
          }

          const revercedAreasBefore = [...areasBefore].reverse();
          if (diff === 0) {
            return;
          }
          if (diff < 0) {
            const shrinked = this.shrinkAreas(areasAfter, offsetInPercent);

            revercedAreasBefore[0].realSize = this.splitterService.mathOperation(
              revercedAreasBefore[0].realSize,
              shrinked,
              '+'
            );
            revercedAreasBefore[0].area.setCurrentSizeFromReal(revercedAreasBefore[0].realSize);
          } else if (diff > 0) {
            const shrinked = this.shrinkAreas(revercedAreasBefore, offsetInPercent);
            areasAfter[0].realSize = this.splitterService.mathOperation(
              areasAfter[0].realSize,
              shrinked,
              '+'
            );
            areasAfter[0].area.setCurrentSizeFromReal(areasAfter[0].realSize);
          }

          gutter.position = newPosition;

          this.areasSizeChange.emit(
            this.getAreasSize([...areasBefore, ...areasAfter], containerSize, containerSize - guttersSize)
          );

          this.cdr.markForCheck();
        }
      );
  }

  public ngAfterContentInit(): void {
    this.areas$ = this.splitterAreaQueryList.changes.pipe(
      startWith<QueryList<PrizmSplitterAreaComponent>>(this.splitterAreaQueryList),
      map(ql => ql.toArray()),
      shareReplay(1)
    );

    this.areas$.pipe(takeUntil(this.destroy$)).subscribe(areas => {
      this.guttersData = [];
      areas.forEach((area, index) => {
        area.order = index;
        if (index < areas.length - 1) {
          this.guttersData.push({ areaBefore: index, areaAfter: index + 1, order: index + 1 });
        }
      });
    });
  }

  private shrinkAreas(areas: AreaRealSizes[], offsetInPercent: number): number {
    let sum = 0;

    for (const areaRealSizes of areas) {
      if (offsetInPercent === 0) {
        break;
      }

      const avalableSize = this.splitterService.mathOperation(
        areaRealSizes.realSize,
        areaRealSizes.realMinSize,
        '-'
      );
      if (avalableSize >= offsetInPercent) {
        areaRealSizes.realSize = this.splitterService.mathOperation(
          areaRealSizes.realSize,
          offsetInPercent,
          '-'
        );
        areaRealSizes.area.setCurrentSizeFromReal(areaRealSizes.realSize);
        sum = this.splitterService.mathOperation(sum, offsetInPercent, '+');
        offsetInPercent = 0;

        if (areaRealSizes.realSize === areaRealSizes.realMinSize) {
          areaRealSizes.area.areaMinSize.emit();
        }
        break;
      } else {
        offsetInPercent = this.splitterService.mathOperation(offsetInPercent, avalableSize, '-');
        sum = this.splitterService.mathOperation(sum, avalableSize, '+');
        areaRealSizes.realSize = areaRealSizes.realMinSize;
        areaRealSizes.area.setCurrentSizeFromReal(areaRealSizes.realSize);

        areaRealSizes.area.areaMinSize.emit();
      }
    }

    return sum;
  }

  public get isHorizontal(): boolean {
    return this.orientation === 'horizontal';
  }

  private getAreaRealSizes(
    area: PrizmSplitterAreaComponent,
    containerSize: number,
    guttersGapInPercent: number
  ): AreaRealSizes {
    const sizeInPx = area.elementRef.nativeElement[this.isHorizontal ? 'offsetWidth' : 'offsetHeight'];
    const realSize = this.splitterService.mathOperation(sizeInPx, containerSize, '/') * 100;
    const realMinSize = Math.max(
      0,
      this.splitterService.mathOperation(area.minSize, guttersGapInPercent, '-')
    );
    return {
      area,
      realSize,
      realMinSize,
    };
  }

  private getAreasSize(areas: Array<AreaRealSizes>, containerSize: number, areasSize: number): Array<number> {
    const sizes = areas.map(({ area, realSize, realMinSize }) => {
      if (realMinSize === realSize) {
        return area.minSize;
      } else {
        return containerSize * (realSize / areasSize);
      }
    });

    return sizes;
  }
}
