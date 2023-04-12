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
} from '@angular/core';
import { PrizmSplitterOrientation } from './types';

import { combineLatest, fromEvent, merge } from 'rxjs';
import { map, shareReplay, startWith, switchMap, takeUntil } from 'rxjs/operators';

import { PrizmDestroyService } from '@prizm-ui/helpers';

import { ResizeObserverService, RESIZE_OPTION_BOX } from '@ng-web-apis/resize-observer';

import { PrizmSplitterGutterComponent } from './gutter/gutter.component';
import { PrizmSplitterAreaComponent } from './area/area.component';
import { PrizmSplitterElement } from './splitter-element.class';
import { PrizmSplitterService } from './splitter.service';

@Component({
  selector: 'prizm-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService,
    ResizeObserverService,
    {
      provide: RESIZE_OPTION_BOX,
      useValue: 'border-box',
    },
    PrizmSplitterService,
  ],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class]': "'prizm-spliiter ' + orientation",
  },
})
export class PrizmSplitterComponent implements AfterContentInit, OnInit {
  @Input() orientation: PrizmSplitterOrientation = 'horizontal';

  @Output() areasSizeChange = new EventEmitter<Array<number>>();
  @Output() areasSplitStart = new EventEmitter<Array<number>>();
  @Output() areasSplitEnd = new EventEmitter<Array<number>>();

  private containerSizes: {
    width: number;
    height: number;
    left: number;
    top: number;
    right: number;
    bottom: number;
  } | null = null;

  @ViewChild('container', { static: true }) private containerElement!: ElementRef<HTMLElement>;

  @ViewChild(PrizmSplitterAreaComponent, { static: true }) private areasa!: PrizmSplitterAreaComponent;

  @ContentChildren(PrizmSplitterElement) splitterElementsQueryList: QueryList<
    PrizmSplitterGutterComponent | PrizmSplitterAreaComponent
  >;

  guttersSize: number = 100;

  constructor(
    private cdr: ChangeDetectorRef,
    private destroy$: PrizmDestroyService,
    @Inject(ResizeObserverService) private resizeObserverService$: ResizeObserverService,
    private splitterService: PrizmSplitterService
  ) {}

  public ngOnInit(): void {
    // размер контейнера
    this.resizeObserverService$
      .pipe(
        map(([value]) => value.contentBoxSize[0]),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        const bcr = this.containerElement.nativeElement.getBoundingClientRect();
        this.containerSizes = {
          left: bcr.left,
          top: bcr.top,
          bottom: bcr.bottom,
          right: bcr.right,
          width: bcr.width,
          height: bcr.height,
        };
        console.log(this.containerSizes);
      });
  }

  public ngAfterContentInit(): void {
    const gutters$ = this.splitterElementsQueryList.changes.pipe(
      startWith<QueryList<PrizmSplitterGutterComponent | PrizmSplitterAreaComponent>>(
        this.splitterElementsQueryList
      ),
      map(ql => {
        return ql.toArray().filter(splitterElement => {
          return splitterElement instanceof PrizmSplitterGutterComponent;
        }) as Array<PrizmSplitterGutterComponent>;
      }),
      shareReplay(1)
    );

    const areas$ = this.splitterElementsQueryList.changes.pipe(
      startWith<QueryList<PrizmSplitterGutterComponent | PrizmSplitterAreaComponent>>(
        this.splitterElementsQueryList
      ),
      map(ql => {
        return ql.toArray().filter(splitterElement => {
          return splitterElement instanceof PrizmSplitterAreaComponent;
        }) as Array<PrizmSplitterAreaComponent>;
      }),
      shareReplay(1)
    );

    combineLatest([
      areas$.pipe(map(areas => areas.length)),
      gutters$.pipe(map(gutters => gutters.length * this.guttersSize)),
      this.splitterService.areaChange$$,
    ]).subscribe(([areasCount, guttersSize, area]) => {
      area.setCurrentSize(guttersSize / areasCount);
      //this.cdr.markForCheck();
    });

    gutters$
      .pipe(
        switchMap(gutters =>
          merge(
            ...gutters.map(gutter => {
              const elem = gutter.elementRef.nativeElement;

              return fromEvent<PointerEvent>(elem, 'pointerdown').pipe(
                switchMap(event => {
                  event.preventDefault();

                  const splitterBCR = elem.getBoundingClientRect();
                  const offset = {
                    left: event.clientX - splitterBCR.left,
                    top: event.clientY - splitterBCR.top,
                  };

                  elem.setPointerCapture(event.pointerId);

                  const elementsArray = this.splitterElementsQueryList.toArray();

                  const areasBefore: Array<PrizmSplitterAreaComponent> = [];
                  const areasAfter: Array<PrizmSplitterAreaComponent> = [];

                  const guttersBefore: Array<PrizmSplitterGutterComponent> = [];
                  const guttersAfter: Array<PrizmSplitterGutterComponent> = [];

                  gutter.position = event.clientX - offset.left;

                  let gutterFind = false;

                  for (const splitterElement of elementsArray) {
                    if (splitterElement === gutter) {
                      gutterFind = true;
                      continue;
                    }

                    if (!gutterFind) {
                      if (splitterElement instanceof PrizmSplitterAreaComponent) {
                        areasBefore.unshift(splitterElement);
                      } else {
                        guttersBefore.unshift(splitterElement);
                      }
                    } else {
                      if (splitterElement instanceof PrizmSplitterAreaComponent) {
                        areasAfter.push(splitterElement);
                      } else {
                        guttersAfter.push(splitterElement);
                      }
                    }
                  }

                  const min = this.isHorizontal
                    ? this.containerSizes.left + this.guttersSize * guttersBefore.length
                    : this.containerSizes.top;

                  const max = this.isHorizontal
                    ? this.containerSizes.right + this.guttersSize * (guttersAfter.length + 1)
                    : this.containerSizes.bottom;

                  console.log(min, max, gutter.position, this.containerSizes);

                  return fromEvent<PointerEvent>(elem, 'pointermove').pipe(
                    map(event => ({ gutter, event, areasBefore, areasAfter, min, max, offset })),
                    takeUntil(fromEvent(elem, 'pointerup'))
                  );
                })
              );
            })
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(({ gutter, event, areasBefore, areasAfter, min, max, offset }) => {
        let newX = event.clientX - offset.left;

        if (newX < min) {
          newX = min;
        }

        if (newX > max) {
          newX = max;
        }

        const diff = gutter.position - newX;

        const offsetInPercent = Math.abs(diff / this.containerSizes.width) * 100;

        if (diff === 0) {
          console.log('diff 0');
          return;
        }

        if (diff < 0) {
          const shrinked = this.shrinkAreas(areasAfter, offsetInPercent);
          areasBefore[0].size += shrinked;
        } else if (diff > 0) {
          const shrinked = this.shrinkAreas(areasBefore, offsetInPercent);
          areasAfter[0].size += shrinked;
        }

        console.log('GP', gutter.position);
        gutter.position = newX;
        this.runAreasCD();
      });
  }

  private shrinkAreas(areas: PrizmSplitterAreaComponent[], offset: number): number {
    let sum = 0;

    for (const area of areas) {
      if (offset === 0) {
        break;
      }

      const avalableSize = area.size - area.minSize;
      if (avalableSize >= offset) {
        area.size -= offset;
        sum += offset;
        offset = 0;
        break;
      } else {
        offset -= avalableSize;
        sum += avalableSize;
        area.size = area.minSize || 0;
      }
    }

    return sum;
  }

  // public ngAfterViewInit(): void {
  //   // начальная установка размера контейнера
  //   const containerBCR = this.containerElement.nativeElement.getBoundingClientRect();
  //   this.containerBoxSize = { width: containerBCR.width, height: containerBCR.height };
  // }

  public get isHorizontal(): boolean {
    return this.orientation === 'horizontal';
  }

  private get containerSize(): number {
    return this.isHorizontal ? this.containerSizes.width : this.containerSizes.height;
  }

  private get areas(): Array<PrizmSplitterAreaComponent> {
    return this.splitterElementsQueryList.toArray().filter(splitterElement => {
      return splitterElement instanceof PrizmSplitterAreaComponent;
    }) as Array<PrizmSplitterAreaComponent>;
  }

  private runAreasCD(): void {
    this.cdr.markForCheck();
  }
}
