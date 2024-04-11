import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsTriangleDown } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-split-with-dropdown-example',
  styles: [
    `
      prizm-split-button {
        height: 32px;
      }
      .val {
        margin: 0 16px;
      }
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
  templateUrl: './split-buttons-with-dropdown-example.component.html',
})
export class PrizmSplitButtonsWithDropdownExampleComponent {
  public open = false;

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(public readonly cdRef: ChangeDetectorRef) {
    this.iconsFullRegistry.registerIcons(prizmIconsTriangleDown);
  }
}
