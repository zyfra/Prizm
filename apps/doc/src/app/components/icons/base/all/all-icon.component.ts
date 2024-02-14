import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  IconDefs,
  PrizmHintDirective,
  PrizmInputCommonModule,
  PrizmInputTextModule,
  PrizmPaginatorComponent,
  PrizmScrollableDirective,
  PrizmScrollbarComponent,
  PrizmSelectInputItemComponent,
  PrizmToastService,
  PrizmToggleComponent,
} from '@prizm-ui/components';
import { Clipboard } from '@angular/cdk/clipboard';
import {
  PrizmIconsComponent,
  PrizmIconsFullComponent,
  prizmIconsProvideOldNameTransformer,
} from '@prizm-ui/icons';
import { copyToClipboard } from '../../../../util';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { PRIZM_ICONS_LAZY_SET } from '@prizm-ui/icons/base';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';

@Component({
  selector: 'prizm-all-icon',
  templateUrl: './all-icon.component.html',
  styleUrls: ['./all-icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [prizmIconsProvideOldNameTransformer()],
  standalone: true,
  imports: [
    CommonModule,
    ScrollingModule,
    PrizmInputCommonModule,
    PrizmInputTextModule,
    PrizmHintDirective,
    PrizmToggleComponent,
    FormsModule,
    PrizmIfLanguageDirective,
    PrizmIconsComponent,
    PrizmIconsFullComponent,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    PrizmScrollableDirective,
    PrizmScrollbarComponent,
    PrizmSelectInputItemComponent,
    PrizmPaginatorComponent,
  ],
})
export class AllIconComponent {
  public readonly iconsSet = Object.keys(PRIZM_ICONS_LAZY_SET);
  public readonly iconsAmount = this.iconsSet.length;
  public search = '';
  public defs = IconDefs;
  public colored = false;
  private search$$ = new BehaviorSubject<string | null>(null);
  public page$$ = new BehaviorSubject<number>(1);
  public rowOnPage$$ = new BehaviorSubject<number>(25);
  public size$$ = new BehaviorSubject<number>(this.iconsAmount);
  readonly clipboard = inject(Clipboard);
  readonly toastService = inject(PrizmToastService);

  public readonly filteredIcons$ = combineLatest([this.search$$, this.page$$, this.rowOnPage$$]).pipe(
    debounceTime(250),
    map(([search, page, rowOnPage]) => {
      let result = this.iconsSet;

      if (search) result = result.filter(i => i.toLowerCase().includes(search.toLowerCase()));

      this.size$$.next(result.length);

      return result.slice((page - 1) * rowOnPage, rowOnPage * page);
    })
  );

  public copy(value: string): void {
    copyToClipboard(value, this.clipboard, this.toastService);
  }

  public filterIcons(search: string | null) {
    this.search$$.next(search?.trim() || null);
  }
}

function createChunks<T>(arr: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}
