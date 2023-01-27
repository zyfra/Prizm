import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Inject,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { EMPTY_QUERY } from '@taiga-ui/cdk';

import { PRIZM_DOC_DEFAULT_TABS } from '../../tokens/default-tabs';
import { PAGE_PROVIDERS, PAGE_SEE_ALSO } from './page.providers';
import { PrizmDocPageTabConnectorDirective } from './page-tab.directive';
import { PrizmPageService } from './page.service';

@Component({
  selector: `prizm-doc-page`,
  templateUrl: `./page.template.html`,
  styleUrls: [`./page.style.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: PAGE_PROVIDERS,
})
export class PrizmDocPageComponent implements OnChanges {
  @Input()
  header = ``;

  @Input()
  package = ``;

  @Input()
  type = ``;

  @Input()
  path = ``;

  @ContentChildren(PrizmDocPageTabConnectorDirective)
  readonly tabConnectors: QueryList<PrizmDocPageTabConnectorDirective> = EMPTY_QUERY;

  activeItemIndex = NaN;

  constructor(
    @Attribute(`deprecated`) readonly deprecated: string | null,
    @Inject(PRIZM_DOC_DEFAULT_TABS) readonly defaultTabs: readonly string[],
    @Inject(PAGE_SEE_ALSO) readonly seeAlso: readonly string[],
    private readonly pageService: PrizmPageService
  ) {}

  get showSeeAlso(): boolean {
    return !!this.seeAlso.length && this.activeItemIndex === 0;
  }

  public getRouterLink(tab: string = ``): string {
    return `./${tab.replace(/ /g, `_`)}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pageService.setInfo({
      header: this.header,
      package: this.package,
      type: this.type,
    });
  }
}
