import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PrizmSplitterOrientation } from './types';

import { merge, Observable } from 'rxjs';
import { debounceTime, map, skip, startWith, switchMap, take, takeUntil } from 'rxjs/operators';

import { PrizmSplitterAreaComponent } from './splitter-area.component';
import { PrizmSplitterGutterComponent } from './splitter-gutter.component';
import { PrizmDestroyService } from '@prizm-ui/helpers';

import { ResizeObserverService, RESIZE_OPTION_BOX } from '@ng-web-apis/resize-observer';

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
export class PrizmSplitterComponent implements AfterViewInit, AfterContentInit {
  @Input() orientation: PrizmSplitterOrientation = 'horizontal';

  public gutterSize = 8;
  private gutterOffset = 0;
  private containerBoxSize: { width: number; height: number } | null = null;
  private areasWithGutters = false;

  @Output() areasSizeChange = new EventEmitter<Array<number>>();
  @Output() areasSplitStart = new EventEmitter<Array<number>>();
  @Output() areasSplitEnd = new EventEmitter<Array<number>>();

  @ContentChildren(PrizmSplitterAreaComponent) private areas!: QueryList<PrizmSplitterAreaComponent>;
  @ViewChildren(PrizmSplitterGutterComponent) private guttersQL!: QueryList<PrizmSplitterGutterComponent>;
  @ViewChild('container', { static: true }) private containerElement!: ElementRef<HTMLElement>;

  constructor(
    private cdr: ChangeDetectorRef,
    private destroy$: PrizmDestroyService,
    @Inject(ResizeObserverService) private entries$: ResizeObserverService
  ) {}

  visibleAreas: Array<PrizmSplitterAreaComponent> = [];

  public setVisibleAreas(): void {
    this.areas.forEach(area => {
      if (area.size === null) {
        area.currentSize = null;
      }
    });

    this.visibleAreas = this.areas.filter(area => area.size !== null);
  }

  public get isHorizontal(): boolean {
    return this.orientation === 'horizontal';
  }

  public ngAfterContentInit(): void {
    this.setVisibleAreas();
    this.setAreasOrder();
  }

  public ngAfterViewInit(): void {
    this.entries$
      .pipe(
        map(([value]) => value.contentBoxSize[0]),
        takeUntil(this.destroy$)
      )
      .subscribe(size => {
        this.containerBoxSize = { width: size.inlineSize, height: size.blockSize };
        if (
          this.areasWithGutters === false &&
          (this.containerBoxSize.width !== 0 || this.containerBoxSize.height !== 0)
        ) {
          this.setAreaSizeWithGutters();
        }
      });

    this.guttersQL.changes
      .pipe(
        startWith(this.guttersQL),
        switchMap((gutters: QueryList<PrizmSplitterGutterComponent>) =>
          merge(...gutters.map(gutter => gutter.gutterMove))
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
        const containerBCR = this.containerElement.nativeElement.getBoundingClientRect();
        this.gutterMoveHandler(data, containerBCR);
      });

    merge(...this.guttersQL.map(gutter => gutter.gutterPointerDown))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.areasSplitStart.next(this.getAreasSizeWithoutGutters());
      });

    merge(...this.guttersQL.map(gutter => gutter.gutterPointerUp))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.areasSplitEnd.next(this.getAreasSizeWithoutGutters());
      });
  }

  public setAreasSize(size: Array<number>): void {
    this.areas.forEach((area, index) => {
      area.size = size[index];
    });
    this.setVisibleAreas();
    this.setAreasOrder();
    this.cdr.detectChanges();
    this.setAreaSizeWithGutters();
    this.updateGuttersPosition();
  }

  private setAreasOrder(): void {
    this.visibleAreas.forEach((area, index) => {
      area.order = index + 1;
    });
  }

  private setAreaSizeWithGutters(): void {
    this.gutterOffset =
      (((this.guttersCount * this.gutterSize) / this.containerSize) * 100) / this.visibleAreas.length;

    this.visibleAreas.forEach(area => {
      area.currentSize = Math.max(0, area.size - this.gutterOffset);
    });

    this.areasWithGutters = true;

    this.updateAreas();
  }

  private updateGuttersPosition(): void {
    this.guttersQL.changes
      .pipe(startWith(this.guttersQL), take(1))
      .subscribe((guttersQL: QueryList<PrizmSplitterGutterComponent>) =>
        guttersQL.forEach(gutter => {
          let sum = 0;
          for (let i = 0; i <= gutter.areaBeforeIndex; i++) {
            sum += this.visibleAreas[i].currentSize;
          }
          gutter.positionRelativeToContainer = sum + gutter.areaBeforeIndex * this.gutterOffset || 0;
        })
      );
  }

  private updateAreas(): void {
    this.updateGuttersPosition();

    this.areasSizeChange.next(this.getAreasSizeWithoutGutters());

    this.cdr.markForCheck();
  }

  private getAreasSizeWithoutGutters(): Array<number> {
    const areasSize = this.areas.map(area => area.currentSize);
    const sum = areasSize.reduce((acc, curr) => acc + curr);
    return areasSize.map(item => (item === null ? null : Math.round((item / sum) * 100)));
  }

  private shrinkAreas(from: number, to: number, size: number): number {
    const areaFrom = this.visibleAreas[from];

    const availableSize = areaFrom.currentSize - areaFrom.minSize;

    if (availableSize >= size) {
      areaFrom.currentSize = areaFrom.currentSize - size;
      return size;
    } else {
      areaFrom.currentSize = Math.max(0, areaFrom.minSize);

      return (
        availableSize +
        (this.checkIsLast(from, to, from)
          ? 0
          : this.shrinkAreas(from > to ? from - 1 : from + 1, to, size - availableSize))
      );
    }
  }

  private gutterMoveHandler(
    data: {
      gutter: PrizmSplitterGutterComponent;
      position: { left: number; top: number };
    },
    containerBCR: DOMRect
  ): void {
    const { gutter, position } = data;
    const { areaBeforeIndex, areaAfterIndex, positionRelativeToContainer } = gutter;

    const limits = [0, this.containerSize];

    let newPosition;

    if (this.isHorizontal) {
      newPosition = position.left - containerBCR.left;
    } else {
      newPosition = position.top - containerBCR.top;
    }

    newPosition = Math.min(limits[1], Math.max(limits[0], newPosition));

    const offsetRelativeToContainer = (newPosition / this.containerSize) * 100;
    const diff = positionRelativeToContainer - offsetRelativeToContainer;

    if (diff === 0) {
      return;
    }

    if (diff > 0) {
      const shrinked = this.shrinkAreas(areaBeforeIndex, 0, diff);

      this.visibleAreas[areaAfterIndex].currentSize =
        this.visibleAreas[areaAfterIndex].currentSize + shrinked;
    } else {
      const shrinked = this.shrinkAreas(areaAfterIndex, this.visibleAreas.length - 1, Math.abs(diff));

      this.visibleAreas[areaBeforeIndex].currentSize =
        this.visibleAreas[areaBeforeIndex].currentSize + shrinked;
    }

    this.updateAreas();
  }

  private get guttersCount(): number {
    return this.visibleAreas.length - 1;
  }

  private get containerSize(): number {
    return this.isHorizontal ? this.containerBoxSize.width : this.containerBoxSize.height;
  }

  private checkIsLast(from: number, to: number, index: number): boolean {
    if (from === to) {
      return true;
    }

    if (from < to) {
      return index === to;
    }

    return index === to;
  }
}

