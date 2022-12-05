import { TemplateRef } from '@angular/core';
import { PrizmOverlayAbstractPosition } from './position/position';

export interface PrizmOverlayPositionMeta {
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
export const PrizmOverlayOutsidePlacement = {
  ...p,
  ...o
};

export const PrizmOverlayBasePlacement = {
  ...b
};
export const PrizmOverlayInsidePlacement = {
  ...p,
  ...i
};
export type PrizmOverlayOutsidePlacement = p | o;
export type PrizmOverlayInsidePlacement = p | i;
export type PrizmOverlayBasePlacement = b;

export enum PrizmOverlaySlidePlacement {
  LEFT = 'l',
  RIGHT = 'r'
}

export interface PrizmOverlayContainerSize {
  width: string | number;
  height: string | number;
}

export interface PrizmOverlayConfig {
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

export interface PrizmOverlayComponentType<T> {
  new (...args: any[]): T;
}

export type PrizmOverlayId = string;

export type PrizmOverlayEventName = 'z_open' | 'z_close' | 'z_dynpos' | 'z_detach' | 'z_posupdate' | 'z_compins';

export interface PrizmOverlayEvent {
  from: PrizmOverlayId;
  name: PrizmOverlayEventName;
  data?: any;
}

export const enum PrizmOverlayContentType {
  STRING = 's',
  HTML = 'h',
  TEMPLATE = 't',
  COMPONENT = 'c'
}
export type PrizmOverlayContentData = string | TemplateRef<any> | PrizmOverlayComponentType<any>;
export type PrizmOverlayContentProps = { [x: string]: any } | any;

export interface PrizmOverlayContent {
  type?: PrizmOverlayContentType;
  data: PrizmOverlayContentData;
  props?: PrizmOverlayContentProps;
}

export interface PrizmOverlayInputs {
  position: PrizmOverlayAbstractPosition | null;
  config: PrizmOverlayConfig;
  content: PrizmOverlayContent;
  zid: PrizmOverlayId;
}
