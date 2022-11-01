import { Component } from '@angular/core';
import { PolymorphComponent, PzmOverlayOutsidePlacement } from '@digital-plant/zui-components';
import { ZuiConfirmPopupSomeComponent } from './some.component';

@Component({
  selector: 'zui-confirm-popup-with-component-example',
  templateUrl: './confirm-popup-with-component-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiConfirmPopupWithComponentExampleComponent {
  readonly component = new PolymorphComponent(ZuiConfirmPopupSomeComponent);
  readonly direction = PzmOverlayOutsidePlacement.TOP_RIGHT;
}
