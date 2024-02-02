import { Component } from '@angular/core';
import {
  PrizmIconsRegistry,
  prizmIconSvgDateTimeCalendarPlus,
  prizmIconSvgProductionIndustrySnakeCup,
  prizmIconSvgSettingsToolsBan,
} from '@prizm-ui/icons';

@Component({
  selector: 'prizm-icons-svg-example',
  templateUrl: './icons-example.component.html',
})
export class PrizmIconsSvgSvgExampleComponent {
  readonly PrizmIconsSvgEnum = PrizmIconsSvgEnum;
  constructor(private readonly iconRegistry: PrizmIconsRegistry) {
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
