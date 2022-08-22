import { PolymorphContent } from '../../../directives';
import {
  ZuiBaseDialogContext,
  ZuiDialogBaseOptions,
  ZuiDialogButton,
  ZuiDialogSize,
} from '../dialog/dialog.models';
import { ZuiOverscrollMode } from '../../../directives/overscroll/overscroll.model';
import { ZuiOverlayInsidePlacement } from '../../../modules/overlay';

export type ZuiSidebarButton = Omit<ZuiDialogButton, 'action'> & Partial<Pick<ZuiDialogButton, 'action'>>

export interface ZuiSidebarOptions<DATA = unknown> extends ZuiDialogBaseOptions {
  confirmButton?: ZuiSidebarButton | string,
  supportButton?: ZuiSidebarButton | string,
  cancelButton?: ZuiSidebarButton | string,
  showByVertical?: boolean;
  data?: DATA;
  size?: ZuiDialogSize;
  title: PolymorphContent<
    ZuiBaseDialogContext<
      ZuiSidebarResultDefaultType,
      ZuiSidebarOptions<DATA>
      >
    >,
  description?: PolymorphContent<
    ZuiBaseDialogContext<
      ZuiSidebarResultDefaultType,
      ZuiSidebarOptions<DATA>
      >
    >,
  overscrollMode?: ZuiOverscrollMode;

  closeWord: string;
  readonly content?: any;
  readonly closeable: boolean;
  readonly header: any;
}

export enum ZuiSidebarResultDefaultType {
  confirmed = 'confirmed',
  support = 'support',
  cancel = 'cancel',
}
export type ZuiSidebarResult = ZuiSidebarResultDefaultType | any;
