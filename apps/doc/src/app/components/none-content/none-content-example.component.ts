import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-none-content-example',
  templateUrl: './none-content-example.component.html',
  styleUrls: ['./none-content-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmNoneContentExampleComponent {
  public headerText = 'Нет данных для отображения';
  public descriptionText =
    'Чтобы просмотреть информацию в этой области нужно изменить условия отображения или фильтрации';

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/none-content-base-example.component.ts?raw'),
    HTML: import('./examples/base/none-content-base-example.component.html?raw'),
  };

  readonly exampleCustom: TuiDocExample = {
    TypeScript: import('./examples/custom/none-content-custom-example.component.ts?raw'),
    HTML: import('./examples/custom/none-content-custom-example.component.html?raw'),
  };
}
