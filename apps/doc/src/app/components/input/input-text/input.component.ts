import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PRIZM_HINT_DEFAULT_OPTIONS,
  PrizmHintOptions,
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
  PrizmOverlayOutsidePlacement,
} from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { default as d } from './examples/input-phone-example/input-phone-example.component.less?raw';

@Component({
  selector: 'prizm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  public disabled = false;
  public testIdPostfix!: string;
  public control = new UntypedFormControl();
  public required = false;
  public hidden = false;
  public label = 'Заголовок';

  value = 'some text';

  public border = false;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];
  public inputPositions: PrizmInputPosition[] = ['left', 'center'];
  public outer!: false;

  public size: PrizmInputSize = 'l';
  public sizesOuter: PrizmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PrizmInputSize[] = ['l', 'm'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];
  public forceClear = this.forceClearVariants[0];
  public readonly prizmHintDirectionVariants: ReadonlyArray<PrizmHintOptions['direction']> = Object.values(
    PrizmOverlayOutsidePlacement
  );

  public prizmHintCanShow = true;
  public prizmHintDirection: PrizmHintOptions['direction'] = PRIZM_HINT_DEFAULT_OPTIONS.direction;

  public readonly zyfraInputBasicExample: TuiDocExample = {
    TypeScript: import('./examples/input-basic-example/input-basic-example.component.ts?raw'),
    HTML: import('./examples/input-basic-example/input-basic-example.component.html?raw'),
  };
  public readonly inputCustomClearButton: TuiDocExample = {
    TypeScript: import(
      './examples/input-custom-clear-button-example/input-custom-clear-button-example.component.ts?raw'
    ),
    HTML: import(
      './examples/input-custom-clear-button-example/input-custom-clear-button-example.component.html?raw'
    ),
  };
  public readonly inputEmptyLabelExample: TuiDocExample = {
    TypeScript: import('./examples/input-empty-label-example/input-empty-label-example.component.ts?raw'),
    HTML: import('./examples/input-empty-label-example/input-empty-label-example.component.html?raw'),
  };

  public readonly zyfraInputLabelPositionExample: TuiDocExample = {
    TypeScript: import(
      './examples/input-label-position-example/input-label-position-example.component.ts?raw'
    ),
    HTML: import('./examples/input-label-position-example/input-label-position-example.component.html?raw'),
  };

  public readonly zyfraInputIconButtonsExample: TuiDocExample = {
    TypeScript: import('./examples/input-icon-buttons-example/input-icon-buttons-example.component.ts?raw'),
    HTML: import('./examples/input-icon-buttons-example/input-icon-buttons-example.component.html?raw'),
    LESS: import('./examples/input-icon-buttons-example/input-icon-buttons-example.component.less?raw'),
  };

  public readonly zyfraInputSizesExample: TuiDocExample = {
    TypeScript: import('./examples/input-sizes-example/input-sizes-example.component.ts?raw'),
    HTML: import('./examples/input-sizes-example/input-sizes-example.component.html?raw'),
  };

  public readonly zyfraInputDisabledExample: TuiDocExample = {
    TypeScript: import('./examples/input-disabled-example/input-disabled-example.component.ts?raw'),
    HTML: import('./examples/input-disabled-example/input-disabled-example.component.html?raw'),
  };

  public readonly zyfraInputStatusesExample: TuiDocExample = {
    TypeScript: import('./examples/input-statuses-example/input-statuses-example.component.ts?raw'),
    HTML: import('./examples/input-statuses-example/input-statuses-example.component.html?raw'),
  };

  public readonly zyfraInputSubtextExample: TuiDocExample = {
    TypeScript: import('./examples/input-subtext-example/input-subtext-example.component.ts?raw'),
    HTML: import('./examples/input-subtext-example/input-subtext-example.component.html?raw'),
  };

  public readonly zyfraInputValidationExample: TuiDocExample = {
    TypeScript: import('./examples/input-validation-example/input-validation-example.component.ts?raw'),
    HTML: import('./examples/input-validation-example/input-validation-example.component.html?raw'),
  };

  public readonly zyfraInputFormControlExample: TuiDocExample = {
    TypeScript: import('./examples/input-form-control-example/input-form-control-example.component.ts?raw'),
    HTML: import('./examples/input-form-control-example/input-form-control-example.component.html?raw'),
  };

  public readonly zyfraInputValidationCustomExample: TuiDocExample = {
    TypeScript: import(
      './examples/input-validation-custom-example/input-validation-custom-example.component.ts?raw'
    ),
    HTML: import(
      './examples/input-validation-custom-example/input-validation-custom-example.component.html?raw'
    ),
    Service: import(
      './examples/input-validation-custom-example/input-validation-custom-texts.service.ts?raw'
    ),
  };

  public readonly zyfraInputSearchExample: TuiDocExample = {
    TypeScript: import('./examples/input-search-example/input-search-example.component.ts?raw'),
    HTML: import('./examples/input-search-example/input-search-example.component.html?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/import-module.md?raw');
}
