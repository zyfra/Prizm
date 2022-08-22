import { PolymorphContent } from '../../../directives';
import {
  ZuiBaseDialogContext,
  ZuiDialogBaseOptions,
  ZuiDialogButton,
  ZuiDialogSize,
} from '../dialog/dialog.models';
import { ZuiOverscrollMode } from '../../../directives/overscroll/overscroll.model';

export type ZuiConfirmDialogButton = Omit<ZuiDialogButton, 'action'> & Partial<Pick<ZuiDialogButton, 'action'>>

export interface ZuiConfirmDialogOptions<DATA = unknown> extends ZuiDialogBaseOptions {
  confirmButton?: ZuiConfirmDialogButton | string,
  supportButton?: ZuiConfirmDialogButton | string,
  cancelButton?: ZuiConfirmDialogButton | string,
  showByVertical?: boolean;
  data?: DATA;
  size?: ZuiDialogSize;
  title: PolymorphContent<
    ZuiBaseDialogContext<
      ZuiConfirmDialogResultDefaultType,
      ZuiConfirmDialogOptions<DATA>
      >
    >,
  description?: PolymorphContent<
    ZuiBaseDialogContext<
      ZuiConfirmDialogResultDefaultType,
      ZuiConfirmDialogOptions<DATA>
      >
    >,
  overscrollMode?: ZuiOverscrollMode
}

export enum ZuiConfirmDialogResultDefaultType {
  confirmed = 'confirmed',
  support = 'support',
  cancel = 'cancel',
}
export type ZuiConfirmDialogResult = ZuiConfirmDialogResultDefaultType | any;
