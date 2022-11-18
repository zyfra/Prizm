import {
  AfterContentInit,
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
import { EMPTY_QUERY, tuiDefaultProp } from '@taiga-ui/cdk';

import { PrizmRowDirective } from '../directives/row.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PrizmTableSortPipe } from '../pipes/table-sort.pipe';
import { TUI_TABLE_PROVIDER } from '../providers/table.provider';
import { PrizmTrComponent } from '../tr/tr.component';
import { PolymorphContent } from '../../../directives';
import { BehaviorSubject, Observable } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `[prizmTbody] `,
  templateUrl: `./tbody.template.html`,
  styleUrls: [`./tbody.style.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: TUI_TABLE_PROVIDER,
})
export class PrizmTbodyComponent<T extends Partial<Record<keyof T, any>>> {
  @Input()
  @tuiDefaultProp()
  data: readonly T[] = [];

  @Input()
  @tuiDefaultProp()
  heading: PolymorphContent = ``;

  @Input()
  @tuiDefaultProp()
  open = true;

  @Output()
  readonly openChange = new EventEmitter<boolean>();

  @ContentChild(forwardRef(() => PrizmRowDirective))
  readonly row?: PrizmRowDirective<T>;

  @ContentChildren(forwardRef(() => PrizmTrComponent))
  readonly rows: QueryList<PrizmTrComponent<T>> = EMPTY_QUERY;

  constructor(
    @Inject(PrizmTableSortPipe) private readonly pipe: PrizmTableSortPipe<T>,
    @Inject(forwardRef(() => PrizmTableDirective))
    readonly table: PrizmTableDirective<T>
  ) {}

  get sorted(): readonly T[] {
    return this.pipe.transform(this.data);
  }

  readonly toContext = ($implicit: T, index: number): { $implicit: T; index: number } => ({
    $implicit,
    index,
  });

  public onClick(): void {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }
}
