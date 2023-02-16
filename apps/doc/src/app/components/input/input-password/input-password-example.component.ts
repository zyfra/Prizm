import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmInputSize, PrizmInputStatus } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-input-password-example',
  templateUrl: './input-password-example.component.html',
  styleUrls: ['./input-password-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPasswordExampleComponent {
  public label = 'Заголовок';
  public control = new FormControl();
  public placeholder = '';
  public value = '';

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
      './examples/input-password-basic-example/input-password-basic-example.component.ts?raw'
    ),
    HTML: import('./examples/input-password-basic-example/input-password-basic-example.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
