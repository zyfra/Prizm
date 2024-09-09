import { PolymorphContent } from '../../../directives';
import {
  PrizmBaseDialogContext,
  PrizmDialogBaseOptions,
  PrizmDialogButton,
  PrizmDialogSize,
} from '../dialog/dialog.models';
import { PrizmOverscrollMode } from '../../../directives/overscroll/overscroll.model';
import { PrizmScrollbarVisibility } from '../../scrollbar';

export type PrizmConfirmDialogButton = Omit<PrizmDialogButton, 'action'> &
  Partial<Pick<PrizmDialogButton, 'action'>>;

export interface PrizmConfirmDialogOptions<DATA = unknown> extends PrizmDialogBaseOptions {
  confirmButton?: PrizmConfirmDialogButton | string;
  supportButton?: PrizmConfirmDialogButton | string | null;
  cancelButton?: PrizmConfirmDialogButton | string;
  showByVertical?: boolean;
  data?: DATA;
  readonly scrollbarVisibility?: PrizmScrollbarVisibility;
  size?: PrizmDialogSize;
  title: PolymorphContent<
    PrizmBaseDialogContext<PrizmConfirmDialogResultDefaultType, PrizmConfirmDialogOptions<DATA>>
  >;
  footer?: PolymorphContent<
    PrizmBaseDialogContext<PrizmConfirmDialogResultDefaultType, PrizmConfirmDialogOptions<DATA>>
  >;
  description?: PolymorphContent<
    PrizmBaseDialogContext<PrizmConfirmDialogResultDefaultType, PrizmConfirmDialogOptions<DATA>>
  >;
  overscrollMode?: PrizmOverscrollMode;
}

export enum PrizmConfirmDialogResultDefaultType {
  confirm = 'confirm',
  support = 'support',
  cancel = 'cancel',
}
export type PrizmConfirmDialogResult = PrizmConfirmDialogResultDefaultType | any;
