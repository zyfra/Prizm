import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PolymorphComponent, PzmOverlayOutsidePlacement } from '@digital-plant/zui-components';
import { PzmHintSomeComponent } from './some.component';

@Component({
  selector: 'pzm-hint-with-component-example',
  templateUrl: './hint-with-component-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PzmHintWithComponentExampleComponent {
  readonly component = new PolymorphComponent(PzmHintSomeComponent);
  readonly direction = PzmOverlayOutsidePlacement.BOTTOM;
}
