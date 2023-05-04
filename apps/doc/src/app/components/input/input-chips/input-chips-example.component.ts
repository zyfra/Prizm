import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PrizmChipsComponent,
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
  PrizmInputTextComponent,
  PrizmOverlayOutsidePlacement,
} from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-input-chips-example',
  templateUrl: './input-chips-example.component.html',
  styleUrls: ['./input-chips-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputChipsExampleComponent {
  public hintCanShow = true;
  public hintDirection = PrizmOverlayOutsidePlacement.RIGHT;
  public label = 'Заголовок';
  public hintText = 'Отдельный chips';

  public inputPosition: PrizmInputPosition = 'left';
  public inputPositions: PrizmInputPosition[] = ['left', 'center'];
  public outer: false;
  public readonly control = new UntypedFormControl([]);
  public readonly control2 = new UntypedFormControl([]);
  public size: PrizmInputSize = 'l';
  public sizesOuter: PrizmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PrizmInputSize[] = ['l', 'm'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];
  public forceClear = this.forceClearVariants[0];

  public chips: string[] = ['Чипс 1', 'Чипс 2', 'Чипс 3'];
  public deletable = true;
  public disabled = false;
  public singleLine = false;

  @ViewChild(PrizmInputTextComponent, { static: false }) input: PrizmInputTextComponent;
  @ViewChild(PrizmChipsComponent, { static: false }) chipsComponent: PrizmChipsComponent;

  public readonly prizmInputChipsExample: TuiDocExample = {
    TypeScript: import('./examples/input-chips-basic-example/input-chips-basic-example.component.ts?raw'),
    HTML: import('./examples/input-chips-basic-example/input-chips-basic-example.component.html?raw'),
    LESS: import('./examples/input-chips-basic-example/input-chips-basic-example.component.less?raw'),
  };

  public readonly prizmInputChipsOuterExample: TuiDocExample = {
    TypeScript: import('./examples/input-chips-outer-example/input-chips-outer-example.component.ts?raw'),
    HTML: import('./examples/input-chips-outer-example/input-chips-outer-example.component.html?raw'),
    LESS: import('./examples/input-chips-outer-example/input-chips-outer-example.component.less?raw'),
  };

  public readonly prizmInputChipsItemExample: TuiDocExample = {
    TypeScript: import('./examples/input-chips-item-example/input-chips-item-example.component.ts?raw'),
    HTML: import('./examples/input-chips-item-example/input-chips-item-example.component.html?raw'),
    LESS: import('./examples/input-chips-item-example/input-chips-item-example.component.less?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public onEnter(value: string): void {
    console.log('enter');
    if (value === '') return;
    this.chipsComponent.addChips(value);
    this.input.value = '';
  }
}
