import { PolymorphContent } from '../../../directives';
import {
  PzmBaseDialogContext,
  PzmDialogBaseOptions,
  PzmDialogButton,
  PzmDialogSize,
} from '../dialog/dialog.models';
import { PzmOverscrollMode } from '../../../directives/overscroll/overscroll.model';
import { PzmOverlayInsidePlacement } from '../../../modules/overlay';

export type PzmSidebarButton = Omit<PzmDialogButton, 'action'> & Partial<Pick<PzmDialogButton, 'action'>>

export interface PzmSidebarOptions<DATA = unknown> extends PzmDialogBaseOptions {
  confirmButton?: PzmSidebarButton | string,
  supportButton?: PzmSidebarButton | string,
  cancelButton?: PzmSidebarButton | string,
  showByVertical?: boolean;
  data?: DATA;
  size?: PzmDialogSize;
  title: PolymorphContent<
    PzmBaseDialogContext<
      PzmSidebarResultDefaultType,
      PzmSidebarOptions<DATA>
      >
    >,
  description?: PolymorphContent<
    PzmBaseDialogContext<
      PzmSidebarResultDefaultType,
      PzmSidebarOptions<DATA>
      >
    >,
  overscrollMode?: PzmOverscrollMode;

  closeWord: string;
  readonly content?: any;
  readonly closeable: boolean;
  readonly header: any;
}

export enum PzmSidebarResultDefaultType {
  confirmed = 'confirmed',
  support = 'support',
  cancel = 'cancel',
}
export type PzmSidebarResult = PzmSidebarResultDefaultType | any;
