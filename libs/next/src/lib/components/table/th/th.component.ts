import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Input,
  Optional,
} from '@angular/core';

import { PrizmHeadDirective } from '../directives/head.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PrizmComparator } from '../prizm-table.types';
import { prizmDefaultSort } from '../prizm-table.const';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_ELEMENT_REF } from '../../../tokens';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `th[prizmTh]`,
  templateUrl: `./th.template.html`,
  styleUrls: [`./th.style.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PRIZM_ELEMENT_REF,
      useExisting: ElementRef,
    },
  ],
})
export class PrizmThComponent<T extends Partial<Record<keyof T, any>>> {
  @Input()
  @prizmDefaultProp()
  sorter: PrizmComparator<T> | null = this.head
    ? (a, b): number => prizmDefaultSort(a[this.key], b[this.key])
    : null;

  @Input()
  @prizmDefaultProp()
  resizable = false;

  @Input()
  @HostBinding(`class._sticky`)
  @prizmDefaultProp()
  sticky = false;

  @HostBinding(`style.width.px`)
  width: number | null = null;

  constructor(
    @Optional()
    @Inject(PrizmHeadDirective)
    private readonly head: PrizmHeadDirective<T> | null,
    @Optional()
    @Inject(forwardRef(() => PrizmTableDirective))
    readonly table: PrizmTableDirective<T> | null
  ) {}

  get key(): keyof T {
    if (!this.head) {
      throw new Error();
    }

    return this.head.prizmHead;
  }

  get isCurrent(): boolean {
    return !!this.sorter && !!this.table && this.sorter === this.table.sorter;
  }

  get icon(): string {
    return !this.isCurrent
      ? 'arrows-swap-vert-2'
      : this.table?.direction === 1
      ? `sort-asc-arr`
      : `sort-desc-arr`;
  }

  public onResized(width: number): void {
    this.width = width;
  }
}
