import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PolymorphComponent, PzmOverlayOutsidePlacement } from '@digital-plant/zui-components';
import { ZuiHintSomeComponent } from './some.component';

@Component({
  selector: 'zui-hint-with-component-example',
  templateUrl: './hint-with-component-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZuiHintWithComponentExampleComponent {
  readonly component = new PolymorphComponent(ZuiHintSomeComponent);
  readonly direction = PzmOverlayOutsidePlacement.BOTTOM;
}
