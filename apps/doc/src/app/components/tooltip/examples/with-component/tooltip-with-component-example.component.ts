import { Component } from '@angular/core';
import { PolymorphComponent, PrizmOverlayOutsidePlacement } from '@digital-plant/zui-components';
import { PrizmTooltipSomeComponent } from './some.component';

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
export class PrizmTooltipWithComponentExampleComponent {
  readonly component = new PolymorphComponent(PrizmTooltipSomeComponent);
  readonly direction = PrizmOverlayOutsidePlacement.TOP_RIGHT;
}
