import { Component } from '@angular/core';
import { PolymorphComponent, PrizmOverlayOutsidePlacement } from '@prizm-ui/components';
import { PrizmConfirmPopupSomeComponent } from './some.component';

@Component({
  selector: 'prizm-confirm-popup-with-component-example',
  templateUrl: './confirm-popup-with-component-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmConfirmPopupWithComponentExampleComponent {
  readonly component = new PolymorphComponent(PrizmConfirmPopupSomeComponent);
  readonly direction = PrizmOverlayOutsidePlacement.TOP_RIGHT;
}
