import {
  ChangeDetectionStrategy,
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

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `[prizmTbody] `,
  templateUrl: `./tbody.template.html`,
  styleUrls: [`./tbody.style.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: PRIZM_TABLE_PROVIDER,
})
export class PrizmTbodyComponent<T extends Partial<Record<keyof T, any>>> {
  @Input()
  @prizmDefaultProp()
  data: readonly T[] = [];

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

  constructor(
    @Inject(PrizmTableSortPipe) private readonly pipe: PrizmTableSortPipe<T>,
    @Inject(forwardRef(() => PrizmTableDirective))
    readonly table: PrizmTableDirective<T>
  ) {}

  get sorted(): readonly T[] {
    return this.pipe.transform(this.data);
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

  public onClick(): void {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }
}

