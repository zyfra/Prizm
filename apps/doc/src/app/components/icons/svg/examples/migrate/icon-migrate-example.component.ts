import { Component } from '@angular/core';
import { PrizmIconsComponent, prizmIconsProvideOldSvgNameTransformer } from '@prizm-ui/icons';
import { PrizmIconsRegistry } from '@prizm-ui/icons/core';
import { PRIZM_ICONS_SET } from '@prizm-ui/icons/base/source/icon-set';

@Component({
  selector: 'prizm-icon-migrate-example',
  templateUrl: './icon-migrate-example.component.html',
  providers: [
    /* 1. Добавляем наш провайдер который позволяет использовать старые названия */
    prizmIconsProvideOldSvgNameTransformer(),
  ],
  imports: [PrizmIconsComponent],
  standalone: true,
})
export class PrizmIconMigrateExampleComponent {
  constructor(private readonly iconRegistry: PrizmIconsRegistry) {
    /** 2. Регистрируем иконки сет или только нужные  */
    this.iconRegistry.registerIcons(PRIZM_ICONS_SET);
  }
}
