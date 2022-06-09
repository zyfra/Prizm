import { ZuiOverlayPositionMeta, ZuiOverlaySlidePlacement } from '../models';
import { ZuiOverlayPosition } from './position';

interface SlidePlacementConfig {
  placement?: ZuiOverlaySlidePlacement;
  width?: string;
}

export class ZuiOverlaySlidePosition extends ZuiOverlayPosition {
  protected override config: SlidePlacementConfig = { placement: ZuiOverlaySlidePlacement.LEFT, width: '30%' };

  constructor(config: SlidePlacementConfig) {
    super();
    this.config = { ...this.config, ...config };
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
