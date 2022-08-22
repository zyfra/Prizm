import {TemplateRef} from '@angular/core';
import {ZuiOverlayAbstractPosition} from './position/position';

export interface ZuiOverlayPositionMeta {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  height?: number | string;
  width?: number | string;
  position?: string;
  extra?: string;
}

enum b {
  TOP = 't',
  LEFT = 'l',
  RIGHT = 'r',
  BOTTOM = 'b',
}

enum p {
  TOP = 't',
  LEFT = 'l',
  RIGHT = 'r',
  BOTTOM = 'b',
  TOP_LEFT = 'tl',
  TOP_RIGHT = 'tr',
  BOTTOM_LEFT = 'bl',
  BOTTOM_RIGHT = 'br'
}

enum o {
  LEFT_TOP = 'lt',
  RIGHT_TOP = 'rt',
  LEFT_BOTTOM = 'lb',
  RIGHT_BOTTOM = 'rb'
}

enum i {
  CENTER = 'c'
}
export const ZuiOverlayOutsidePlacement = {
  ...p,
  ...o
};

export const ZuiOverlayBasePlacement = {
  ...b
};
export const ZuiOverlayInsidePlacement = {
  ...p,
  ...i
};
export type ZuiOverlayOutsidePlacement = p | o;
export type ZuiOverlayInsidePlacement = p | i;
export type ZuiOverlayBasePlacement = b;

export enum ZuiOverlaySlidePlacement {
  LEFT = 'l',
  RIGHT = 'r'
}

export interface ZuiOverlayContainerSize {
  width: string | number;
  height: string | number;
}

export interface ZuiOverlayConfig {
  backdrop: boolean;
  containerClass: string;
  wrapperClass: string;
  backdropClass: string;
  listenWindowEvents: boolean;
  closeOnDocClick: boolean;
  bodyClass: string;
  closeOnEsc: boolean;
  windowResizeCallback: () => void;
  docClickCallback: () => void;
}

export interface ZuiOverlayComponentType<T> {
  new (...args: any[]): T;
}

export type ZuiOverlayId = string;

export type ZuiOverlayEventName = 'z_open' | 'z_close' | 'z_dynpos' | 'z_detach' | 'z_posupdate' | 'z_compins';

export interface ZuiOverlayEvent {
  from: ZuiOverlayId;
  name: ZuiOverlayEventName;
  data?: any;
}

export const enum ZuiOverlayContentType {
  STRING = 's',
  HTML = 'h',
  TEMPLATE = 't',
  COMPONENT = 'c'
}
export type ZuiOverlayContentData = string | TemplateRef<any> | ZuiOverlayComponentType<any>;
export type ZuiOverlayContentProps = { [x: string]: any } | any;

export interface ZuiOverlayContent {
  type?: ZuiOverlayContentType;
  data: ZuiOverlayContentData;
  props?: ZuiOverlayContentProps;
}

export interface ZuiOverlayInputs {
  position: ZuiOverlayAbstractPosition | null;
  config: ZuiOverlayConfig;
  content: ZuiOverlayContent;
  zid: ZuiOverlayId;
}
