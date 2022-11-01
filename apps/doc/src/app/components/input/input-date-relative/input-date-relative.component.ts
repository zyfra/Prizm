import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { FormControl } from '@angular/forms';
import { PzmInputSize } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-date-example',
  templateUrl: './input-date-relative.component.html',
  styleUrls: ['./input-date-relative.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDateRelativeRelativeComponent {
  public readonly valueControl = new FormControl();
  public label = 'Относительное';
  public placeholder = 'Выберите дату';
  public sizeVariants: ReadonlyArray<PzmInputSize> = [
    'l',
    'm',
    's'
  ]
  public size: PzmInputSize = 'm';
  public outer = false;
  public disabled = false;
  public showClear = false;

  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/input-date-relative-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/input-date-relative-base-example.component.html'),
  };
}
