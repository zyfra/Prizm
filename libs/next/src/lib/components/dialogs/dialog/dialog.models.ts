import { Observer } from 'rxjs';
import { PolymorphContent } from '../../../directives';
import { PzmAppearance, PzmAppearanceType, PzmContextWithImplicit } from '../../../types';
import { Type } from '@angular/core';
import { PzmOverlayInsidePlacement } from '../../../modules/overlay';
import { PzmSize, PzmSizeL, PzmSizeM } from '../../../util';
import { PzmOverscrollMode } from '../../../directives/overscroll/overscroll.model';

export type PzmBaseDialogContext<O, T = PzmDialogBaseOptions> =
  & PzmContextWithImplicit<Observer<O>>
  & PzmAriaDialogContext
  & T
  & {
    readonly completeWith: (value: O) => void;
  };

export interface PzmAriaDialogContext {
  readonly component: Type<unknown>;
  readonly createdAt: number;
}

export type PzmDialog<T = unknown, O = unknown, DATA = unknown> = PzmBaseDialogContext<O, DATA> &
  T & {content: PolymorphContent<PzmBaseDialogContext<O, DATA> & T>};


export type PzmDialogSize = PzmSizeM | PzmSizeL;

export interface PzmDialogBaseOptions {
  readonly width?: string | number;
  readonly height?: string | number;
  readonly id?: string;
  readonly backdrop?: boolean;
  readonly overscroll?: PzmOverscrollMode;
  readonly dismissible?: boolean;
  readonly position: PzmOverlayInsidePlacement;
}

export interface PzmDialogOptions<O = unknown, DATA = unknown> extends PzmDialogBaseOptions{
  readonly size: PzmDialogSize;
  readonly required: boolean;
  readonly closeWord?: string;
  readonly closeable: boolean;
  readonly header: PolymorphContent<PzmBaseDialogContext<O, PzmDialogOptions<O, DATA>>>;
  readonly footer?: PolymorphContent<PzmBaseDialogContext<O, PzmDialogOptions<O, DATA>>>;
  readonly footerStyle?: string;
  readonly content?: PolymorphContent<PzmBaseDialogContext<O, PzmDialogOptions<O, DATA>>>;
  readonly data?: DATA;
}

export interface PzmDialogButton<O = unknown, T = PzmDialogBaseOptions> {
  size?: PzmSize;
  style?: string;
  appearance?: PzmAppearance;
  appearanceType?: PzmAppearanceType;
  text: string;
  action: (context: PzmBaseDialogContext<O, T>) => void
}
