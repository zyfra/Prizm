import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmInputPosition, PrizmInputSize, PrizmInputStatus } from '@digital-plant/zui-components';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'pzm-input-number-example',
  templateUrl: './input-number-example.component.html',
  styleUrls: ['./input-number-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberExampleComponent {
  value = 1;
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

  public readonly pzmInputNumberBasic: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-number-basic-example/input-number-basic-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/input-number-basic-example/input-number-basic-example.component.html'
    ),
  };

  public readonly pzmInputNumberCounter: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-number-counter-example/input-number-counter-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/input-number-counter-example/input-number-counter-example.component.html'
    ),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}

