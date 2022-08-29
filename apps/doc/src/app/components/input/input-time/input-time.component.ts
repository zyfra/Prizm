import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  ZuiContextWithImplicit,
  ZuiDay, ZuiInputSize,
  ZuiSizeL,
  ZuiSizeM,
  ZuiTime, ZuiTimeMode,
} from '@digital-plant/zui-components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-input-date-example',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTimeTimeComponent {
  public readonly valueControl = new FormControl(
    new ZuiTime(12, 30, 25, 500)
  );

  public label = 'Абсолютное время';
  public placeholder = 'Выберите время';
  public sizeVariants: ReadonlyArray<ZuiInputSize> = [
    'l',
    'm',
    's'
  ]
  public size: ZuiInputSize = 'm';
  public strict = false;

  public timeModeVariants: ReadonlyArray<ZuiTimeMode> = [
    'HH:MM',
    'HH:MM:SS',
    'HH:MM:SS.MSS'
  ];
  public timeMode: ZuiTimeMode = `HH:MM`;
  public outer = false;


  public readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/input-time-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/input-time-base-example.component.html'),
  };

  public readonly exampleWithSeconds: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-seconds/input-time-with-seconds-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-seconds/input-time-with-seconds-example.component.html'),
  };

  public readonly exampleWithMicroSeconds: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-ms/input-time-with-ms-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-ms/input-time-with-ms-example.component.html'),
  };

  public readonly exampleWithPreset: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-preset/input-time-with-preset-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-preset/input-time-with-preset-example.component.html'),
  };
}
