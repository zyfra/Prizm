import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { PzmDay, PzmInputSize } from '@digital-plant/zui-components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-input-date-example',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDateComponent {
  public readonly control = new FormControl(new PzmDay(2017, 0, 15));

  public label = 'Абсолютное';
  public placeholder = 'Выберите дату';
  public sizeVariants: ReadonlyArray<PzmInputSize> = [
    'l',
    'm',
    's'
  ]
  public size: PzmInputSize = 'm';
  public outer = false;


  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/input-date-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/input-date-base-example.component.html'),
  };

  readonly exampleNative: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/native-date/input-native-date-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/native-date/input-native-date-base-example.component.html'),
  };
}
