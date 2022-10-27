import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { ZuiDay, ZuiInputSize, ZuiTime, ZuiTimeMode } from '@digital-plant/zui-components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-input-date-example',
  templateUrl: './input-date-time.component.html',
  styleUrls: ['./input-date.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDateTimeTimeComponent {
  public readonly valueControl = new FormControl([
    new ZuiDay(2017, 2, 15),
    new ZuiTime(12, 30, 25, 500)
  ]);
  public label = 'Абсолютное';
  public timeStrict = false;
  public placeholder = 'Выберите дату и время';
  public sizeVariants: ReadonlyArray<ZuiInputSize> = [
    'l',
    'm',
    's'
  ]
  public size: ZuiInputSize = 'm';
  public outer = false;

  public timeModeVariants: ReadonlyArray<ZuiTimeMode> = [
    'HH:MM',
    'HH:MM:SS',
    'HH:MM:SS.MSS'
  ];
  public timeMode: ZuiTimeMode = `HH:MM`;

  public readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/input-date-time-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/input-date-time-base-example.component.html'),
  };

  public readonly exampleNative: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/native-date/input-native-date-time-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/native-date/input-native-date-time-base-example.component.html'),
  };

  public readonly exampleWithSeconds: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-seconds/input-date-time-with-seconds-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-seconds/input-date-time-with-seconds-example.component.html'),
  };
}
