import { PolymorphContent } from '../../../directives';
import {
  PrizmBaseDialogContext,
  PrizmDialogBaseOptions,
  PrizmDialogButton,
  PrizmDialogSize,
} from '../dialog/dialog.models';
import { PrizmOverscrollMode } from '../../../directives/overscroll/overscroll.model';
import { PrizmOverlayInsidePlacement } from '../../../modules/overlay';
import { PrizmContent } from '../../button';
import { Observable } from 'rxjs';
import { PrizmScrollbarVisibility } from '../../scrollbar';

export type PrizmSidebarButton = Omit<PrizmDialogButton, 'action'> &
  Partial<Pick<PrizmDialogButton, 'action'>> & { icon?: PrizmContent };

export interface PrizmSidebarOptions<DATA = unknown> extends PrizmDialogBaseOptions {
  confirmButton?: PrizmSidebarButton | string;
  supportButton?: PrizmSidebarButton | string | null;
  cancelButton?: PrizmSidebarButton | string | null;
  styleVars?: Record<string, unknown>;
  overlayStyleVars?: Record<string, unknown>;
  showByVertical?: boolean;
  data?: DATA;
  size?: PrizmDialogSize;
  title: PolymorphContent<PrizmBaseDialogContext<PrizmSidebarResultDefaultType, PrizmSidebarOptions<DATA>>>;
  description?: PolymorphContent<
    PrizmBaseDialogContext<PrizmSidebarResultDefaultType, PrizmSidebarOptions<DATA>>
  >;
  overscrollMode?: PrizmOverscrollMode;

  closeWord: string;
  readonly content?: any;
  readonly outerContent?: any;
  readonly closeable: boolean;
  readonly scrollbarVisibility?: PrizmScrollbarVisibility;
  /**
   * header (not include close button)
   * @deprecated use headerTemplate
   * */
  readonly header?: any;
  /**
   * for change full header with close button
   * */
  readonly headerTemplate?: any;
  readonly canClose?: () => Observable<boolean>;
  readonly hideFooter?: boolean;
  readonly footer: PolymorphContent<
    PrizmBaseDialogContext<PrizmSidebarResultDefaultType, PrizmSidebarOptions<DATA>>
  > | null;
}

export enum PrizmSidebarResultDefaultType {
  confirm = 'confirm',
  support = 'support',
  cancel = 'cancel',
}
export type PrizmSidebarResult = PrizmSidebarResultDefaultType | any;
