import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';

import {PrizmDocPage, PrizmDocPageGroup} from '../../interfaces/page';
import {TUI_DOC_SEE_ALSO_TEXT} from '../../tokens/i18n';
import {PRIZM_DOC_PAGES} from '../../tokens/pages';

@Component({
    selector: `prizm-doc-see-also`,
    templateUrl: `./see-also.template.html`,
    styleUrls: [`./see-also.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmDocSeeAlsoComponent {
    @Input()
    seeAlso: readonly string[] = [];

    constructor(
        @Inject(TUI_DOC_SEE_ALSO_TEXT) readonly text: string,
        @Inject(PRIZM_DOC_PAGES)
        private readonly pages: ReadonlyArray<PrizmDocPageGroup | PrizmDocPage>,
    ) {}

    getRouterLink(pageTitle: string): string {
        for (let i = 0; i < this.pages.length; i++) {
            const page = this.pages
                .map(page => (`subPages` in page ? page.subPages : [page]))
                .reduce((pages, subPages) => [...pages, ...subPages], [])
                .find((page: PrizmDocPage) => page.title === pageTitle);

            if (page?.route) {
                return page.route;
            }
        }

        return ``;
    }
}
