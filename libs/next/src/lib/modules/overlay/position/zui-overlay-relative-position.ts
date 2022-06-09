import { ZuiOverlayOutsidePlacement, ZuiOverlayPositionMeta } from '../models';
import { EventBus, setWidthHeight } from '../utils';
import { ZuiOverlayPosition } from './position';

interface ZuiOverlayRelativePositionConfig {
  src: HTMLElement;
  placement?: ZuiOverlayOutsidePlacement;
  autoUpdate?: boolean;
  width?: string | number;
  height?: string | number;
}

export class ZuiOverlayRelativePosition extends ZuiOverlayPosition<ZuiOverlayRelativePositionConfig> {
  protected override config: ZuiOverlayRelativePositionConfig = {
    src: null,
    placement: ZuiOverlayOutsidePlacement.TOP,
    autoUpdate: false,
    width: 'auto',
    height: 'auto'
  };
  obs: MutationObserver;
  constructor(config: ZuiOverlayRelativePositionConfig) {
    super();
    this.updateConfig(config);
  }
  public override init(tid: string): void {
    if (this.config.autoUpdate) this.listenDrag(tid);
  }

  public getPositions(targetEl: HTMLElement): Pick<ZuiOverlayPositionMeta, any> {
    const s = this.getCoords(this.config.src);
    const h = this.getCoords(targetEl);
    let { width: w, height: ht } = this.config;

    w = setWidthHeight(s, h, 'width', w);
    ht = setWidthHeight(s, h, 'height', ht);

    const { pos, props } = this.calculatePos(this.config.placement, s, h);
    return { ...this.round(props), width: w, height: ht, extra: pos };
  }

  private getCoords(elem: HTMLElement): ZuiOverlayPositionMeta {
    return elem.getBoundingClientRect();
  }

  private calc(placement: ZuiOverlayOutsidePlacement, src: any, host: any): {left: number, top: number} {
    const [main, sub] = placement.split('');
    const p = { left: 0, top: 0 };
    if ((main === 't' || main === 'b') && !sub) {
      p.left = src.left + (src.width - host.width) / 2;
    }

    if ((main === 't' || main === 'b') && sub) {
      p.left = src.left;
    }
    if ((main === 't' || main === 'b') && sub === 'r') {
      p.left = src.left + src.width - host.width;
    }
    if (main === 'l') {
      p.left = src.left - host.width;
    }
    if (main === 'r') {
      p.left = src.right;
    }

    if (main === 't') {
      p.top = src.top - host.height;
    }
    if (main === 'b') {
      p.top = src.top + src.height;
    }
    if (main === 'l' || main === 'r') {
      p.top = src.top + (src.height - host.height) / 2;
    }
    if (sub === 't' && (main === 'l' || main === 'r')) {
      p.top = src.top;
    }
    if (sub === 'b' && (main === 'l' || main === 'r')) {
      p.top = src.top + src.height - host.height;
    }
    return p;
  }

  private calculatePos(pos: ZuiOverlayOutsidePlacement, s: any, h: any, c = true): Record<string, any> {
    const props = this.calc(pos, s, h);

    if (c && this.config.autoUpdate && this.isOverflowed({ ...props, width: h.width, height: h.height })) {
      return this.calculatePos(this.nextPosition(pos), s, h, false);
    }

    return { pos, props };
  }

  private isOverflowed(props: { [x: string]: any }): boolean {
    const { innerHeight, innerWidth } = window;
    props.bottom = props.top + props.height;
    props.right = props.left + props.width;
    return props.bottom > innerHeight || props.top <= 0 || props.left <= 0 || props.right > innerWidth;
  }

  private nextPosition(current: ZuiOverlayOutsidePlacement): any {
    const placements = ['t', 'b', 'l', 'r', 'tl', 'bl', 'tr', 'br', 'lt', 'rt', 'lb', 'rb'];

    const index = placements.indexOf(current);
    const even = index % 2 === 0;
    return even ? placements[index + 1] : placements[index - 1];
  }

  private round(props: Record<string, any>): typeof props {
    Object.keys(props).forEach(x => (props[x] = Math.round(props[x])));
    return props;
  }

  private listenDrag(tid: string): void {
    if (this.obs) this.obs.disconnect();
    this.obs = new MutationObserver(mutationsList => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') EventBus.send(tid, 'z_dynpos');
      }
    });

    this.obs.observe(this.config.src, {
      attributeFilter: ['style']
    });
  }
}
