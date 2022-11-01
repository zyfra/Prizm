import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PzmInputPosition, PzmInputSize, PzmInputStatus } from '@digital-plant/zui-components';
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

  public inputPosition: PzmInputPosition = 'left';
  public inputPositions: PzmInputPosition[] = ['left', 'center'];
  public outer: false;

  public size: PzmInputSize = 'l';
  public sizesOuter: PzmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PzmInputSize[] = ['l', 'm'];

  public disabled = false;

  public status: PzmInputStatus = 'default';
  public statuses: PzmInputStatus[] = ['default', 'success', 'warning', 'danger'];

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

