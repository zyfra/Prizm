import { Component, inject } from '@angular/core';
import {
  PrizmIconsComponent,
  PrizmIconsFullComponent,
  prizmIconsGetNameByOld,
  prizmIconsProvideOldNameTransformer,
} from '@prizm-ui/icons';
import { PrizmIconsFullRegistry, PrizmIconsRegistry } from '@prizm-ui/icons/core';
import { prizmIconsBookClosed } from '@prizm-ui/icons/base/source';
import { prizmIconsBookClosed as prizmIconsBookClosedFull } from '@prizm-ui/icons/full/source';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';

@Component({
  selector: 'prizm-icons-old-transformer-example',
  templateUrl: './icons-old-transformer-example.component.html',
  styleUrls: ['./icons-old-transformer-example.component.less'],
  standalone: true,
  imports: [PrizmIconsComponent, PrizmIconsFullComponent, PrizmIfLanguageDirective],
  providers: [
    // INJECT OUR TRANSFORMER
    prizmIconsProvideOldNameTransformer(),
  ],
})
export class PrizmIconsOldTransformerExampleComponent {
  // Old name for the icons from prizm-icon component.
  readonly oldName = 'bookmarks-book';

  protected readonly prizmIconsGetNameByOld = prizmIconsGetNameByOld;

  readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);
  readonly iconsBaseRegistry = inject(PrizmIconsRegistry);

  public ngOnInit() {
    this.iconsBaseRegistry.registerIcons([prizmIconsBookClosed]);
    this.iconsFullRegistry.registerIcons([prizmIconsBookClosedFull]);
  }
}
