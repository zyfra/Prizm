import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PrizmDay,
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
  PrizmTime,
  PrizmTimeMode,
} from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-date-example',
  templateUrl: './input-layout-date-time.component.html',
  styleUrls: ['./input-layout-date-time.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLayoutDateTimeTimeComponent {
  public readOnly = false;
  public border = false;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  readonly layoutKey = 'PrizmInputLayoutComponent';
  readonly controlKey = 'PrizmInputLayoutDateTimeComponent';
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public focusable = true;
  public pseudoState = '';
  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public focusVisibleChange = false;

  public readonly valueControl = new UntypedFormControl([
    new PrizmDay(2017, 2, 15),
    new PrizmTime(12, 30, 25, 500),
  ]);
  public label = 'Абсолютное';
  public timeStrict = false;
  public placeholder = 'Выберите дату и время';
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public outer = false;

  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];

  public timeModeVariants: ReadonlyArray<PrizmTimeMode> = ['HH:MM', 'HH:MM:SS', 'HH:MM:SS.MSS'];
  public timeMode: PrizmTimeMode = `HH:MM`;
  public testIdPostfix!: string;

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-layout-date-time-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-layout-date-time-base-example.component.html?raw'),
  };
  public readonly exampleBaseTransformer: TuiDocExample = {
    TypeScript: import(
      './examples/base-transformer/input-layout-date-time-base-transformer-example.component.ts?raw'
    ),
    HTML: import(
      './examples/base-transformer/input-layout-date-time-base-transformer-example.component.html?raw'
    ),
  };
  public readonly exampleMinMax: TuiDocExample = {
    TypeScript: import('./examples/min-max/input-layout-date-time-min-max-example.component.ts?raw'),
    HTML: import('./examples/min-max/input-layout-date-time-min-max-example.component.html?raw'),
  };

  public readonly exampleMinMaxTime: TuiDocExample = {
    TypeScript: import(
      './examples/min-max-time/input-layout-date-time-min-max-time-example.component.ts?raw'
    ),
    HTML: import('./examples/min-max-time/input-layout-date-time-min-max-time-example.component.html?raw'),
  };

  public readonly exampleNative: TuiDocExample = {
    TypeScript: import('./examples/native-date/input-layout-native-date-time-base-example.component.ts?raw'),
    HTML: import('./examples/native-date/input-layout-native-date-time-base-example.component.html?raw'),
  };

  public readonly exampleWithSeconds: TuiDocExample = {
    TypeScript: import(
      './examples/with-seconds/input-layout-date-time-with-seconds-example.component.ts?raw'
    ),
    HTML: import('./examples/with-seconds/input-layout-date-time-with-seconds-example.component.html?raw'),
  };

  public readonly exampleWithRequired: TuiDocExample = {
    TypeScript: import('./examples/required/input-layout-date-time-required-example.component.ts?raw'),
    HTML: import('./examples/required/input-layout-date-time-required-example.component.html?raw'),
  };
}
