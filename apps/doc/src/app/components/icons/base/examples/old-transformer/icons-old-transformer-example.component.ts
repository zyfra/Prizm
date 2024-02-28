import { Component } from '@angular/core';
import {
  PrizmIconsComponent,
  PrizmIconsFullComponent,
  prizmIconsGetNameByOld,
  prizmIconsProvideOldNameTransformer,
} from '@prizm-ui/icons';

@Component({
  selector: 'prizm-icons-old-transformer-example',
  templateUrl: './icons-old-transformer-example.component.html',
  styleUrls: ['./icons-old-transformer-example.component.less'],
  standalone: true,
  imports: [PrizmIconsComponent, PrizmIconsFullComponent],
  providers: [
    // INJECT OUR TRANSFORMER
    prizmIconsProvideOldNameTransformer(),
  ],
})
export class PrizmIconsOldTransformerExampleComponent {
  // Old name for the icons from prizm-icon component.
  readonly oldName = 'bookmarks-book';

  protected readonly prizmIconsGetNameByOld = prizmIconsGetNameByOld;
}
