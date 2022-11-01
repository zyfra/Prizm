import { Component } from '@angular/core';
import { PolymorphComponent, PzmOverlayOutsidePlacement } from '@digital-plant/zui-components';
import { PzmTooltipSomeComponent } from './some.component';

@Component({
  selector: 'pzm-tooltip-with-component-example',
  templateUrl: './tooltip-with-component-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PzmTooltipWithComponentExampleComponent {
  readonly component = new PolymorphComponent(PzmTooltipSomeComponent);
  readonly direction = PzmOverlayOutsidePlacement.TOP_RIGHT;
}
