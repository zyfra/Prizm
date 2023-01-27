import { PrizmOverlayPositionMeta, PrizmOverlaySlidePlacement } from '../models';
import { PrizmOverlayAbstractPosition } from './position';

interface SlidePlacementConfig {
  placement?: PrizmOverlaySlidePlacement;
  width?: string;
}

export class PrizmOverlaySlidePosition extends PrizmOverlayAbstractPosition<SlidePlacementConfig> {
  constructor(config: SlidePlacementConfig) {
    super();
    this.config = { ...{ placement: PrizmOverlaySlidePlacement.LEFT, width: '30%' }, ...config };
  }
  public getPositions(): PrizmOverlayPositionMeta {
    const props = this.config.placement === PrizmOverlaySlidePlacement.LEFT ? { left: 0 } : { right: 0 };
    return {
      ...props,
      top: 0,
      width: this.config.width,
      height: '100%',
      position: 'fixed',
      extra: this.config.placement,
    };
  }
}
