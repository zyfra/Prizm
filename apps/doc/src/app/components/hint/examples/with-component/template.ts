import {ChangeDetectorRef, Component} from '@angular/core';
import {PolymorpheusComponent} from "@digital-plant/zui-components";
import {ZuiHintSomeComponent} from "./some-component";
import {ZuiOverlayOutsidePlacement} from "../../../../../../../../libs/next/src/lib/modules/overlay";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'zui-hint-example-with-component',
  templateUrl: './template.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiHintExampleWithComponent {
  readonly component = new PolymorpheusComponent(ZuiHintSomeComponent);
  readonly direction = ZuiOverlayOutsidePlacement.LEFT_BOTTOM;
}
