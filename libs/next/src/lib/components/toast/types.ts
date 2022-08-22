import {PolymorphContent} from "../../directives/polymorph";

export enum ZuiToastPosition {
  TOP_MIDDLE = 'tm',
  TOP_LEFT = 'tl',
  TOP_RIGHT = 'tr',
  BOTTOM_MIDDLE = 'bm',
  BOTTOM_LEFT = 'bl',
  BOTTOM_RIGHT = 'br',
}

export type ZUI_TOAST_ID = string;
export type ZUI_TOAST_CONTAINER_ID = string;

export type ZuiToastAppearance = 'info' | 'success' | 'warning' | 'danger'

export type ZuiToastOptions = {
  position?: ZuiToastPosition | ZUI_TOAST_CONTAINER_ID,
  /* weight - use for DESC sorting */
  weight?: number,
  title?: PolymorphContent,
  data?: Record<string, unknown>
  appearance?: ZuiToastAppearance,
  id?: ZUI_TOAST_ID,
  timer?: number,
  autoClose?: boolean,
  context?: Record<string, unknown>,
  show?: boolean;
}
