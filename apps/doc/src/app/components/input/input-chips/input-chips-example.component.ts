import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PrizmChipsComponent, PrizmInputTextComponent } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'prizm-input-chips-example',
  templateUrl: './input-chips-example.component.html',
  styleUrls: ['./input-chips-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputChipsExampleComponent {
  public chips: string[] = ['Чипс 1', 'Чипс 2', 'Чипс 3'];
  public deletable = true;
  public disabled = false;
  public singleLine = false;

  @ViewChild(PrizmInputTextComponent, { static: false }) input: PrizmInputTextComponent;
  @ViewChild(PrizmChipsComponent, { static: false }) chipsComponent: PrizmChipsComponent;

  public readonly prizmInputChipsExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-chips-basic-example/input-chips-basic-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/input-chips-basic-example/input-chips-basic-example.component.html'
    ),
    LESS: import(
      './examples/input-chips-basic-example/input-chips-basic-example.component.less?raw'
    ),
  };

  public readonly prizmInputChipsOuterExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/input-chips-outer-example/input-chips-outer-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/input-chips-outer-example/input-chips-outer-example.component.html'
    ),
    LESS: import(
      './examples/input-chips-outer-example/input-chips-outer-example.component.less?raw'
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

