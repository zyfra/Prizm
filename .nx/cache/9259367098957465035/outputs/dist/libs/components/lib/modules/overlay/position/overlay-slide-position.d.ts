import { PrizmOverlayPositionMeta, PrizmOverlaySlidePlacement } from '../models';
import { PrizmOverlayAbstractPosition } from './position';
interface SlidePlacementConfig {
    placement?: PrizmOverlaySlidePlacement;
    width?: string;
}
export declare class PrizmOverlaySlidePosition extends PrizmOverlayAbstractPosition<SlidePlacementConfig> {
    constructor(config: SlidePlacementConfig);
    getPositions(): PrizmOverlayPositionMeta;
}
export {};
