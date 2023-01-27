import { PrizmOverlayConfig, PrizmOverlayPositionMeta } from '../models';
import { PrizmOverlayAbstractPosition } from './position';

export class PrizmOverlayFullscreenPosition extends PrizmOverlayAbstractPosition {
  public getPositions(): PrizmOverlayPositionMeta {
    return { top: 0, left: 0, width: '100%', height: '100%', position: 'fixed' };
  }
}
