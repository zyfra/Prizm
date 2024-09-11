import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { PrizmDocPage, PrizmDocPageGroup } from '../../interfaces/page';
import { PRIZM_DOC_SEE_ALSO_TEXT } from '../../tokens/i18n';
import { PRIZM_DOC_PAGES } from '../../tokens/pages';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TuiLinkModule } from '@taiga-ui/core';

@Component({
  selector: `prizm-doc-see-also`,
  templateUrl: `./see-also.template.html`,
  styleUrls: [`./see-also.style.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule, TuiLinkModule],
})
export class PrizmDocSeeAlsoComponent {
  @Input()
  seeAlso: readonly string[] = [];

  constructor(
    @Inject(PRIZM_DOC_SEE_ALSO_TEXT) readonly text: string,
    @Inject(PRIZM_DOC_PAGES)
    private readonly pages$: Observable<ReadonlyArray<PrizmDocPageGroup | PrizmDocPage>>
  ) {}

  public getRouterLink(pageTitle: string): Observable<string> {
    return this.pages$.pipe(
      map(pages => {
        for (let i = 0; i < pages.length; i++) {
          const page = pages
            .map(page => (`subPages` in page ? page.subPages : [page]))
            .reduce((pages, subPages) => [...pages, ...subPages], [])
            .find((page: PrizmDocPage) => page.title === pageTitle);

          if (page?.route) {
            return page.route;
          }
        }

        return ``;
      })
    );
  }
}
