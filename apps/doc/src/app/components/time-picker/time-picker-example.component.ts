import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-time-picker-example',
  templateUrl: './time-picker-example.component.html',
  styleUrls: ['./time-picker-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmTimePickerExampleComponent {
  public readonly exampleBasicTimePicker: TuiDocExample = {
    TypeScript: import('./examples/time-picker-basic-example/time-picker-basic-example.component?raw'),
    HTML: import('./examples/time-picker-basic-example/time-picker-basic-example.component.html?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
