import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { PRIZM_IS_IOS } from '../../tokens';
import { CSS, USER_AGENT } from '@ng-web-apis/common';
import { PrizmHoveredService } from '../../services';
import { PrizmScrollbarVisibility } from './scrollbar.model';
import { PrizmAbstractTestId } from '../../abstract/interactive';

@Component({
  selector: 'prizm-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmScrollbarComponent extends PrizmAbstractTestId {
  @Input() visibility: PrizmScrollbarVisibility = 'auto';

  @Input() overlap = true;

  override readonly testId_ = 'ui_scrollbar';

  constructor() {
    super();
  }
}
