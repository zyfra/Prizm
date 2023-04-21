import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PrizmSplitterOrientation } from './types';

import { combineLatest, fromEvent, merge, Observable, pipe } from 'rxjs';
import { debounceTime, map, shareReplay, startWith, switchMap, takeUntil } from 'rxjs/operators';

import { PrizmDestroyService } from '@prizm-ui/helpers';

import { ResizeObserverService, RESIZE_OPTION_BOX } from '@ng-web-apis/resize-observer';

import { PrizmSplitterGutterComponent } from './gutter/gutter.component';
import { PrizmSplitterAreaComponent } from './area/area.component';

import { PrizmSplitterService } from './splitter.service';

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
export class PrizmSplitterComponent implements OnInit {
  @Input() orientation: PrizmSplitterOrientation = 'horizontal';

  @Output() areasSizeChange = new EventEmitter<Array<number>>();
  @Output() areasSplitStart = new EventEmitter<Array<number>>();
  @Output() areasSplitEnd = new EventEmitter<Array<number>>();
  accuracy = 8;
  guttersData: Array<{ areaBefore: number; areaAfter: number; order: number }> = [];

  @ViewChild('container', { static: true }) private containerElement!: ElementRef<HTMLElement>;

  @ContentChildren(PrizmSplitterAreaComponent) splitterAreaQueryList: QueryList<PrizmSplitterAreaComponent>;

  @ViewChildren(PrizmSplitterGutterComponent)
  splitterGutterQueryList: QueryList<PrizmSplitterGutterComponent>;

  guttersSize = 60;

  areas$: Observable<PrizmSplitterAreaComponent[]>;
  gutters$: Observable<PrizmSplitterGutterComponent[]>;

  containerSize: number;
  constructor(
    private cdr: ChangeDetectorRef,
    private destroy$: PrizmDestroyService,
    private splitterService: PrizmSplitterService
  ) {}

  public ngOnInit(): void {}

  public onResize(event: ResizeObserverEntry[]): void {
    this.containerSize = event[0].contentRect.width;
    this.splitterAreaQueryList.forEach(area => {
      area.realSize =
        this.mathOperation(area.elementRef.nativeElement.offsetWidth, this.containerSize, '/') * 100;
    });
  }

  public ngAfterViewInit(): void {
    this.gutters$ = this.splitterGutterQueryList.changes.pipe(
      startWith<QueryList<PrizmSplitterGutterComponent>>(this.splitterGutterQueryList),
      map(ql => ql.toArray()),
      shareReplay(1)
    );

    combineLatest([
      this.areas$.pipe(map(areas => areas.length)),
      this.gutters$.pipe(map(gutters => gutters.length * this.guttersSize)),
      this.splitterService.areaChange$$,
    ]).subscribe(([areasCount, guttersSize, area]) => {
      area.setCurrentSize(Math.round(guttersSize / areasCount));
      //this.cdr.markForCheck();
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

                  const splitterBCR = elem.getBoundingClientRect();

                  const offset = {
                    left: this.mathOperation(event.clientX, splitterBCR.left, '-'),
                    top: this.mathOperation(event.clientY, splitterBCR.top, '-'),
                  };

                  const guttersBefore = gutter.order - 1;
                  const guttersAfter = this.guttersData.length - gutter.order;

                  gutter.position = this.mathOperation(event.clientX, offset.left, '-');

                  const min = this.isHorizontal
                    ? this.mathOperation(
                        containerBCR.left,
                        this.mathOperation(this.guttersSize, guttersBefore, '*'),
                        '+'
                      )
                    : containerBCR.top + this.guttersSize * guttersBefore;

                  const max = this.isHorizontal
                    ? containerBCR.right - this.guttersSize * (guttersAfter + 1)
                    : containerBCR.bottom - this.guttersSize * (guttersAfter + 1);

                  const areasBefore = this.splitterAreaQueryList
                    .filter(area => area.order < gutter.order)
                    .reverse();
                  const areasAfter = this.splitterAreaQueryList.filter(area => area.order >= gutter.order);

                  console.log(areasBefore);

                  return fromEvent<PointerEvent>(elem, 'pointermove').pipe(
                    map(event => ({
                      gutter,
                      event,
                      offset,
                      min,
                      max,
                      areasBefore,
                      areasAfter,
                    })),
                    takeUntil(fromEvent(elem, 'pointerup'))
                  );
                })
              );
            })
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(({ gutter, event, offset, min, max, areasBefore, areasAfter }) => {
        let newX = this.mathOperation(event.clientX, offset.left, '-');
        if (newX < min) {
          newX = min;
        }
        if (newX > max) {
          newX = max;
        }

        const diff = this.mathOperation(gutter.position, newX, '-');

        console.log(diff);
        let offsetInPercent;

        if (newX === min) {
          offsetInPercent = areasBefore.reduce((prev, curr) => prev + curr.realSize, 0);
        } else if (newX === max) {
          offsetInPercent = areasAfter.reduce((prev, curr) => prev + curr.realSize, 0);
        } else {
          offsetInPercent = Math.abs(this.mathOperation(diff, this.containerSize, '/')) * 100;
        }

        if (diff === 0) {
          console.log('diff 0');
          return;
        }
        if (diff < 0) {
          const shrinked = this.shrinkAreas(areasAfter, offsetInPercent);

          areasBefore[0].realSize = this.mathOperation(areasBefore[0].realSize, shrinked, '+');
          areasBefore[0].setCurrentSizeFromReal();
        } else if (diff > 0) {
          const shrinked = this.shrinkAreas(areasBefore, offsetInPercent);
          areasAfter[0].realSize = this.mathOperation(areasAfter[0].realSize, shrinked, '+');
          areasAfter[0].setCurrentSizeFromReal();
        }

        gutter.position = newX;
        this.runAreasCD();
      });
  }

  public ngAfterContentInit(): void {
    this.areas$ = this.splitterAreaQueryList.changes.pipe(
      startWith<QueryList<PrizmSplitterAreaComponent>>(this.splitterAreaQueryList),
      map(ql => ql.toArray()),
      shareReplay(1)
    );

    this.areas$.subscribe(areas => {
      this.guttersData = [];
      areas.forEach((area, index) => {
        area.order = index;
        if (index < areas.length - 1) {
          this.guttersData.push({ areaBefore: index, areaAfter: index + 1, order: index + 1 });
        }
      });
    });
  }

  private shrinkAreas(areas: PrizmSplitterAreaComponent[], offset: number): number {
    let sum = 0;

    for (const area of areas) {
      if (offset === 0) {
        break;
      }

      const avalableSize = this.mathOperation(area.realSize, area.minSize, '-');
      if (avalableSize >= offset) {
        area.realSize = this.mathOperation(area.realSize, offset, '-');
        area.setCurrentSizeFromReal();
        sum = this.mathOperation(sum, offset, '+');
        offset = 0;
        break;
      } else {
        offset = this.mathOperation(offset, avalableSize, '-');
        sum = this.mathOperation(sum, avalableSize, '+');
        area.realSize = area.minSize || 0;
        area.setCurrentSizeFromReal();
      }
    }

    return sum;
  }

  public get isHorizontal(): boolean {
    return this.orientation === 'horizontal';
  }

  private runAreasCD(): void {
    this.cdr.markForCheck();
  }

  private toFixed(num: number): number {
    return +num.toFixed(this.accuracy);
  }

  private mathOperation(a: number, b: number, operation: string): number {
    const accuracyNumber = 10 ** this.accuracy;
    const newA = this.toFixed(a) * accuracyNumber;
    const newB = this.toFixed(b) * accuracyNumber;

    switch (operation) {
      case '-': {
        return Math.round(newA - newB) / accuracyNumber;
      }

      case '+': {
        return Math.round(newA + newB) / accuracyNumber;
      }

      case '*': {
        return (newA * newB) / accuracyNumber ** 2;
      }

      case '/': {
        return newA / newB;
      }
    }
  }
}
