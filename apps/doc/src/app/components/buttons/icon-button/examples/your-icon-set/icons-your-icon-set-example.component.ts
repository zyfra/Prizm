import { Component } from '@angular/core';
import { PrizmIconSvgEnum } from '@prizm-ui/icons';
import { PrizmIconsRegistry } from '@prizm-ui/icons/core';
import { prizmIconsAgendaFill } from '@prizm-ui/icons/base/source/agenda-fill';

@Component({
  selector: 'prizm-icons-your-icon-set-example',
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
  templateUrl: './icons-your-icon-set-example.component.html',
})
export class PrizmIconsYourIconSetExampleComponent {
  readonly PrizmIconSvgEnum = PrizmIconSvgEnum;
  constructor(private readonly iconRegistry: PrizmIconsRegistry) {
    /** Также можете добавить свою иконку */
    this.iconRegistry.registerIcons([prizmIconsAgendaFill]);
  }
}
