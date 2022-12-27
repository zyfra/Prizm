import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';

@Component({
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmErrorPageExampleComponent {
  code = 403;
  title = 'Доступ ограничен';
  userContent = 'Обратитесь к системному администратору или владельцу продукта для получения доступа';

  setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly error404: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/base.component.ts'),
    HTML: import('!!raw-loader!./examples/base/base.component.html'),
  };
}
