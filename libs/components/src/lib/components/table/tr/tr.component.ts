import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  Inject,
  Input,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { animationFrameScheduler, merge, Observable } from 'rxjs';
import { prizmDefaultProp } from '@prizm-ui/core';

import { PrizmCellDirective } from '../directives/cell.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PRIZM_TABLE_PROVIDER } from '../providers/table.provider';
import { PrizmTbodyComponent } from '../tbody/tbody.component';
import { PrizmTableCellStatus } from '../table.types';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmTableTreeService } from '../service/tree.service';
import { PrizmCellService } from '../directives/cell.service';
import { PrizmTdService } from '../td/td.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `tr[prizmTr]`,
  templateUrl: `./tr.component.html`,
  styleUrls: [`./tr.component.less`],
  exportAs: 'prizmTr',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [PRIZM_TABLE_PROVIDER, PrizmCellService, PrizmTdService],
})
export class PrizmTrComponent<T extends Partial<Record<keyof T, unknown>>> {
  @Input() @HostBinding('attr.status') public status: PrizmTableCellStatus = 'default';

  @Input()
  @prizmDefaultProp()
  columns: ReadonlyArray<keyof T | string> = this.table.columns;

  @ContentChildren(forwardRef(() => PrizmCellDirective))
  readonly cells: QueryList<PrizmCellDirective> = new QueryList<PrizmCellDirective>();

  readonly cells$ = merge(
    this.cells.changes,
    this.cellService.changes$$.pipe(debounceTime(0, animationFrameScheduler))
  ).pipe(
    startWith(null),
    map(() => {
      const cells = this.cells.toArray();
      const columns = this.columns;
      if (!columns || columns.length === 0) {
        return cells;
      }

      // Display cells in order as specified by table's `column` property.
      return columns.map(column => cells.find(c => c.prizmCell === column));
    })
  );

  get cols(): number {
    return this.td.count;
  }

  get cols$(): Observable<number> {
    return this.td.count$;
  }

  readonly item$: Observable<T> = this.body.rows.changes.pipe(
    startWith(null),
    map(() => this.body.view[this.body.rows.toArray().indexOf(this)])
  );

  @Input() @HostBinding('attr.active') public active = false;

  constructor(
    @Inject(forwardRef(() => PrizmTableDirective))
    public readonly table: PrizmTableDirective<T>,
    @Inject(forwardRef(() => PrizmTbodyComponent))
    private readonly body: PrizmTbodyComponent<T>,
    private readonly cellService: PrizmCellService,
    private readonly td: PrizmTdService,
    private readonly tableTreeService: PrizmTableTreeService,
    @Inject(PrizmDestroyService) readonly destroy$: PrizmDestroyService
  ) {}

  public showChildren(idx: number): void {
    this.tableTreeService.showChildren(idx);
  }

  public hideChildren(idx: number): void {
    this.tableTreeService.hideChildren(idx);
  }

  public toggleChildren(idx: number): void {
    this.tableTreeService.toggleChildren(idx);
  }

  public isChildrenOpened(idx: number): boolean {
    return this.tableTreeService.isChildrenOpened(idx);
  }
}
