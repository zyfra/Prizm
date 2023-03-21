import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { FormControl } from '@angular/forms';
import { PrizmInputSize } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-example',
  templateUrl: './input-date-relative.component.html',
  styleUrls: ['./input-date-relative.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateRelativeRelativeComponent {
  public canOpen = true;
  public readonly valueControl = new FormControl();
  public label = 'Относительное';
  public placeholder = 'Выберите дату';
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public outer = false;
  public disabled = false;
  public showClear = false;

  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-date-relative-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-date-relative-base-example.component.html?raw'),
  };
}
