import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PrizmContextWithImplicit,
  PrizmDay,
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
  PrizmSizeL,
  PrizmSizeM,
  PrizmTime,
  PrizmTimeMode,
} from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-date-example',
  templateUrl: './input-layout-time.component.html',
  styleUrls: ['./input-layout-time.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLayoutTimeTimeComponent {
  readonly layoutKey = 'PrizmInputLayoutComponent';
  readonly componentKey = 'PrizmInputLayoutTimeComponent';

  public border = false;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public readOnly = false;
  val: PrizmTime;

  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];

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

  public readonly valueControl = new UntypedFormControl(new PrizmTime(12, 30));

  public label = 'Абсолютное время';
  public placeholder = 'Выберите время';
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public strict = false;

  public timeModeVariants: ReadonlyArray<PrizmTimeMode> = ['HH:MM', 'HH:MM:SS', 'HH:MM:SS.MSS'];
  public timeMode: PrizmTimeMode = `HH:MM`;
  public testIdPostfix: string;
  public outer = false;

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-layout-time-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-layout-time-base-example.component.html?raw'),
  };

  public readonly exampleWithSeconds: TuiDocExample = {
    TypeScript: import('./examples/with-seconds/input-layout-time-with-seconds-example.component.ts?raw'),
    HTML: import('./examples/with-seconds/input-layout-time-with-seconds-example.component.html?raw'),
  };

  public readonly exampleWithMicroSeconds: TuiDocExample = {
    TypeScript: import('./examples/with-ms/input-layout-time-with-ms-example.component.ts?raw'),
    HTML: import('./examples/with-ms/input-layout-time-with-ms-example.component.html?raw'),
  };

  public readonly exampleWithPreset: TuiDocExample = {
    TypeScript: import('./examples/with-preset/input-layout-time-with-preset-example.component.ts?raw'),
    HTML: import('./examples/with-preset/input-layout-time-with-preset-example.component.html?raw'),
  };
}
