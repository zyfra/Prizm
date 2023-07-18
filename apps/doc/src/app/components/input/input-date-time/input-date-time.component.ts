import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmDay, PrizmInputSize, PrizmTime, PrizmTimeMode } from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-date-example',
  templateUrl: './input-date-time.component.html',
  styleUrls: ['./input-date.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateTimeTimeComponent {
  public readOnly = false;
  val: [PrizmDay, PrizmTime];
  public pseudoInvalid = false;
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
  public testIdPostfix: string;

  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];

  public timeModeVariants: ReadonlyArray<PrizmTimeMode> = ['HH:MM', 'HH:MM:SS', 'HH:MM:SS.MSS'];
  public timeMode: PrizmTimeMode = `HH:MM`;

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-date-time-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-date-time-base-example.component.html?raw'),
  };

  public readonly exampleNative: TuiDocExample = {
    TypeScript: import('./examples/native-date/input-native-date-time-base-example.component.ts?raw'),
    HTML: import('./examples/native-date/input-native-date-time-base-example.component.html?raw'),
  };

  public readonly exampleWithSeconds: TuiDocExample = {
    TypeScript: import('./examples/with-seconds/input-date-time-with-seconds-example.component.ts?raw'),
    HTML: import('./examples/with-seconds/input-date-time-with-seconds-example.component.html?raw'),
  };

  public readonly exampleWithRequired: TuiDocExample = {
    TypeScript: import('./examples/required/input-date-time-required-example.component.ts?raw'),
    HTML: import('./examples/required/input-date-time-required-example.component.html?raw'),
  };
}
