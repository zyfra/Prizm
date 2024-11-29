import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmTime } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-time-picker-example',
  templateUrl: './time-picker-example.component.html',
  styleUrls: ['./time-picker-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmTimePickerExampleComponent {
  public timeModeVariants: ReadonlyArray<'HH:MM' | 'HH:MM:SS'> = ['HH:MM', 'HH:MM:SS'];
  public timeMode = this.timeModeVariants[1];

  public minMaxVariants: ReadonlyArray<PrizmTime | null> = [
    new PrizmTime(1, 2, 0),
    new PrizmTime(22, 12, 17),
    new PrizmTime(0, 20, 0),
    new PrizmTime(3, 0, 0),
    new PrizmTime(6, 0, 0),
    new PrizmTime(0, 10, 0),
    new PrizmTime(0, 20, 0),
    new PrizmTime(0, 0, 45),
    new PrizmTime(0, 0, 55),
    null,
  ];

  public minTime = this.minMaxVariants[9];
  public maxTime = this.minMaxVariants[9];

  public timeVariants: ReadonlyArray<PrizmTime | null> = [
    new PrizmTime(2, 5, 0),
    new PrizmTime(21, 52, 15),
    new PrizmTime(0, 21, 42),
    null,
  ];

  public time = this.timeVariants[0];

  public readonly exampleBasicTimePicker: TuiDocExample = {
    TypeScript: import('./examples/time-picker-basic-example/time-picker-basic-example.component?raw'),
    HTML: import('./examples/time-picker-basic-example/time-picker-basic-example.component.html?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
