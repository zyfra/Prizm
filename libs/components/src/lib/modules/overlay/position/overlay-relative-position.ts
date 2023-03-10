import { PrizmOverlayOutsidePlacement, PrizmOverlayPositionMeta } from '../models';
import { EventBus, setWidthHeight } from '../utils';
import { PrizmOverlayAbstractPosition } from './position';

export interface PrizmOverlayRelativePositionConfig {
  element: HTMLElement;
  placement?: PrizmOverlayOutsidePlacement;
  // re-calculate position on scroll, resize
  autoReposition?: boolean;
  width?: string | number;
  height?: string | number;
}

export class PrizmOverlayRelativePosition extends PrizmOverlayAbstractPosition<PrizmOverlayRelativePositionConfig> {
  obs: MutationObserver;
  constructor(config: PrizmOverlayRelativePositionConfig) {
    super();
    this.updateConfig({
      ...{
        element: null,
        placement: PrizmOverlayOutsidePlacement.TOP,
        autoReposition: false,
        width: 'auto',
        height: 'auto',
      },
      ...config,
    });
  }

  public override init(zid: string): void {
    super.init(zid);
    if (this.config.autoReposition) this.listenDrag(this.zid);
  }

  public getPositions(targetEl: HTMLElement): Pick<PrizmOverlayPositionMeta, any> {
    const s = this.getCoords(this.config.element);
    const h = this.getCoords(targetEl);
    let { width: w, height: ht } = this.config;

    w = setWidthHeight(s, h, 'width', w);
    ht = setWidthHeight(s, h, 'height', ht);

    const { pos, props } = this.calculatePos(this.config.placement, s, h);
    return { ...this.round(props), width: w, height: ht, extra: pos };
  }

  public reCalc(): void {
    EventBus.send(this.zid, 'z_dynpos');
  }

  private getCoords(elem: HTMLElement): PrizmOverlayPositionMeta {
    return elem.getBoundingClientRect();
  }

  private calc(placement: PrizmOverlayOutsidePlacement, src: any, host: any): { left: number; top: number } {
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

    p.top = Math.max(0, p.top);
    p.left = Math.max(0, p.left);

    return p;
  }

  private calculatePos(
    pos: PrizmOverlayOutsidePlacement,
    s: any,
    h: any,
    canReCalcPosition = true
  ): { pos: string; props: Record<string, unknown> } {
    const props = this.calc(pos, s, h);

    if (
      canReCalcPosition &&
      this.config.autoReposition &&
      this.isOverflowed({ ...props, width: h.width, height: h.height }, pos)
    ) {
      return this.calculatePos(this.nextPosition(pos), s, h, false);
    }

    return { pos, props };
  }

  private isOverflowed(props: { [x: string]: any }, placement: PrizmOverlayOutsidePlacement): boolean {
    const [main] = placement.split('');
    const { innerHeight, innerWidth } = window;

    /* TODO later add re-position by x coordinates after is-overflowed */
    if (main !== 't' && main !== 'b') {
      if (main === 'r') return props.left + props.width > innerWidth;
      if (main === 'l') return props.left - props.width < 0;
      return false;
    }

    props.bottom = props.top + props.height;
    props.right = props.left + props.width;

    return props.bottom > innerHeight || props.top <= 0 || props.left <= 0 || props.right > innerWidth;
  }

  private nextPosition(current: PrizmOverlayOutsidePlacement): any {
    const placements = ['t', 'b', 'l', 'r', 'tl', 'bl', 'tr', 'br', 'lt', 'rt', 'lb', 'rb'];

    const index = placements.indexOf(current);
    const even = index % 2 === 0;

    return even ? placements[index + 1] : placements[index - 1];
  }

  private round(props: Record<string, any>): typeof props {
    Object.keys(props).forEach(x => (props[x] = Math.round(props[x])));
    return props;
  }

  private listenDrag(zid: string): void {
    if (this.obs) this.obs.disconnect();
    this.obs = new MutationObserver(mutationsList => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') EventBus.send(zid, 'z_dynpos');
      }
    });

    this.obs.observe(this.config.element, {
      attributeFilter: ['style'],
    });
  }
}
