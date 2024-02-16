import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { PrizmToastService } from '@prizm-ui/components';
import { Clipboard } from '@angular/cdk/clipboard';
import {
  PRIZM_OLD_ICONS_REPLACE_SET,
  prizmIconsGetNameByOld,
  prizmIconsProvideOldNameTransformer,
} from '@prizm-ui/icons';
import { copyToClipboard } from '../../../../util';
import { PrizmNonNullableProperties } from '@prizm-ui/helpers';
import { IconOldDefs } from './const';

type IconObj = {
  old: string;
  new: string | null;
};

@Component({
  selector: 'prizm-old-icon-example',
  templateUrl: './old-icon.component.html',
  styleUrls: ['./old-icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [prizmIconsProvideOldNameTransformer()],
})
export class OldIconComponent {
  readonly oldIcons = IconOldDefs.reduce((a: unknown[], c) => a.concat(c.data), []);
  readonly iconsNew = this.oldIcons.map(name => ({
    old: name,
    new: prizmIconsGetNameByOld(name as keyof typeof PRIZM_OLD_ICONS_REPLACE_SET),
  }));
  readonly existIcons = this.iconsNew.filter(obj => obj.new) as PrizmNonNullableProperties<IconObj>[];
  readonly removedIcons = this.iconsNew.filter(obj => !obj.new);
  public defs = IconOldDefs;

  constructor(
    @Inject(Clipboard) public readonly clipboard: Clipboard,
    private readonly toastService: PrizmToastService
  ) {}

  public copy(value: string): void {
    copyToClipboard(value, this.clipboard, this.toastService);
  }
}
