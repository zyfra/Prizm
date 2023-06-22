import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { PrizmInputPosition, PrizmInputSize, PrizmInputStatus } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-input-number-example',
  templateUrl: './input-number-example.component.html',
  styleUrls: ['./input-number-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberExampleComponent {
  value = 1;
  public requiredInputControl = new UntypedFormControl('', Validators.required);
  public min = 0;
  public max = 10;
  public step = 2;

  public label = 'Заголовок';
  public placeholder = '';

  public inputPosition: PrizmInputPosition = 'left';
  public inputPositions: PrizmInputPosition[] = ['left', 'center'];
  public outer: false;

  public size: PrizmInputSize = 'l';
  public sizesOuter: PrizmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PrizmInputSize[] = ['l', 'm'];

  public disabled = false;

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public required = false;

  public readonly prizmInputNumberBasic: TuiDocExample = {
    TypeScript: import('./examples/input-number-basic-example/input-number-basic-example.component.ts?raw'),
    HTML: import('./examples/input-number-basic-example/input-number-basic-example.component.html?raw'),
  };

  public readonly prizmInputNumberCounter: TuiDocExample = {
    TypeScript: import(
      './examples/input-number-counter-example/input-number-counter-example.component.ts?raw'
    ),
    HTML: import('./examples/input-number-counter-example/input-number-counter-example.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
