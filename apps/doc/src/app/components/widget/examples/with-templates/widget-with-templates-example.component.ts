import { Component } from '@angular/core';
import { PrizmIconsRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsCalendarPlus,
  PrizmIconsEnum,
  prizmIconsGear8Edge,
  prizmIconsSnakeCup,
} from '@prizm-ui/icons/base';

@Component({
  selector: 'prizm-widget-with-templates-example',
  templateUrl: './widget-with-templates-example.component.html',
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
export class PrizmWidgetWithTemplatesExampleComponent {
  readonly PrizmIconSvgEnum = PrizmIconsEnum;
  constructor(private readonly iconRegistry: PrizmIconsRegistry) {
    /** Также можете добавить свою иконку */
    this.iconRegistry.registerIcons([prizmIconsGear8Edge, prizmIconsSnakeCup, prizmIconsCalendarPlus]);
  }
}
