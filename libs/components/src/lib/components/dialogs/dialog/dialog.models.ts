import { Observable, Observer } from 'rxjs';
import { PolymorphContent } from '../../../directives';
import { PrizmAppearance, PrizmAppearanceType, PrizmContextWithImplicit } from '../../../types';
import { Type } from '@angular/core';
import { PrizmOverlayInsidePlacement } from '../../../modules/overlay';
import { PrizmSize, PrizmSizeL, PrizmSizeM } from '../../../util';
import { PrizmOverscrollMode } from '../../../directives/overscroll/overscroll.model';
import { PrizmContent } from '../../button';

export type PrizmBaseDialogContext<O, T = PrizmDialogBaseOptions> = PrizmContextWithImplicit<Observer<O>> &
  PrizmAriaDialogContext &
  T & {
    readonly completeWith: (value: O) => void;
  };

export interface PrizmAriaDialogContext {
  readonly component: Type<unknown>;
  readonly createdAt: number;
}

export type PrizmDialog<T = unknown, O = unknown, DATA = unknown> = PrizmBaseDialogContext<O, DATA> &
  T & { content: PolymorphContent<PrizmBaseDialogContext<O, DATA> & T> };

export type PrizmDialogSize = PrizmSizeM | PrizmSizeL;

export interface PrizmDialogBaseOptions {
  readonly width?: string | number;
  readonly zIndex?: number;
  readonly height?: string | number;
  readonly id?: string;
  readonly backdrop?: boolean;
  readonly overscroll?: PrizmOverscrollMode;
  readonly dismissible?: boolean;
  readonly position: PrizmOverlayInsidePlacement;
  readonly styleVars?: Record<string, unknown>;
  readonly parentContainer?: HTMLElement;
}

export interface PrizmDialogOptions<O = unknown, DATA = unknown> extends PrizmDialogBaseOptions {
  readonly size: PrizmDialogSize;
  readonly required: boolean;
  readonly closeWord?: string;
  readonly closeable: boolean;
  readonly header: PolymorphContent<PrizmBaseDialogContext<O, PrizmDialogOptions<O, DATA>>>;
  readonly footer?: PolymorphContent<PrizmBaseDialogContext<O, PrizmDialogOptions<O, DATA>>> | null;
  readonly footerStyle?: string;
  readonly content?: PolymorphContent<PrizmBaseDialogContext<O, PrizmDialogOptions<O, DATA>>>;
  readonly data?: DATA;
}

export interface PrizmDialogButton<O = unknown, T = PrizmDialogBaseOptions> {
  size?: PrizmSize;
  style?: string;
  appearance?: PrizmAppearance;
  appearanceType?: PrizmAppearanceType;
  text: string;
  icon?: PrizmContent;
  iconRight?: PrizmContent;
  showLoader?: boolean | Observable<boolean>;
  disabled?: boolean | Observable<boolean>;
  action: (context: PrizmBaseDialogContext<O, T>) => void;
}
