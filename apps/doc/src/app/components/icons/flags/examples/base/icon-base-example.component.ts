import { Component } from '@angular/core';
import { prizmIconFlagAs, PrizmIconFlagEnum, PrizmIconFlagIconsRegistry, prizmIconFlagRu } from '@prizm-ui/icon-flags';

@Component({
  selector: 'prizm-icon-base-example',
  templateUrl: './icon-base-example.component.html',
})
export class PrizmIconBaseExampleComponent {
  readonly PrizmIconFlagEnum = PrizmIconFlagEnum;
  constructor(
    private readonly iconFlagsRegistry: PrizmIconFlagIconsRegistry,
  ) {
    this.iconFlagsRegistry.registerIcons([
      prizmIconFlagAs,
      prizmIconFlagRu,
    ]);
  }
}
