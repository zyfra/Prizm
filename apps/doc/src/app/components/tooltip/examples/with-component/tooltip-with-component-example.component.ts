import {Component} from '@angular/core';
import {PolymorpheusComponent, ZuiOverlayOutsidePlacement} from "@digital-plant/zui-components";
import {ZuiTooltipSomeComponent} from "./some.component";

@Component({
  selector: 'zui-tooltip-with-component-example',
  templateUrl: './tooltip-with-component-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiTooltipWithComponentExampleComponent {
  readonly component = new PolymorpheusComponent(ZuiTooltipSomeComponent);
  readonly direction = ZuiOverlayOutsidePlacement.TOP_RIGHT;
}
