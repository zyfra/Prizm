import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PzmInputSize, PzmInputStatus } from '@digital-plant/zui-components';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'zui-input-password-example',
  templateUrl: './input-password-example.component.html',
  styleUrls: ['./input-password-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPasswordExampleComponent {
  public label = 'Заголовок';
  public placeholder = '';

  public outer: false;

  public size: PzmInputSize = 'l';
  public sizesOuter: PzmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PzmInputSize[] = ['l', 'm'];

  public disabled = false;

  public status: PzmInputStatus = 'default';
  public statuses: PzmInputStatus[] = ['default', 'success', 'warning', 'danger'];

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

