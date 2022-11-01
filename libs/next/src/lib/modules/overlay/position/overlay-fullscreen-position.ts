import {PzmOverlayConfig, PzmOverlayPositionMeta} from '../models';
import {PzmOverlayAbstractPosition} from './position';

export class ZuiOverlayFullscreenPosition extends PzmOverlayAbstractPosition {
  public getPositions(): PzmOverlayPositionMeta {
    return { top: 0, left: 0, width: '100%', height: '100%', position: 'fixed' };
  }
}
