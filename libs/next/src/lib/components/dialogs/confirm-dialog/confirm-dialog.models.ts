import { PolymorphContent } from '../../../directives';
import {
  PzmBaseDialogContext,
  PzmDialogBaseOptions,
  PzmDialogButton,
  PzmDialogSize,
} from '../dialog/dialog.models';
import { PzmOverscrollMode } from '../../../directives/overscroll/overscroll.model';

export type PzmConfirmDialogButton = Omit<PzmDialogButton, 'action'> & Partial<Pick<PzmDialogButton, 'action'>>

export interface PzmConfirmDialogOptions<DATA = unknown> extends PzmDialogBaseOptions {
  confirmButton?: PzmConfirmDialogButton | string,
  supportButton?: PzmConfirmDialogButton | string,
  cancelButton?: PzmConfirmDialogButton | string,
  showByVertical?: boolean;
  data?: DATA;
  size?: PzmDialogSize;
  title: PolymorphContent<
    PzmBaseDialogContext<
      PzmConfirmDialogResultDefaultType,
      PzmConfirmDialogOptions<DATA>
      >
    >,
  description?: PolymorphContent<
    PzmBaseDialogContext<
      PzmConfirmDialogResultDefaultType,
      PzmConfirmDialogOptions<DATA>
      >
    >,
  overscrollMode?: PzmOverscrollMode
}

export enum PzmConfirmDialogResultDefaultType {
  confirmed = 'confirmed',
  support = 'support',
  cancel = 'cancel',
}
export type PzmConfirmDialogResult = PzmConfirmDialogResultDefaultType | any;
