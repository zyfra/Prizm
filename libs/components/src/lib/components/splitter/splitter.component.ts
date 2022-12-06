import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PrizmSplitterOrientation } from './types';

import { merge } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PrizmSplitterAreaComponent } from './splitter-area.component';
import { PrizmSplitterGutterComponent } from './splitter-gutter.component';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Component({
  selector: 'prizm-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmSplitterComponent implements AfterViewInit, AfterContentInit, OnDestroy, AfterViewChecked {
  private _orientation: PrizmSplitterOrientation = 'horizontal';

  @Input() set orientation(value: PrizmSplitterOrientation) {
    this._orientation = value;
    if (this.viewWasInit) {
      this.setAreaSizeWithGutters();
    }
  }

  get orientation(): PrizmSplitterOrientation {
    return this._orientation;
  }

  private _areasSize: Array<number> = [];

  @Input() set areasSize(value: Array<number>) {
    this._areasSize = value;
    if (this.viewWasInit) {
      this.setAreaSizeWithGutters();
    }
  }

  get areasSize(): Array<number> {
    return this._areasSize;
  }

  private _minAreasSize: Array<number> = [];
  @Input() set minAreasSize(value: Array<number>) {
    this._minAreasSize = value;
    if (this.viewWasInit) {
      this.setAreaSizeWithGutters();
    }
  }
  get minAreasSize(): Array<number> {
    return this._minAreasSize;
  }

  @HostBinding('class') get hostClass(): string {
    return `prizm-splitter ${this.orientation}`;
  }

  public gutterSize = 8;

  @ContentChildren(PrizmSplitterAreaComponent) public areas!: QueryList<PrizmSplitterAreaComponent>;

  @ViewChild('container', { static: true }) private containerElement!: ElementRef<HTMLElement>;

  private viewWasInit = false;

  @ViewChildren(PrizmSplitterGutterComponent) private guttersQL!: QueryList<PrizmSplitterGutterComponent>;

  private resizeObserver = new ResizeObserver(this.resizeObserverCB.bind(this));

  private currentAreaSizes: Array<number> = [];

  constructor(private cdr: ChangeDetectorRef, private destroy$: PrizmDestroyService) {}

  public ngOnDestroy(): void {
    this.resizeObserver.disconnect();
  }

  public get isHorizontal(): boolean {
    return this.orientation === 'horizontal';
  }

  public ngAfterContentInit(): void {
    this.setAreasOrder();
  }

  public ngAfterViewInit(): void {
    this.resizeObserver.observe(this.containerElement.nativeElement, { box: 'border-box' });

    merge(...this.guttersQL.map(gutter => gutter.gutterMove))
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        const containerBCR = this.containerElement.nativeElement.getBoundingClientRect();
        this.gutterMoveHandler(data, containerBCR);
      });
  }

  public ngAfterViewChecked(): void {
    this.updateGuttersPosition();
  }

  private resizeObserverCB(): void {
    this.viewWasInit = true;

    this.setAreaSizeWithGutters();
    this.resizeObserver.disconnect();
    return;
  }

  private setAreasOrder(): void {
    this.areas.forEach((area, index) => {
      area.order = index + 1;
    });
  }

  private setAreaSizeWithGutters(): void {
    const containerBCR = this.containerElement.nativeElement.getBoundingClientRect();
    const containerSize = this.isHorizontal ? containerBCR.width : containerBCR.height;

    const guttersOffset = (((this.guttersCount * this.gutterSize) / containerSize) * 100) / this.areas.length;

    this.areas.forEach((area, index) => {
      this.currentAreaSizes[index] = Math.max(0, this.areasSize[index] - guttersOffset);
    });

    this.updateAreas();
  }

  private updateGuttersPosition(): void {
    const containerBCR = this.containerElement.nativeElement.getBoundingClientRect();
    const containerSize = this.isHorizontal ? containerBCR.width : containerBCR.height;

    this.guttersQL.forEach(gutter => {
      const gutterBCR = gutter.getBoundingClientRect();

      const propName = this.isHorizontal ? 'left' : 'top';
      gutter.positionRelativeToContainer =
        ((gutterBCR[propName] - containerBCR[propName]) / containerSize) * 100;
    });
  }

  private updateAreas(): void {
    this.areas.forEach((area, index) => {
      area.size = this.currentAreaSizes[index];
    });

    this.cdr.markForCheck();
  }

  private shrinkAreas(from: number, to: number, size: number): number {
    const currentAreaSize = this.currentAreaSizes[from];
    const minAreaSize = this.minAreasSize[from] ?? 0;
    const diff = currentAreaSize - minAreaSize;

    if (diff >= size) {
      this.currentAreaSizes[from] -= size;
      return size;
    } else {
      this.currentAreaSizes[from] = Math.max(0, minAreaSize);

      return (
        diff +
        (this.checkIsLast(from, to, from)
          ? 0
          : this.shrinkAreas(from > to ? from - 1 : from + 1, to, size - diff))
      );
    }
    // if (this.currentAreaSizes[from] >= size) {
    //   this.currentAreaSizes[from] -= size;
    //   return size;
    // } else {
    //   const areaSize = this.currentAreaSizes[from];
    //   this.currentAreaSizes[from] = 0;

    //   return (
    //     areaSize +
    //     (this.checkIsLast(from, to, from)
    //       ? 0
    //       : this.shrinkAreas(from > to ? from - 1 : from + 1, to, size - areaSize))
    //   );
    // }
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

    const containerSize = this.isHorizontal ? containerBCR.width : containerBCR.height;
    const limits = [
      areaBeforeIndex * this.gutterSize,
      containerSize - (this.areas.length - areaAfterIndex) * this.gutterSize,
    ];

    let newPosition;

    if (this.isHorizontal) {
      newPosition = position.left - containerBCR.left;
    } else {
      newPosition = position.top - containerBCR.top;
    }

    newPosition = Math.min(limits[1], Math.max(limits[0], newPosition));

    const offsetXrelativeToContainer = (newPosition / containerSize) * 100;

    const diff = positionRelativeToContainer - offsetXrelativeToContainer;

    if (diff === 0) {
      return;
    }

    if (diff > 0) {
      const shrinked = this.shrinkAreas(areaBeforeIndex, 0, diff);

      this.currentAreaSizes[areaAfterIndex] += shrinked;
    } else {
      const shrinked = this.shrinkAreas(areaAfterIndex, this.currentAreaSizes.length - 1, Math.abs(diff));

      this.currentAreaSizes[areaBeforeIndex] += shrinked;
    }
    gutter.positionRelativeToContainer = offsetXrelativeToContainer;

    this.updateAreas();
  }

  private get guttersCount(): number {
    return this.areas.length - 1;
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

