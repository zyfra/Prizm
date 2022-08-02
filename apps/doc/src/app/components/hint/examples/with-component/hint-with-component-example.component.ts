import { Component } from '@angular/core';
import { PolymorpheusComponent, ZuiOverlayOutsidePlacement } from '@digital-plant/zui-components';
import { ZuiHintSomeComponent } from './some.component';

@Component({
  selector: 'zui-hint-with-component-example',
  templateUrl: './hint-with-component-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiHintWithComponentExampleComponent {
  readonly component = new PolymorpheusComponent(ZuiHintSomeComponent);
  readonly direction = ZuiOverlayOutsidePlacement.BOTTOM;
}
