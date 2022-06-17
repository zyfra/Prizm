import {Component} from '@angular/core';
import {PolymorpheusComponent, ZuiOverlayOutsidePlacement} from "@digital-plant/zui-components";
import {ZuiHintSomeComponent} from "./some-component";

@Component({
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
  readonly direction = ZuiOverlayOutsidePlacement.BOTTOM;
}
