import { Component } from '@angular/core';
import {
  PRIZM_ICONS_SVG_SET,
  prizmIconSvgDateTimeCalendarPlus,
  PrizmIconSvgEnum,
  prizmIconSvgProductionIndustrySnakeCup,
  prizmIconSvgSettingsToolsBan,
  PrizmIconsSvgRegistry,
} from '@prizm-ui/icons';

@Component({
  selector: 'prizm-widget-with-templates-example',
  templateUrl: './widget-with-templates-example.component.html',
  styles: [
    `
      prizm-widget {
        color: var(--prizm-text-main);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
      }
    `,
  ],
})
export class PrizmWidgetWithTemplatesExampleComponent {
  readonly PrizmIconSvgEnum = PrizmIconSvgEnum;
  constructor(private readonly iconRegistry: PrizmIconsSvgRegistry) {
    /** Также можете добавить свою иконку */
    this.iconRegistry.registerIcons([
      prizmIconSvgSettingsToolsBan,
      prizmIconSvgProductionIndustrySnakeCup,
      prizmIconSvgDateTimeCalendarPlus,
    ]);

    /** для добавление всего сета наших иконок
     * используйте PRIZM_ICONS_SVG_SET
     * */
    // this.iconRegistry.registerIcons([
    //   ...PRIZM_ICONS_SVG_SET
    // ]);
  }
}
