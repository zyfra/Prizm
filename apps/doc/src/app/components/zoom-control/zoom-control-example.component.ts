import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TuiDocExample } from '@prizm/doc-base';

@Component({
  selector: 'prizm-zoom-control-example',
  templateUrl: './zoom-control-example.component.html',
  styleUrls: ['./zoom-control-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomControlExampleComponent {
  public readonly zoomControlBasicExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/zoom-control-example-basic/zoom-control-example-basic.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/zoom-control-example-basic/zoom-control-example-basic.component.html'
    ),
    LESS: import('./examples/zoom-control-example-basic/zoom-control-example-basic.component.less?raw'),
  };
}
