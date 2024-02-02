import { Observable } from 'rxjs';
import { PrizmOverlayContent, PrizmOverlayContentData, PrizmOverlayContentProps, PrizmOverlayEventName } from './models';
export declare function getContent(data: PrizmOverlayContentData, props?: PrizmOverlayContentProps): PrizmOverlayContent;
export declare function cssClass(method: 'add' | 'remove', cls: string[], target?: string): void;
export declare function objToCss(styleObj: Record<string, any>): string;
export declare function percentToCss(max: number, percentage: string): string;
export declare function setWidthHeight(src: Record<string, any>, host: Record<string, any>, key: string, value: number | string): number | string;
export declare const BODY_ELEMENT: HTMLBodyElement | null;
declare class EventBusClass {
    private _e;
    send(from: string, name: PrizmOverlayEventName, data?: any): void;
    listen(from: string, name: PrizmOverlayEventName): Observable<any>;
    stop(): void;
}
export declare const EventBus: EventBusClass;
export {};
