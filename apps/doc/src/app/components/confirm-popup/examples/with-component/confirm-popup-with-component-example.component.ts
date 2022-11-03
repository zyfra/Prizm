import { Component } from '@angular/core';
import { PolymorphComponent, PzmOverlayOutsidePlacement } from '@digital-plant/zui-components';
import { PzmConfirmPopupSomeComponent } from './some.component';

@Component({
  selector: 'pzm-confirm-popup-with-component-example',
  templateUrl: './confirm-popup-with-component-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PzmConfirmPopupWithComponentExampleComponent {
  readonly component = new PolymorphComponent(PzmConfirmPopupSomeComponent);
  readonly direction = PzmOverlayOutsidePlacement.TOP_RIGHT;
}
