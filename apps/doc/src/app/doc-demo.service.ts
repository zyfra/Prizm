import { inject, Injectable } from '@angular/core';
import { PrizmDocDemoAbstractService, PrizmDocDemoMainVersion, PrizmDocDemoVersion } from '@prizm-ui/doc';
import { PrizmDocCodeDemoService } from './code-demo/code-demo.service';

@Injectable()
export class DocDemoService extends PrizmDocDemoAbstractService {
  private readonly docCodeDemoService = inject(PrizmDocCodeDemoService);
  public open(
    title: string,
    version: PrizmDocDemoMainVersion,
    mainContent: { ts: string; html: string; less?: string }
  ): void {
    this.docCodeDemoService.open(title, version, {
      ts: mainContent.ts,
      html: mainContent.html,
      less: mainContent.less,
    });
  }
}
