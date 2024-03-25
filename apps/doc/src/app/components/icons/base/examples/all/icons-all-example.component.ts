import { Component, inject, OnInit } from '@angular/core';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmIconsFullRegistry, PrizmIconsRegistry } from '@prizm-ui/icons/core';

//  You must import all icons from common set
import * as allBaseIcons from '@prizm-ui/icons/base/source';
import * as fullBaseIcons from '@prizm-ui/icons/full/source';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';

@Component({
  selector: 'prizm-icons-all-example',
  templateUrl: './icons-all-example.component.html',
  styleUrls: ['./icons-all-example.component.less'],
  standalone: true,
  imports: [PrizmIconsComponent, PrizmIconsFullComponent, PrizmIfLanguageDirective],
})
export class PrizmIconsAllExampleComponent implements OnInit {
  readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);
  readonly iconsBaseRegistry = inject(PrizmIconsRegistry);

  public ngOnInit() {
    // here we use Object.values to get all icons from allBaseIcons and fullBaseIcons
    this.iconsBaseRegistry.registerIcons(Object.values(allBaseIcons));
    this.iconsFullRegistry.registerIcons(Object.values(fullBaseIcons));
  }
}
