import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PrizmContextWithImplicit,
  PrizmDay,
  PrizmInputSize,
  PrizmSizeL,
  PrizmSizeM,
  PrizmTime,
  PrizmTimeMode,
} from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-date-example',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTimeTimeComponent {
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

  public readonly valueControl = new UntypedFormControl(new PrizmTime(12, 30, 25, 500));

  public label = 'Абсолютное время';
  public placeholder = 'Выберите время';
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public strict = false;
  public testIdPostfix: string;

  public timeModeVariants: ReadonlyArray<PrizmTimeMode> = ['HH:MM', 'HH:MM:SS', 'HH:MM:SS.MSS'];
  public timeMode: PrizmTimeMode = `HH:MM`;
  public outer = false;

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-time-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-time-base-example.component.html?raw'),
  };

  public readonly exampleWithSeconds: TuiDocExample = {
    TypeScript: import('./examples/with-seconds/input-time-with-seconds-example.component.ts?raw'),
    HTML: import('./examples/with-seconds/input-time-with-seconds-example.component.html?raw'),
  };

  public readonly exampleWithMicroSeconds: TuiDocExample = {
    TypeScript: import('./examples/with-ms/input-time-with-ms-example.component.ts?raw'),
    HTML: import('./examples/with-ms/input-time-with-ms-example.component.html?raw'),
  };

  public readonly exampleWithPreset: TuiDocExample = {
    TypeScript: import('./examples/with-preset/input-time-with-preset-example.component.ts?raw'),
    HTML: import('./examples/with-preset/input-time-with-preset-example.component.html?raw'),
  };
}
