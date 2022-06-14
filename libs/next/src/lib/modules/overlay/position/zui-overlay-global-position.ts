import {ZuiOverlayInsidePlacement} from '../models';
import {setWidthHeight} from '../utils';
import {ZuiOverlayAbstractPosition} from './position';

interface ZuiOverlayGlobalPositionConfig {
  placement?: ZuiOverlayInsidePlacement;
  offset?: number;
  width?: string | number;
  height?: string | number;
}

interface OverlayOffsetPosition {
  top: number,
  bottom: number,
  left: number,
  right: number,
}

export class ZuiOverlayGlobalPosition extends ZuiOverlayAbstractPosition<ZuiOverlayGlobalPositionConfig> {

  constructor(config: ZuiOverlayGlobalPositionConfig) {
    super();
    this.updateConfig({
      ...{ placement: ZuiOverlayInsidePlacement.CENTER, width: 100, height: 100, offset: 0 },
      ...config,
    });
  }
  public getPositions(hostEl?: HTMLElement) {
    const host = hostEl.getBoundingClientRect() as any;
    const src = {
      width: window['innerWidth'],
      height: window['innerHeight']
    };
    let { width: w, height: h } = this.config;

    w = setWidthHeight(src, host, 'width', w);
    h = setWidthHeight(src, host, 'height', h);

    const props = this.calc(this.config.placement, src, host);
    return {
      ...props,
      width: w,
      height: h,
      position: 'fixed',
      extra: this.config.placement
    };
  }

  private calc(placement: ZuiOverlayInsidePlacement, src: any, host: any): Partial<OverlayOffsetPosition> {
    const [main, sub] = placement.split('');
    const result: Partial<OverlayOffsetPosition> = {};

    if (main === 't') {
      result.top = this.config.offset;
    }
    if (main === 'b') {
      result.bottom = this.config.offset;
    }
    if ((main === 'l' || main === 'r' || main === 'c') && !sub) {
      result.top = (src.height - host.height) / 2;
    }

    if ((main === 't' || main === 'b' || main === 'c') && !sub) {
      result.left = (src.width - host.width) / 2;
    }
    if ((main === 'l' && !sub) || sub === 'l') {
      result.left = this.config.offset;
    }
    if ((main === 'r' && !sub) || sub === 'r') {
      result.right = this.config.offset;
    }

    return result;
  }
}
