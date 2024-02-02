import { PrizmOverlayInsidePlacement } from '../models';
import { PrizmOverlayAbstractPosition } from './position';
interface PrizmOverlayGlobalPositionConfig {
    placement?: PrizmOverlayInsidePlacement;
    offset?: number;
    width?: string | number;
    height?: string | number;
    element?: HTMLElement;
}
export declare class PrizmOverlayGlobalPosition extends PrizmOverlayAbstractPosition<PrizmOverlayGlobalPositionConfig> {
    constructor(config: PrizmOverlayGlobalPositionConfig);
    getPositions(hostEl?: HTMLElement, parent?: HTMLElement): any;
    private calc;
}
export {};
