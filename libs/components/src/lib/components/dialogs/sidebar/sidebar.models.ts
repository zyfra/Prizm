import { PolymorphContent } from '../../../directives';
import {
  PrizmBaseDialogContext,
  PrizmDialogBaseOptions,
  PrizmDialogButton,
  PrizmDialogSize,
} from '../dialog/dialog.models';
import { PrizmOverscrollMode } from '../../../directives/overscroll/overscroll.model';
import { PrizmOverlayInsidePlacement } from '../../../modules/overlay';
import {PrizmContent} from "../../button";

export type PrizmSidebarButton = Omit<PrizmDialogButton, 'action'> & Partial<Pick<PrizmDialogButton, 'action'>> & {icon?: PrizmContent}

export interface PrizmSidebarOptions<DATA = unknown> extends PrizmDialogBaseOptions {
  confirmButton?: PrizmSidebarButton | string,
  supportButton?: PrizmSidebarButton | string,
  cancelButton?: PrizmSidebarButton | string,
  showByVertical?: boolean;
  data?: DATA;
  size?: PrizmDialogSize;
  title: PolymorphContent<
    PrizmBaseDialogContext<
      PrizmSidebarResultDefaultType,
      PrizmSidebarOptions<DATA>
      >
    >,
  description?: PolymorphContent<
    PrizmBaseDialogContext<
      PrizmSidebarResultDefaultType,
      PrizmSidebarOptions<DATA>
      >
    >,
  overscrollMode?: PrizmOverscrollMode;

  closeWord: string;
  readonly content?: any;
  readonly closeable: boolean;
  readonly header: any;
}

export enum PrizmSidebarResultDefaultType {
  confirmed = 'confirmed',
  support = 'support',
  cancel = 'cancel',
}
export type PrizmSidebarResult = PrizmSidebarResultDefaultType | any;
