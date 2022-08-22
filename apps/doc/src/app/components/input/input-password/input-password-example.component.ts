import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ZuiInputSize, ZuiInputStatus } from '@digital-plant/zui-components';
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

  public size: ZuiInputSize = 'l';
  public sizesOuter: ZuiInputSize[] = ['l', 'm', 's'];
  public sizesInner: ZuiInputSize[] = ['l', 'm'];

  public disabled = false;

  public status: ZuiInputStatus = 'default';
  public statuses: ZuiInputStatus[] = ['default', 'success', 'warning', 'danger'];

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

