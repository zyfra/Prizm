import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ZuiInputPosition, ZuiInputSize, ZuiInputStatus } from '@digital-plant/zui-components';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { default as d } from '!!raw-loader!./examples/input-phone-example/input-phone-example.component.less';

@Component({
  selector: 'zui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  public label = 'Заголовок';

  public inputPosition: ZuiInputPosition = 'left';
  public inputPositions: ZuiInputPosition[] = ['left', 'center'];
  public outer: false;

  public size: ZuiInputSize = 'l';
  public sizesOuter: ZuiInputSize[] = ['l', 'm', 's'];
  public sizesInner: ZuiInputSize[] = ['l', 'm'];

  public status: ZuiInputStatus = 'default';
  public statuses: ZuiInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public readonly zyfraInputBasicExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/input-basic-example/input-basic-example.component.ts'),
    HTML: import('!!raw-loader!./examples/input-basic-example/input-basic-example.component.html'),
  };

  public readonly zyfraInputLabelPositionExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-label-position-example/input-label-position-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/input-label-position-example/input-label-position-example.component.html'
    ),
  };

  public readonly zyfraInputIconButtonsExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-icon-buttons-example/input-icon-buttons-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/input-icon-buttons-example/input-icon-buttons-example.component.html'
    ),
    LESS: import(
      '!!raw-loader!./examples/input-icon-buttons-example/input-icon-buttons-example.component.less'
    ),
  };

  public readonly zyfraInputSizesExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/input-sizes-example/input-sizes-example.component.ts'),
    HTML: import('!!raw-loader!./examples/input-sizes-example/input-sizes-example.component.html'),
  };

  public readonly zyfraInputDisabledExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/input-disabled-example/input-disabled-example.component.ts'),
    HTML: import('!!raw-loader!./examples/input-disabled-example/input-disabled-example.component.html'),
  };

  public readonly zyfraInputStatusesExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/input-statuses-example/input-statuses-example.component.ts'),
    HTML: import('!!raw-loader!./examples/input-statuses-example/input-statuses-example.component.html'),
  };

  public readonly zyfraInputSubtextExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/input-subtext-example/input-subtext-example.component.ts'),
    HTML: import('!!raw-loader!./examples/input-subtext-example/input-subtext-example.component.html'),
  };

  public readonly zyfraInputValidationExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-validation-example/input-validation-example.component.ts'
    ),
    HTML: import('!!raw-loader!./examples/input-validation-example/input-validation-example.component.html'),
  };

  public readonly zyfraInputFormControlExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-form-control-example/input-form-control-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/input-form-control-example/input-form-control-example.component.html'
    ),
  };

  public readonly zyfraInputValidationCustomExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-validation-custom-example/input-validation-custom-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/input-validation-custom-example/input-validation-custom-example.component.html'
    ),
    Service: import(
      '!!raw-loader!./examples/input-validation-custom-example/input-validation-custom-texts.service.ts'
    ),
  };

  public readonly zyfraInputSearchExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/input-search-example/input-search-example.component.ts'),
    HTML: import('!!raw-loader!./examples/input-search-example/input-search-example.component.html'),
  };

  public readonly exampleModule: RawLoaderContent = import('!!raw-loader!./examples/import-module.md');
}

