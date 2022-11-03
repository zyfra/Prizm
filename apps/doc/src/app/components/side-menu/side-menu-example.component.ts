import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'pzm-side-menu-example',
  templateUrl: './side-menu-example.component.html',
  styleUrls: ['./side-menu-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuExampleComponent {
  public readonly sideMenuBasicExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/side-menu-example-basic/side-menu-example-basic.component'),
    HTML: import('!!raw-loader!./examples/side-menu-example-basic/side-menu-example-basic.component.html'),
    LESS: import('./examples/side-menu-example-basic/side-menu-example-basic.component.less?raw'),
  };
}
