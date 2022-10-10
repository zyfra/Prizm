import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ZuiChipsComponent, ZuiInputTextComponent } from '@digital-plant/zui-components';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'zui-input-chips-example',
  templateUrl: './input-chips-example.component.html',
  styleUrls: ['./input-chips-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputChipsExampleComponent {
  public chips: string[] = ['Чипс 1', 'Чипс 2', 'Чипс 3'];
  public deletable = true;
  public disabled = false;

  @ViewChild(ZuiInputTextComponent, { static: false }) input: ZuiInputTextComponent;
  @ViewChild(ZuiChipsComponent, { static: false }) chipsComponent: ZuiChipsComponent;

  public readonly zuiInputChipsExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-chips-basic-example/input-chips-basic-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/input-chips-basic-example/input-chips-basic-example.component.html'
    ),
  };

  public readonly zuiInputChipsOuterExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-chips-outer-example/input-chips-outer-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/input-chips-outer-example/input-chips-outer-example.component.html'
    ),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  public onEnter(value: string): void {
    console.log('enter');
    if (value === '') return;
    this.chipsComponent.addChips(value);
    this.input.value = '';
  }
}

