import {TemplateRef} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {
  PzmOverlayContent,
  PzmOverlayContentData,
  PzmOverlayContentProps,
  PzmOverlayContentType,
  PzmOverlayEvent,
  PzmOverlayEventName
} from './models';

export function getContent(data: PzmOverlayContentData, props: PzmOverlayContentProps = {}): PzmOverlayContent {
  let type: PzmOverlayContentType = PzmOverlayContentType.COMPONENT;

  if (typeof data === 'string' && props['hasHTML']) type = PzmOverlayContentType.HTML;
  else if (typeof data === 'string') type = PzmOverlayContentType.STRING;
  else if (data instanceof TemplateRef) type = PzmOverlayContentType.TEMPLATE;

  return { data, type, props };
}

/* html dom utils */
export function cssClass(method: 'add' | 'remove', cls: string[], target: string = 'body'): void {
  document.querySelector(target).classList[method](...cls);
}

export function objToCss(styleObj: Record<string, any>): string {
  return Object.keys(styleObj)
    .map(x => `${x}:${styleObj[x]}${typeof styleObj[x] === 'number' ? 'px' : ''}`)
    .join(';');
}

export function percentToCss(max: number, percentage: string): string {
  let number = Number(percentage.slice(0, -1));
  if (number > 100) {
    number = 100;
  }
  return `calc(${max}px - ${100 - number}%)`;
}

export function setWidthHeight(
  src: Record<string, any>,
  host: Record<string, any>,
  key: string,
  value: number | string
): number | string {
  if (typeof value === 'number') {
    host[key] = value = Math.abs(value);
  }

  if (typeof value === 'string' && value.endsWith('%')) {
    value = percentToCss(src[key], value);
  }

  return value;
}

export const BODY_ELEMENT = document.querySelector('body');

class EventBusClass {
  private _e: Subject<PzmOverlayEvent> = new Subject();
  public send(from: string, name: PzmOverlayEventName, data: any = null): void {
    this._e.next({ from, name, data });
  }
  public listen(from: string, name: PzmOverlayEventName): Observable<any> {
    return this._e.asObservable().pipe(
      filter(e => e.from === from && e.name === name),
      map(e => e.data)
    );
  }

  public stop(): void {
    this._e.complete();
  }
}
export const EventBus = new EventBusClass();
