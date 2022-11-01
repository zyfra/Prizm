import { Observer } from 'rxjs';
import { PolymorphContent } from '../../../directives';
import { PzmAppearance, PzmAppearanceType, PzmContextWithImplicit } from '../../../types';
import { Type } from '@angular/core';
import { PzmOverlayInsidePlacement } from '../../../modules/overlay';
import { PzmSize, ZuiSizeL, ZuiSizeM } from '../../../util';
import { PzmOverscrollMode } from '../../../directives/overscroll/overscroll.model';

export type ZuiBaseDialogContext<O, T = ZuiDialogBaseOptions> =
  & PzmContextWithImplicit<Observer<O>>
  & ZuiAriaDialogContext
  & T
  & {
    readonly completeWith: (value: O) => void;
  };

export interface ZuiAriaDialogContext {
  readonly component: Type<unknown>;
  readonly createdAt: number;
}

export type ZuiDialog<T = unknown, O = unknown, DATA = unknown> = ZuiBaseDialogContext<O, DATA> &
  T & {content: PolymorphContent<ZuiBaseDialogContext<O, DATA> & T>};


export type ZuiDialogSize = ZuiSizeM | ZuiSizeL;

export interface ZuiDialogBaseOptions {
  readonly width?: string | number;
  readonly height?: string | number;
  readonly id?: string;
  readonly backdrop?: boolean;
  readonly overscroll?: PzmOverscrollMode;
  readonly dismissible?: boolean;
  readonly position: PzmOverlayInsidePlacement;
}

export interface ZuiDialogOptions<O = unknown, DATA = unknown> extends ZuiDialogBaseOptions{
  readonly size: ZuiDialogSize;
  readonly required: boolean;
  readonly closeWord?: string;
  readonly closeable: boolean;
  readonly header: PolymorphContent<ZuiBaseDialogContext<O, ZuiDialogOptions<O, DATA>>>;
  readonly footer?: PolymorphContent<ZuiBaseDialogContext<O, ZuiDialogOptions<O, DATA>>>;
  readonly footerStyle?: string;
  readonly content?: PolymorphContent<ZuiBaseDialogContext<O, ZuiDialogOptions<O, DATA>>>;
  readonly data?: DATA;
}

export interface ZuiDialogButton<O = unknown, T = ZuiDialogBaseOptions> {
  size?: PzmSize;
  style?: string;
  appearance?: PzmAppearance;
  appearanceType?: PzmAppearanceType;
  text: string;
  action: (context: ZuiBaseDialogContext<O, T>) => void
}
