import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import {
  PRIZM_HINT_DEFAULT_OPTIONS,
  PrizmHintOptions,
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
  PrizmOverlayOutsidePlacement,
} from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmDecimal } from '@prizm-ui/core';

@Component({
  selector: 'prizm-input-number-example',
  templateUrl: './input-number-example.component.html',
  styleUrls: ['./input-number-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberExampleComponent {
  readonly layoutKey = 'PrizmInputLayoutComponent';
  public readOnly = false;
  public border = true;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  outer = false;
  get sizeVariants(): ReadonlyArray<PrizmInputSize> {
    return this.outer ? ['s', 'm', 'l'] : ['m', 'l'];
  }
  size = this.sizeVariants[0];
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];
  forceClear = this.forceClearVariants[0];

  public hideClearButtonHint: boolean | null = null;
  public hideHintVariants: ReadonlyArray<boolean | null> = [null, false, true];

  emptyContent = 'Ничего не найдено';
  nullContent = 'Не выбрано';
  minDropdownHeight = 0;
  maxDropdownHeight = 342;
  title = '';

  value = 1;
  public requiredInputControl = new UntypedFormControl('', Validators.required);
  public min = 0;
  public testIdPostfix!: string;
  public max = 10;
  public step = 2;
  public prizmHintCanShow = true;
  public prizmHintDirection: PrizmHintOptions['direction'] = PRIZM_HINT_DEFAULT_OPTIONS.direction;
  public readonly prizmHintDirectionVariants: ReadonlyArray<PrizmHintOptions['direction']> = Object.values(
    PrizmOverlayOutsidePlacement
  );

  public label = 'Заголовок';
  public placeholder = '';

  public inputPositions: PrizmInputPosition[] = ['left', 'center'];
  public sizesOuter: PrizmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PrizmInputSize[] = ['l', 'm'];

  public disabled = false;

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public required = false;
  public precision = 2;
  public readonly decimalVariants: ReadonlyArray<PrizmDecimal> = ['not-zero', 'always', 'never'];
  public decimal: PrizmDecimal = 'not-zero';

  public readonly prizmInputNumberBasic: TuiDocExample = {
    TypeScript: import('./examples/input-number-basic-example/input-number-basic-example.component.ts?raw'),
    HTML: import('./examples/input-number-basic-example/input-number-basic-example.component.html?raw'),
  };
  public readonly prizmInputNumberDisabled: TuiDocExample = {
    TypeScript: import('./examples/disabled-example/input-number-disabled-example.component.ts?raw'),
    HTML: import('./examples/disabled-example/input-number-disabled-example.component.html?raw'),
  };

  public readonly prizmInputNumberCounter: TuiDocExample = {
    TypeScript: import(
      './examples/input-number-counter-example/input-number-counter-example.component.ts?raw'
    ),
    HTML: import('./examples/input-number-counter-example/input-number-counter-example.component.html?raw'),
  };
  public readonly prizmInputNumberCounterFloat: TuiDocExample = {
    TypeScript: import(
      './examples/input-number-counter-float-example/input-number-counter-float-example.component.ts?raw'
    ),
    HTML: import(
      './examples/input-number-counter-float-example/input-number-counter-float-example.component.html?raw'
    ),
  };
  public readonly prizmInputNumberInvalid: TuiDocExample = {
    TypeScript: import(
      './examples/input-number-invalid-example/input-number-invalid-example.component.ts?raw'
    ),
    HTML: import('./examples/input-number-invalid-example/input-number-invalid-example.component.html?raw'),
  };

  public readonly prizmInputNumberMinMax: TuiDocExample = {
    TypeScript: import(
      './examples/input-number-min-max-example/input-number-min-max-example.component.ts?raw'
    ),
    HTML: import('./examples/input-number-min-max-example/input-number-min-max-example.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
