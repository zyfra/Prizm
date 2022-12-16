import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { tuiPure } from '@taiga-ui/cdk';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

import { PrizmDocSourceCodePathOptions } from '../../interfaces/source-code-path-options';
import { PRIZM_DOC_SOURCE_CODE_TEXT } from '../../tokens/i18n';
import { PRIZM_DOC_SOURCE_CODE } from '../../tokens/source-code';

@Component({
  selector: `prizm-doc-source-code`,
  templateUrl: `./source-code.template.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmDocSourceCodeComponent {
  @Input()
  header = ``;

  @Input()
  package = ``;

  @Input()
  type = ``;

  @Input()
  path = ``;

  constructor(
    @Inject(PRIZM_DOC_SOURCE_CODE)
    readonly sourceCode: PolymorpheusContent<PrizmDocSourceCodePathOptions>,
    @Inject(PRIZM_DOC_SOURCE_CODE_TEXT) readonly text: string
  ) {}

  get pathOptions(): PrizmDocSourceCodePathOptions {
    return this.getPathOptions(this.header, this.package, this.type, this.path);
  }

  @tuiPure
  private getPathOptions(
    header: string,
    packageName: string,
    type: string,
    path: string
  ): PrizmDocSourceCodePathOptions {
    return {
      header,
      package: packageName,
      type,
      path,
    };
  }
}
