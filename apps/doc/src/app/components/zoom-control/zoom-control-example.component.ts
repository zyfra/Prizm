import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-zoom-control-example',
  templateUrl: './zoom-control-example.component.html',
  styleUrls: ['./zoom-control-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomControlExampleComponent {
  public readonly zoomControlBasicExample: TuiDocExample = {
    TypeScript: import('./examples/zoom-control-example-basic/zoom-control-example-basic.component?raw'),
    HTML: import('./examples/zoom-control-example-basic/zoom-control-example-basic.component.html?raw'),
    LESS: import('./examples/zoom-control-example-basic/zoom-control-example-basic.component.less?raw'),
  };
}
