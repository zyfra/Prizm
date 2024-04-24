import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PolymorphContent } from '../../../directives/polymorph';
import { PrizmToastRef } from '../toast-ref';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsXmark } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-toast-single',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent extends PrizmAbstractTestId {
  override readonly testId_ = 'ui_toast_single';

  // TODO remove record to context type
  get context(): Record<string, any> {
    return this.toastRef as Record<string, any>;
  }
  get temp(): PolymorphContent {
    return this.toastRef.content;
  }

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(public readonly toastRef: PrizmToastRef) {
    super();

    this.iconsFullRegistry.registerIcons(prizmIconsXmark);
  }
}
