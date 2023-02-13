import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmInputSize, PrizmInputStatus } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-input-mask-example',
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

  public size: PrizmInputSize = 'l';
  public sizesOuter: PrizmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PrizmInputSize[] = ['l', 'm'];

  public disabled = false;

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public required = false;

  public readonly zyfraInputPhoneExample: TuiDocExample = {
    TypeScript: import('./examples/input-phone-example/input-phone-example.component.ts?raw'),
    HTML: import('./examples/input-phone-example/input-phone-example.component.html?raw'),
  };

  public readonly zyfraInputMaskBasicExample: TuiDocExample = {
    TypeScript: import('./examples/input-mask-basic-example/input-mask-basic-example.component.ts?raw'),
    HTML: import('./examples/input-mask-basic-example/input-mask-basic-example.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
