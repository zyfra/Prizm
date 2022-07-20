import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ZuiInputPosition, ZuiInputSize, ZuiInputStatus } from '@digital-plant/zui-components';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'zui-input-number-example',
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

  public inputPosition: ZuiInputPosition = 'left';
  public inputPositions: ZuiInputPosition[] = ['left', 'center'];
  public outer: false;

  public size: ZuiInputSize = 'l';
  public sizesOuter: ZuiInputSize[] = ['l', 'm', 's'];
  public sizesInner: ZuiInputSize[] = ['l', 'm'];

  public disabled = false;

  public status: ZuiInputStatus = 'default';
  public statuses: ZuiInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public required = false;

  public readonly zuiInputNumberBasic: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-number-basic-example/input-number-basic-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/input-number-basic-example/input-number-basic-example.component.html'
    ),
  };

  public readonly zuiInputNumberCounter: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-number-counter-example/input-number-counter-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/input-number-counter-example/input-number-counter-example.component.html'
    ),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}

