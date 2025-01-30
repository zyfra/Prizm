import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  inject,
  Inject,
  Input,
  Optional,
} from '@angular/core';

import { PrizmHeadDirective } from '../directives/head.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_ELEMENT_REF } from '../../../tokens';
import { PrizmTableSortKeyException } from '../../../exceptions';
import { PrizmTableCellSorter, PrizmTableCellSorterHandler, PrizmTableSorterService } from '../service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsArrowUpArrowDownV,
  prizmIconsArrowDownWideShort,
  prizmIconsArrowUpWideShort,
} from '@prizm-ui/icons/base/source';
import { PrizmTestIdDirective } from '@prizm-ui/helpers';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `th[prizmTh]`,
  templateUrl: `./th.component.html`,
  styleUrls: [`./th.style.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PRIZM_ELEMENT_REF,
      useExisting: ElementRef,
    },
  ],
  hostDirectives: [
    {
      directive: PrizmTestIdDirective,
      inputs: ['testId'],
    },
  ],
})
export class PrizmThComponent<T extends Partial<Record<keyof T, any>>> {
  @Input()
  @prizmDefaultProp()
  sorter: PrizmTableCellSorterHandler<T> | null = null;

  @Input()
  @prizmDefaultProp()
  resizable = false;

  @Input()
  @prizmDefaultProp()
  sortable = false;

  @HostBinding(`style.width.px`)
  width: number | null = null;

  get isSortable(): boolean {
    return this.sortable || typeof this.sorter === 'function';
  }

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);
  private readonly testIdDirective = inject(PrizmTestIdDirective, { host: true });

  constructor(
    @Optional()
    @Inject(PrizmHeadDirective)
    private readonly head: PrizmHeadDirective<T> | null,
    public readonly el: ElementRef<HTMLTableCellElement>,
    private readonly sorterService: PrizmTableSorterService<T>,
    @Optional()
    @Inject(forwardRef(() => PrizmTableDirective))
    readonly table: PrizmTableDirective<T> | null
  ) {
    this.iconsFullRegistry.registerIcons(
      prizmIconsArrowUpArrowDownV,
      prizmIconsArrowDownWideShort,
      prizmIconsArrowUpWideShort
    );

    this.testIdDirective.generateMainTestId = 'ui_table_th';
  }

  get key(): keyof T {
    if (!this.head) {
      throw new PrizmTableSortKeyException();
    }

    return this.head.prizmHead;
  }

  get isCurrent(): boolean {
    return this.sorterService.isActive(this.key as string);
  }

  get idx(): number {
    return this.sorterService.idx(this.key as string);
  }

  get count(): number {
    return this.sorterService.count;
  }

  get num(): number | null {
    const idx = this.idx;
    if (idx === -1) return null;
    return idx + 1;
  }

  get sortItem(): PrizmTableCellSorter<T> {
    return this.sorterService.cell(this.key as string);
  }

  get icon$(): Observable<string> {
    return this.sorterService.changes$.pipe(
      map(() =>
        !this.isCurrent
          ? 'arrow-up-arrow-down-v'
          : this.sorterService.cellOrder(this.key as string) === 'asc'
            ? `arrow-down-wide-short`
            : `arrow-up-wide-short`
      )
    );
  }

  public onResized(width: number): void {
    this.width = width;
  }

  public updateSorter(event: MouseEvent): void {
    event.preventDefault();
    const newOrder = this.sorterService.nextOrder(this.key as string) as any;
    if (event.ctrlKey || event.metaKey) {
      this.sorterService.remove(this.key as string);
    } else
      this.sorterService.sortCell(
        {
          options: {
            id: this.key as string,
            order: newOrder,
          },
          sorter: this.sorter as any,
        },
        !event.shiftKey
      );
  }
}
