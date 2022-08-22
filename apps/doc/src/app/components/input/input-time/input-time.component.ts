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
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTimeTimeComponent {
  public readonly valueControl = new FormControl(new ZuiTime(12, 30));
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
