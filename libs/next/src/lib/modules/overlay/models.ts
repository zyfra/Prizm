import { TemplateRef } from '@angular/core';
import { PzmOverlayAbstractPosition } from './position/position';

export interface PzmOverlayPositionMeta {
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
export const PzmOverlayOutsidePlacement = {
  ...p,
  ...o
};

export const PzmOverlayBasePlacement = {
  ...b
};
export const PzmOverlayInsidePlacement = {
  ...p,
  ...i
};
export type PzmOverlayOutsidePlacement = p | o;
export type PzmOverlayInsidePlacement = p | i;
export type PzmOverlayBasePlacement = b;

export enum PzmOverlaySlidePlacement {
  LEFT = 'l',
  RIGHT = 'r'
}

export interface PzmOverlayContainerSize {
  width: string | number;
  height: string | number;
}

export interface PzmOverlayConfig {
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

export interface PzmOverlayComponentType<T> {
  new (...args: any[]): T;
}

export type PzmOverlayId = string;

export type PzmOverlayEventName = 'z_open' | 'z_close' | 'z_dynpos' | 'z_detach' | 'z_posupdate' | 'z_compins';

export interface PzmOverlayEvent {
  from: PzmOverlayId;
  name: PzmOverlayEventName;
  data?: any;
}

export const enum PzmOverlayContentType {
  STRING = 's',
  HTML = 'h',
  TEMPLATE = 't',
  COMPONENT = 'c'
}
export type PzmOverlayContentData = string | TemplateRef<any> | PzmOverlayComponentType<any>;
export type PzmOverlayContentProps = { [x: string]: any } | any;

export interface PzmOverlayContent {
  type?: PzmOverlayContentType;
  data: PzmOverlayContentData;
  props?: PzmOverlayContentProps;
}

export interface PzmOverlayInputs {
  position: PzmOverlayAbstractPosition | null;
  config: PzmOverlayConfig;
  content: PzmOverlayContent;
  zid: PzmOverlayId;
}
