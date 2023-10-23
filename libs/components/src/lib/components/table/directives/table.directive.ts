import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { IntersectionObserverService } from '@ng-web-apis/intersection-observer';

import { PRIZM_TABLE_PROVIDERS } from '../providers/table.providers';
import { PrizmSizeL, PrizmSizeM, PrizmSizeS, PrizmSizeXS } from '../../../util';
import { PrizmComparator, PrizmTableBorderStyle } from '../table.types';
import { AbstractPrizmController } from '../abstract/controller';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { prizmAutoEmit, prizmDefaultProp } from '@prizm-ui/core';
import { PrizmTableCellSorter, PrizmTableSorterService } from '../service';
import { PrizmTableTreeService } from '../service/tree.service';
import { PrizmTableRowService } from '../service/row.service';
import { prizmTableDefaultColumnSort } from '../table.const';
import { TableService } from '../table.service';

@Directive({
  selector: `table[prizmTable]`,
  providers: [TableService, ...PRIZM_TABLE_PROVIDERS, PrizmTableTreeService, PrizmTableRowService],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    style: `border-collapse: separate; border-spacing: 0`,
  },
  exportAs: 'prizmTable',
})
export class PrizmTableDirective<T extends Partial<Record<keyof T, unknown>>>
  extends AbstractPrizmController
  implements AfterViewInit
{
  private readonly columns$$ = new BehaviorSubject<ReadonlyArray<keyof T | string>>([]);

  @Input()
  @prizmAutoEmit({
    name: 'columns$$',
  })
  columns: ReadonlyArray<keyof T | string> = [];

  public columns$ = this.columns$$.asObservable();

  @Input()
  @HostBinding(`attr.data-size`)
  @prizmDefaultProp()
  size: PrizmSizeXS | PrizmSizeS | PrizmSizeL | PrizmSizeM = `l`;

  @Input()
  @HostBinding(`attr.border-style`)
  @prizmDefaultProp()
  tableBorderStyle: PrizmTableBorderStyle = 'grid';

  @Input()
  set sort(sorters: PrizmTableCellSorter<T>[]) {
    for (const item of sorters) {
      item.sorter = item.sorter ?? prizmTableDefaultColumnSort;
    }
    this.sorterService.set(sorters);
  }
  get sort(): PrizmTableCellSorter<T>[] {
    return this.sorterService.value;
  }

  @Input()
  @prizmDefaultProp()
  direction: -1 | 1 = 1;

  @Output()
  readonly directionChange = new EventEmitter<-1 | 1>();

  /**
   * @deprecated
   * */
  @Output()
  readonly sorterChange = new EventEmitter<PrizmComparator<T> | null>();

  @Output()
  readonly sortChange: Observable<PrizmTableCellSorter<T>[]> = this.sorterService.changes$;

  constructor(
    public readonly tree: PrizmTableTreeService,
    public readonly sorterService: PrizmTableSorterService<T>,
    public readonly tableService: TableService,
    @Inject(IntersectionObserverService)
    readonly entries$: Observable<IntersectionObserverEntry[]>,
    @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  @Input()
  @prizmDefaultProp()
  sorter: PrizmComparator<T> = () => 0;

  public updateSorter(sorter: PrizmComparator<T> | null): void {
    if (this.sorter === sorter) {
      if (this.direction === -1) {
        this.sorter = (): number => 0;
      } else {
        this.direction = -1;
        this.directionChange.emit(this.direction);
      }
    } else {
      this.sorter = sorter || ((): number => 0);
      this.sorterChange.emit(this.sorter);
      this.direction = 1;
      this.directionChange.emit(1);
    }

    this.change$.next();
  }

  public ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
