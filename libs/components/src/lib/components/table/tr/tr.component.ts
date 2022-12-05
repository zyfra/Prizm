import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  Inject,
  Input,
  QueryList, ViewEncapsulation,
} from '@angular/core';
import { map, startWith } from 'rxjs/operators';

import { PrizmCellDirective } from '../directives/cell.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PRIZM_TABLE_PROVIDER } from '../providers/table.provider';
import { PrizmTbodyComponent } from '../tbody/tbody.component';
import { PrizmTableCellStatus } from '../prizm-table.types';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `tr[prizmTr]`,
  templateUrl: `./tr.template.html`,
  styleUrls: [`./tr.style.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [PRIZM_TABLE_PROVIDER],
})
export class PrizmTrComponent<T extends Partial<Record<keyof T, any>>> {
  @Input() index: number;
  @Input() @HostBinding('attr.status') public status: PrizmTableCellStatus = 'default';

  @ContentChildren(forwardRef(() => PrizmCellDirective))
  private readonly cells: QueryList<PrizmCellDirective> = new QueryList<PrizmCellDirective>();

  readonly cells$ = this.cells.changes.pipe(
    startWith(null),
    map(() =>
      this.cells.reduce(
        (record, item) => ({ ...record, [item.prizmCell]: item }),
        {} as Record<keyof T | string, PrizmCellDirective>
      )
    )
  );

  readonly item$ = this.body.rows.changes.pipe(
    startWith(null),
    map(
      () =>
        this.body.sorted[this.body.rows.toArray().findIndex(row => row === this)] as Record<
          keyof T | string,
          any
        >
    )
  );

  @Input() @HostBinding('attr.active') public active = false;

  constructor(
    @Inject(forwardRef(() => PrizmTableDirective))
    readonly table: PrizmTableDirective<T>,
    @Inject(forwardRef(() => PrizmTbodyComponent))
    private readonly body: PrizmTbodyComponent<T>,
    @Inject(PrizmDestroyService) readonly destroy$: PrizmDestroyService
  ) {}
}
