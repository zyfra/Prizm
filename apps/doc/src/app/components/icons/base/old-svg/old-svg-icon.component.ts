import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { PrizmToastService } from '@prizm-ui/components';
import { Clipboard } from '@angular/cdk/clipboard';
import {
  PRIZM_OLD_ICONS_REPLACE_SET,
  prizmIconsGetNameByOld,
  prizmIconsProvideOldSvgNameTransformer,
} from '@prizm-ui/icons';
import { copyToClipboard } from '../../../../util';
import { PrizmNonNullableProperties } from '@prizm-ui/helpers';
import { IconOldDefs } from './const';
import { PrizmIconSvgEnum } from '../../../../icons-svg';

type IconObj = {
  old: string;
  new: string | null;
};

@Component({
  selector: 'prizm-old-svg-icon-example',
  templateUrl: './old-svg-icon.component.html',
  styleUrls: ['./old-svg-icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [prizmIconsProvideOldSvgNameTransformer()],
})
export class OldSvgIconComponent {
  showOnlyHide = false;
  private readonly iconsSetObject = Object.values(PrizmIconSvgEnum);
  private readonly iconsSet = Object.values(this.iconsSetObject);

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
