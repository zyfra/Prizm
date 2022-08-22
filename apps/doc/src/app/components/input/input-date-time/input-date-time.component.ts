import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  ZuiContextWithImplicit,
  ZuiDay,
  ZuiSizeL,
  ZuiSizeM,
  ZuiTime,
} from '@digital-plant/zui-components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-input-date-example',
  templateUrl: './input-date-time.component.html',
  styleUrls: ['./input-date.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDateTimeTimeComponent {
  public readonly valueControl = new FormControl([new ZuiDay(2017, 2, 15), new ZuiTime(12, 30)]);
  public readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/input-date-time-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/input-date-time-base-example.component.html'),
  };

  public readonly exampleWithSeconds: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-seconds/input-date-time-with-seconds-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-seconds/input-date-time-with-seconds-example.component.html'),
  };
}
