import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PzmInputSize, PzmInputStatus } from '@digital-plant/zui-components';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'zui-input-mask-example',
  templateUrl: './input-mask-example.component.html',
  styleUrls: ['./input-mask-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputMaskExampleComponent {
  public mask = '99:SS';
  public value = '';

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

  public readonly zyfraInputPhoneExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/input-phone-example/input-phone-example.component.ts'),
    HTML: import('!!raw-loader!./examples/input-phone-example/input-phone-example.component.html'),
  };

  public readonly zyfraInputMaskBasicExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-mask-basic-example/input-mask-basic-example.component.ts'
    ),
    HTML: import('!!raw-loader!./examples/input-mask-basic-example/input-mask-basic-example.component.html'),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}

