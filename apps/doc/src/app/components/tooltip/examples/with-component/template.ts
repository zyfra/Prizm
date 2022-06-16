import {ChangeDetectorRef, Component} from '@angular/core';
import {PolymorpheusComponent} from "@digital-plant/zui-components";
import {ZuiTooltipSomeComponent} from "./some-component";
import {ZuiOverlayOutsidePlacement} from "../../../../../../../../libs/next/src/lib/modules/overlay";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'zui-tooltip-example-with-component',
  templateUrl: './template.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiTooltipExampleWithComponent {
  readonly component = new PolymorpheusComponent(ZuiTooltipSomeComponent);
  readonly direction = ZuiOverlayOutsidePlacement.TOP_RIGHT;
}
