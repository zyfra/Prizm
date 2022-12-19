import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmInputSize, PrizmInputStatus } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';

@Component({
  selector: 'prizm-input-password-example',
  templateUrl: './input-password-example.component.html',
  styleUrls: ['./input-password-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPasswordExampleComponent {
  public label = 'Заголовок';
  public placeholder = '';

  public outer: false;

  public size: PrizmInputSize = 'l';
  public sizesOuter: PrizmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PrizmInputSize[] = ['l', 'm'];

  public disabled = false;

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public required = false;

  public readonly zyfraInputPasswordBasicExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-password-basic-example/input-password-basic-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/input-password-basic-example/input-password-basic-example.component.html'
    ),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
