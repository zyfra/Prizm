import { Observer } from 'rxjs';
import { PolymorphContent } from '../../../directives';
import { ZuiAppearance, ZuiAppearanceType, ZuiContextWithImplicit } from '../../../types';
import { Type } from '@angular/core';
import { ZuiOverlayInsidePlacement } from '../../../modules/overlay';
import { ZuiSize, ZuiSizeL, ZuiSizeM } from '../../../util';
import { ZuiOverscrollMode } from '../../../directives/overscroll/overscroll.model';

export type ZuiBaseDialogContext<O, T = ZuiDialogBaseOptions> =
  & ZuiContextWithImplicit<Observer<O>>
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
  readonly overscroll?: ZuiOverscrollMode;
  readonly dismissible?: boolean;
  readonly position: ZuiOverlayInsidePlacement;
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
  size?: ZuiSize;
  style?: string;
  appearance?: ZuiAppearance;
  appearanceType?: ZuiAppearanceType;
  text: string;
  action: (context: ZuiBaseDialogContext<O, T>) => void
}
