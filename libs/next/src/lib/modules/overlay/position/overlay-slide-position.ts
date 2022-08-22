import {ZuiOverlayPositionMeta, ZuiOverlaySlidePlacement} from '../models';
import {ZuiOverlayAbstractPosition} from './position';

interface SlidePlacementConfig {
  placement?: ZuiOverlaySlidePlacement;
  width?: string;
}

export class ZuiOverlaySlidePosition extends ZuiOverlayAbstractPosition<SlidePlacementConfig> {
  constructor(config: SlidePlacementConfig) {
    super();
    this.config = { ...{ placement: ZuiOverlaySlidePlacement.LEFT, width: '30%' }, ...config };
  }
  public getPositions(): ZuiOverlayPositionMeta {
    const props = this.config.placement === ZuiOverlaySlidePlacement.LEFT ? { left: 0 } : { right: 0 };
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
