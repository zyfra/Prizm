import {PzmOverlayPositionMeta, PzmOverlaySlidePlacement} from '../models';
import {PzmOverlayAbstractPosition} from './position';

interface SlidePlacementConfig {
  placement?: PzmOverlaySlidePlacement;
  width?: string;
}

export class ZuiOverlaySlidePosition extends PzmOverlayAbstractPosition<SlidePlacementConfig> {
  constructor(config: SlidePlacementConfig) {
    super();
    this.config = { ...{ placement: PzmOverlaySlidePlacement.LEFT, width: '30%' }, ...config };
  }
  public getPositions(): PzmOverlayPositionMeta {
    const props = this.config.placement === PzmOverlaySlidePlacement.LEFT ? { left: 0 } : { right: 0 };
    return {
      ...props,
      top: 0,
      width: this.config.width,
      height: '100%',
      position: 'fixed',
      extra: this.config.placement
    };
  }
}
