import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
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
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';
import { copyToClipboard } from '../../../../util';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { PRIZM_ICONS_NAMES } from '@prizm-ui/icons/base/names';
import { prizmIconsFullProvideLazyLoader } from '@prizm-ui/icons-loader/full';
import { prizmIconsProvideLazyLoader } from '@prizm-ui/icons-loader';

@Component({
  selector: 'prizm-all-icon',
  templateUrl: './all-icon.component.html',
  styleUrls: ['./all-icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [prizmIconsFullProvideLazyLoader(), prizmIconsProvideLazyLoader()],
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
  public readonly iconsSet = PRIZM_ICONS_NAMES;
  public readonly iconsAmount = this.iconsSet.length;
  public search = '';
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
      const countOnPage = rowOnPage * page;

      if (search) {
        result = result.filter(i => i.toLowerCase().includes(search.toLowerCase()));
        const maxPage = Math.ceil(result.length / rowOnPage) || 1;
        if (page > maxPage) this.page$$.next(maxPage);
      }

      this.size$$.next(result.length);

      return result.slice((page - 1) * rowOnPage, countOnPage);
    })
  );

  public copy(value: string): void {
    copyToClipboard(
      `enum: ${dashToCamelCase('prizm-icons-' + value)}, name: ${value}`,
      this.clipboard,
      this.toastService
    );
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

function dashToCamelCase(myStr: string): string {
  return myStr.replace(/-([a-z])/g, g => {
    return g[1].toUpperCase();
  });
}
