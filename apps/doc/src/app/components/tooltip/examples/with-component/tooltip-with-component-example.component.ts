import { Component } from '@angular/core';
import { PolymorphComponent, PrizmOverlayOutsidePlacement } from '@prizm-ui/components';
import { PrizmTooltipSomeComponent } from './some.component';

@Component({
  selector: 'prizm-tooltip-with-component-example',
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
