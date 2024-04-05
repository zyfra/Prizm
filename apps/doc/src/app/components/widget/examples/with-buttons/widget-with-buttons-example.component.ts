import { Component, inject } from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsLock } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-widget-with-buttons-example',
  templateUrl: './widget-with-buttons-example.component.html',
  styles: [
    `
      prizm-widget {
        color: var(--prizm-text-icon-secondary);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
      }
    `,
  ],
})
export class PrizmWidgetWithButtonsExampleComponent {
  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsLock);
  }
}
