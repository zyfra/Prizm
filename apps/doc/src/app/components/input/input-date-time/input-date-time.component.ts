import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';
import { PrizmDay, PrizmInputSize, PrizmTime, PrizmTimeMode } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-date-example',
  templateUrl: './input-date-time.component.html',
  styleUrls: ['./input-date.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateTimeTimeComponent {
  public readonly valueControl = new FormControl([new PrizmDay(2017, 2, 15), new PrizmTime(12, 30, 25, 500)]);
  public label = 'Абсолютное';
  public timeStrict = false;
  public placeholder = 'Выберите дату и время';
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public outer = false;

  public timeModeVariants: ReadonlyArray<PrizmTimeMode> = ['HH:MM', 'HH:MM:SS', 'HH:MM:SS.MSS'];
  public timeMode: PrizmTimeMode = `HH:MM`;

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/input-date-time-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/input-date-time-base-example.component.html'),
  };

  public readonly exampleNative: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/native-date/input-native-date-time-base-example.component.ts'
    ),
    HTML: import('!!raw-loader!./examples/native-date/input-native-date-time-base-example.component.html'),
  };

  public readonly exampleWithSeconds: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/with-seconds/input-date-time-with-seconds-example.component.ts'
    ),
    HTML: import('!!raw-loader!./examples/with-seconds/input-date-time-with-seconds-example.component.html'),
  };
}
