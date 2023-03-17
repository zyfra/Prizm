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
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { PrizmSplitterOrientation } from './types';

import { merge, Subject } from 'rxjs';
import { debounceTime, map, startWith, switchMap, take, takeUntil } from 'rxjs/operators';

import { PrizmDestroyService } from '@prizm-ui/helpers';

import { ResizeObserverService, RESIZE_OPTION_BOX } from '@ng-web-apis/resize-observer';

import { PrizmSplitterGutterComponent } from './gutter/gutter.component';
import { PrizmSplitterAreaComponent } from './area/area.component';

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
export class PrizmSplitterComponent implements AfterViewInit, AfterContentInit, OnInit, OnDestroy {
  @Input() orientation: PrizmSplitterOrientation = 'horizontal';

  @Output() areasSizeChange = new EventEmitter<Array<number>>();
  @Output() areasSplitStart = new EventEmitter<Array<number>>();
  @Output() areasSplitEnd = new EventEmitter<Array<number>>();

  private containerBoxSize: { width: number; height: number } | null = null;

  @ViewChild('container', { static: true }) private containerElement!: ElementRef<HTMLElement>;

  @ContentChildren(PrizmSplitterAreaComponent) areas: QueryList<PrizmSplitterAreaComponent>;

  stateChanges = new Subject<void>();

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

    this.stateChanges.pipe(debounceTime(0), takeUntil(this.destroy$)).subscribe(() => this.setAreasSize());
  }

  public ngAfterContentInit(): void {
    this.setAreasSize(false);
  }

  private setAreasSize(runChangeDetection = true): void {
    this.areas.forEach(area => {
      if (area.size === null) {
        area.hide();
      } else {
        area.show();
        const currentSize = typeof area.size === 'string' ? area.size || '0px' : area.size + 'px';
        area.currentSize = currentSize;
      }
    });

    if (runChangeDetection) {
      this.cdr.markForCheck();
    }
  }

  public ngAfterViewInit(): void {
    // начальная установка размера контейнера
    const containerBCR = this.containerElement.nativeElement.getBoundingClientRect();
    this.containerBoxSize = { width: containerBCR.width, height: containerBCR.height };
    console.log('view init', 'CBS', this.containerBoxSize);
  }

  public ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  public get isHorizontal(): boolean {
    return this.orientation === 'horizontal';
  }

  private get containerSize(): number {
    return this.isHorizontal ? this.containerBoxSize.width : this.containerBoxSize.height;
  }
}
