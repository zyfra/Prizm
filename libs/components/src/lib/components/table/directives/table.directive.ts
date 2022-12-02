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
import { tuiDefaultProp } from '@taiga-ui/cdk';

import { TUI_TABLE_PROVIDERS } from '../providers/table.providers';
import { PrizmSizeL, PrizmSizeM, PrizmSizeS, PrizmSizeXS } from '../../../util';
import { PrizmComparator, PrizmTableBorderStyle } from '../prizm-table.types';
import { AbstractPrizmController } from '../abstract/controller';
import { Observable } from 'rxjs';

@Directive({
  selector: `table[prizmTable]`,
  providers: TUI_TABLE_PROVIDERS,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    style: `border-collapse: separate;`,
  },
})
export class PrizmTableDirective<T extends Partial<Record<keyof T, any>>>
  extends AbstractPrizmController
  implements AfterViewInit
{
  @Input()
  @tuiDefaultProp()
  columns: ReadonlyArray<keyof T | string> = [];

  @Input()
  @HostBinding(`attr.data-size`)
  @tuiDefaultProp()
  size: PrizmSizeXS | PrizmSizeS | PrizmSizeL | PrizmSizeM = `l`;

  @Input()
  @HostBinding(`attr.border-style`)
  @tuiDefaultProp()
  tableBorderStyle: PrizmTableBorderStyle = 'grid';

  @Input()
  @tuiDefaultProp()
  direction: -1 | 1 = 1;

  @Output()
  readonly directionChange = new EventEmitter<-1 | 1>();

  @Output()
  readonly sorterChange = new EventEmitter<PrizmComparator<T> | null>();

  constructor(
    @Inject(IntersectionObserverService)
    readonly entries$: Observable<IntersectionObserverEntry[]>,
    @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  @Input()
  @tuiDefaultProp()
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
