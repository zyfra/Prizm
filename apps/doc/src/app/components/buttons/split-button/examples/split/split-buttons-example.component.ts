import { Component, inject } from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsTriangleDown } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-split-buttons-example',
  styles: [
    `
      .box {
        margin-bottom: 2rem;

        .title {
          margin-bottom: 0.5rem;
        }

        .content {
          display: flex;
          gap: 1rem;
        }
      }
    `,
  ],
  templateUrl: './split-buttons-example.component.html',
})
export class PrizmSplitButtonsExampleComponent {
  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsTriangleDown);
  }
}
