import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmInputSize, PrizmInputStatus } from '@digital-plant/zui-components';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'pzm-textarea-example',
  templateUrl: './textarea-example.component.html',
  styleUrls: ['./textarea-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaExampleComponent {
  public label = 'Заголовок';
  public placeholder = '';

  public outer: false;

  public size: PrizmInputSize = 'l';
  public sizesOuter: PrizmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PrizmInputSize[] = ['l', 'm'];

  public disabled = false;

  height = null;
  width = '20rem';

  public required = false;

  public readonly zyfraTextareaBasicExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/textarea-basic-example/textarea-basic-example.component.ts'),
    HTML: import('!!raw-loader!./examples/textarea-basic-example/textarea-basic-example.component.html'),
  };

  public readonly zyfraTextareaAutosizeExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/textarea-autosize-example/textarea-autosize-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/textarea-autosize-example/textarea-autosize-example.component.html'
    ),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}

