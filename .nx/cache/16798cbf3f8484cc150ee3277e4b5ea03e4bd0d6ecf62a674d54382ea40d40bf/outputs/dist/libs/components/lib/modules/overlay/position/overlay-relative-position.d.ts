import { PrizmOverlayOutsidePlacement, PrizmOverlayPositionMeta } from '../models';
import { PrizmOverlayAbstractPosition } from './position';
export interface PrizmOverlayRelativePositionConfig {
    element: HTMLElement;
    placement?: PrizmOverlayOutsidePlacement;
    autoReposition?: boolean;
    width?: string | number;
    height?: string | number;
}
export declare class PrizmOverlayRelativePosition extends PrizmOverlayAbstractPosition<PrizmOverlayRelativePositionConfig> {
    obs: MutationObserver;
    constructor(config: PrizmOverlayRelativePositionConfig);
    init(zid: string): void;
    getPositions(targetEl: HTMLElement): Pick<PrizmOverlayPositionMeta, any>;
    reCalc(): void;
    private getCoords;
    private calc;
    private calculatePos;
    private isOverflowed;
    private oppositeDirection;
    private round;
    private listenDrag;
}
