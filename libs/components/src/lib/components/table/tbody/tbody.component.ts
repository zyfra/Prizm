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
import { PrizmTableSortPipe } from '../pipes/table-sort.pipe';
import { PRIZM_TABLE_PROVIDER } from '../providers/table.provider';
import { PrizmTrComponent } from '../tr/tr.component';
import { PolymorphContent } from '../../../directives';
import { prizmDefaultProp } from '@prizm-ui/core';
import { filter, map, startWith, takeUntil } from 'rxjs/operators';
import { PrizmCellDirective } from '../directives/cell.directive';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmTableDataService } from '../service/table-data.service';
import { PrizmTableSorterService } from '../service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `[prizmTbody] `,
  templateUrl: `./tbody.template.html`,
  styleUrls: [`./tbody.style.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [...PRIZM_TABLE_PROVIDER, PrizmTableDataService],
})
export class PrizmTbodyComponent<T extends Partial<Record<keyof T, any>>> implements AfterViewInit {
  @Input()
  set data(items: T[]) {
    this.dataService.set(items);
  }
  get data(): T[] {
    return this.dataService.data;
  }

  @Input()
  @prizmDefaultProp()
  heading: PolymorphContent = ``;

  @Input()
  @prizmDefaultProp()
  open = true;

  @Output()
  readonly openChange = new EventEmitter<boolean>();

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
    count: number
  ): {
    $implicit: T;
    index: number;
    first: boolean;
    last: boolean;
    odd: boolean;
    even: boolean;
    count: number;
  } => ({
    $implicit,
    index,
    first,
    last,
    even,
    odd,
    count,
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
