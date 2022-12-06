import { Component } from '@angular/core';
import {
  PRIZM_ICONS_SET,
  prizmIconDateTimeCalendarPlus,
  PrizmIconEnum,
  prizmIconProductionIndustrySnakeCup,
  prizmIconSettingsToolsBan,
  PrizmIconsRegistry,
} from '@prizm-ui/icons';

@Component({
  selector: 'prizm-icon-svg-example',
  templateUrl: './icon-svg-example.component.html',
})
export class PrizmIconSvgExampleComponent {
  readonly PrizmIconEnum = PrizmIconEnum;
  constructor(
    private readonly iconRegistry: PrizmIconsRegistry,
  ) {
    /** Также можете добавить свою иконку */
    this.iconRegistry.registerIcons([
      prizmIconSettingsToolsBan,
      prizmIconProductionIndustrySnakeCup,
      prizmIconDateTimeCalendarPlus,
    ]);

    /** для добавление всего сета наших иконок
     * используйте PRIZM_ICONS_SET
     * */
    // this.iconRegistry.registerIcons([
    //   ...PRIZM_ICONS_SET
    // ]);
  }
}
