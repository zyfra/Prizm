import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmErrorPageExampleComponent {
  code = 403;
  title = 'Доступ ограничен';
  userContent = 'Обратитесь к системному администратору или владельцу продукта для получения доступа';

  setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly error404: TuiDocExample = {
    TypeScript: import('./examples/base/base.component.ts?raw'),
    HTML: import('./examples/base/base.component.html?raw'),
  };
}
