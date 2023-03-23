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

import { fromEvent, merge, of, Subject } from 'rxjs';
import { debounceTime, map, shareReplay, startWith, switchMap, take, takeUntil, tap } from 'rxjs/operators';

import { PrizmDestroyService } from '@prizm-ui/helpers';

import { ResizeObserverService, RESIZE_OPTION_BOX } from '@ng-web-apis/resize-observer';

import { PrizmSplitterGutterComponent } from './gutter/gutter.component';
import { PrizmSplitterAreaComponent } from './area/area.component';
import { PrizmSplitterElement } from './splitter-element.class';

type areaWithInitialSize = { area: PrizmSplitterAreaComponent; initialSize: number | null };

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
  ],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class]': "'prizm-spliiter ' + orientation",
  },
})
export class PrizmSplitterComponent implements AfterViewInit, AfterContentInit, OnInit {
  @Input() orientation: PrizmSplitterOrientation = 'horizontal';

  @Output() areasSizeChange = new EventEmitter<Array<number>>();
  @Output() areasSplitStart = new EventEmitter<Array<number>>();
  @Output() areasSplitEnd = new EventEmitter<Array<number>>();

  private containerBoxSize: { width: number; height: number } | null = null;

  @ViewChild('container', { static: true }) private containerElement!: ElementRef<HTMLElement>;

  @ContentChildren(PrizmSplitterElement) splitterElementsQueryList: QueryList<
    PrizmSplitterGutterComponent | PrizmSplitterAreaComponent
  >;

  constructor(
    private cdr: ChangeDetectorRef,
    private destroy$: PrizmDestroyService,
    @Inject(ResizeObserverService) private resizeObserverService$: ResizeObserverService
  ) {}

  public ngOnInit(): void {
    // размер контейнера
    this.resizeObserverService$
      .pipe(
        map(([value]) => value.contentBoxSize[0]),
        takeUntil(this.destroy$)
      )
      .subscribe(size => {
        this.containerBoxSize = { width: size.inlineSize, height: size.blockSize };
        console.log('resize', 'CBS', this.containerBoxSize);
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

    gutters$
      .pipe(
        switchMap(gutters =>
          merge(
            ...gutters.map(gutter => {
              const elem = gutter.elementRef.nativeElement;
              return fromEvent<PointerEvent>(elem, 'pointerdown').pipe(
                switchMap(event => {
                  const elementsArray = this.splitterElementsQueryList.toArray();

                  const areasBefore: Array<PrizmSplitterAreaComponent> = [];
                  const areasAfter: Array<PrizmSplitterAreaComponent> = [];
                  gutter.position = event.clientX;

                  let gutterFind = false;

                  for (const splitterElement of elementsArray) {
                    if (splitterElement === gutter) {
                      gutterFind = true;
                      continue;
                    }

                    if (splitterElement instanceof PrizmSplitterGutterComponent) {
                      continue;
                    }

                    if (!gutterFind) {
                      areasBefore.push(splitterElement);
                    } else {
                      areasAfter.push(splitterElement);
                    }
                  }

                  elem.setPointerCapture(event.pointerId);

                  return fromEvent<PointerEvent>(elem, 'pointermove').pipe(
                    map(event => ({ gutter, event, areasBefore, areasAfter })),
                    takeUntil(fromEvent(elem, 'pointerup').pipe(tap(() => console.log('end'))))
                  );
                })
              );
            })
          )
        )
      )
      .subscribe(({ gutter, event, areasBefore, areasAfter }) => {
        const diff = gutter.position - event.clientX;

        const offsetInPercent = Math.abs(diff / this.containerSize) * 100;

        if (diff < 0) {
          const shrinked = this.shrinkAreas(areasAfter, offsetInPercent);
          areasBefore[areasBefore.length - 1].size += shrinked;
        } else if (diff > 0) {
          //left
          const shrinked = this.shrinkAreas([...areasBefore].reverse(), offsetInPercent);
          areasAfter[0].size += shrinked;
        }

        gutter.position = event.clientX;
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

  public ngAfterViewInit(): void {
    // начальная установка размера контейнера
    const containerBCR = this.containerElement.nativeElement.getBoundingClientRect();
    this.containerBoxSize = { width: containerBCR.width, height: containerBCR.height };
  }

  public get isHorizontal(): boolean {
    return this.orientation === 'horizontal';
  }

  private get containerSize(): number {
    return this.isHorizontal ? this.containerBoxSize.width : this.containerBoxSize.height;
  }

  private get areas(): Array<PrizmSplitterAreaComponent> {
    return this.splitterElementsQueryList.toArray().filter(splitterElement => {
      return splitterElement instanceof PrizmSplitterAreaComponent;
    }) as Array<PrizmSplitterAreaComponent>;
  }

  private runAreasCD(): void {
    //this.areas.forEach(area => area.detectChanges());
    this.cdr.markForCheck();
  }
}
