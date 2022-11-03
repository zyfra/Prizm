import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PolymorphComponent, PrizmOverlayOutsidePlacement } from '@digital-plant/zui-components';
import { PrizmHintSomeComponent } from './some.component';

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
export class PrizmHintWithComponentExampleComponent {
  readonly component = new PolymorphComponent(PrizmHintSomeComponent);
  readonly direction = PrizmOverlayOutsidePlacement.BOTTOM;
}
