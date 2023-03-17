import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  Output,
  QueryList,
} from '@angular/core';

import { PrizmRowDirective } from '../directives/row.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PRIZM_TABLE_PROVIDER } from '../providers/table.provider';
import { PrizmTrComponent } from '../tr/tr.component';
import { PolymorphContent } from '../../../directives';
import { prizmDefaultProp } from '@prizm-ui/core';
import { filter, map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { PrizmCellDirective } from '../directives/cell.directive';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmTableDataService } from '../service/table-data.service';
import { PrizmTableSorterService } from '../service';
import { PrizmTableTreeService } from '../service/tree.service';
import { PrizmTableTreeLoadingDirective } from '../directives/tree-loading.directive';
import { PrizmTableLoadingDirective } from '../directives/loading.directive';
import { PrizmTableEmptyDirective } from '../directives/empty.directive';
import { Observable } from 'rxjs';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `[prizmTbody] `,
  templateUrl: `./tbody.component.html`,
  styleUrls: [`./tbody.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [...PRIZM_TABLE_PROVIDER, PrizmTableTreeService, PrizmTableDataService],
})
export class PrizmTbodyComponent<T extends Partial<Record<keyof T, any>>> implements AfterViewInit {
  @Input()
  set data(items: T[]) {
    this.dataService.set(items);
  }
  get data(): T[] {
    return this.dataService.data;
  }

  get sortedData$(): Observable<T[]> {
    return this.dataService.data$.pipe(switchMap(data => this.sorterService.sort$(data)));
  }

  @Input()
  @prizmDefaultProp()
  heading: PolymorphContent = ``;

  @Input()
  @prizmDefaultProp()
  open = true;

  @Output()
  readonly openChange = new EventEmitter<boolean>();

  @ContentChild(PrizmTableLoadingDirective)
  readonly loadingTemplate?: PrizmTableLoadingDirective;

  @ContentChild(PrizmTableEmptyDirective)
  readonly emptyTemplate?: PrizmTableEmptyDirective;

  @ContentChild(PrizmTableTreeLoadingDirective)
  readonly treeLoadingTemplate?: PrizmTableTreeLoadingDirective;

  @ContentChild(forwardRef(() => PrizmRowDirective))
  readonly row?: PrizmRowDirective<T>;

  @ContentChildren(forwardRef(() => PrizmTrComponent))
  readonly rows: QueryList<PrizmTrComponent<T>> = new QueryList<PrizmTrComponent<T>>();

  public columnsCount = 0;

  constructor(
    @Inject(forwardRef(() => PrizmTableDirective))
    readonly table: PrizmTableDirective<T>,
    readonly dataService: PrizmTableDataService<T>,
    readonly sorterService: PrizmTableSorterService<T>,
    private readonly destroy$: PrizmDestroyService,
    public readonly tableTreeService: PrizmTableTreeService,
    private changeDetectoreRef: ChangeDetectorRef
  ) {}

  get sorted(): readonly T[] {
    // return this.pipe.transform(this.data);
    return this.sorterService.sort(this.data);
  }
  readonly toContext = (
    $implicit: T,
    index: number,
    first: boolean,
    last: boolean,
    odd: boolean,
    even: boolean,
    count: number,
    deepLevel: number,
    parentItem: number,
    parentIdx: number
  ): {
    $implicit: T;
    index: number;
    first: boolean;
    last: boolean;
    odd: boolean;
    even: boolean;
    count: number;
    deepLevel: number;
    parentItem: number;
    parentIdx: number;
  } => ({
    $implicit,
    index,
    first,
    last,
    even,
    odd,
    count,
    deepLevel,
    parentItem,
    parentIdx,
  });

  ngAfterViewInit(): void {
    this.rows.changes
      .pipe(
        startWith(this.rows),
        map(({ first }: QueryList<PrizmTrComponent<T>>) => first),
        filter((first: PrizmTrComponent<T>) => !!first),
        map(({ cells }: PrizmTrComponent<T>) => cells),
        map(({ length }: QueryList<PrizmCellDirective>) => length),
        takeUntil(this.destroy$)
      )
      .subscribe((columnsCount: number) => {
        this.columnsCount = columnsCount;
        this.changeDetectoreRef.detectChanges();
      });
  }

  public onClick(): void {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }
}
