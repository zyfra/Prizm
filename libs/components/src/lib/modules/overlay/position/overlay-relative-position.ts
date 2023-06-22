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

const HINT_DIRECTIONS = ['t', 'b', 'l', 'r', 'tl', 'bl', 'tr', 'br', 'lt', 'rt', 'lb', 'rb'] as const;

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

  public override getPositions(targetEl: HTMLElement): Pick<PrizmOverlayPositionMeta, any> {
    const s = this.getCoords(this.config.element);
    const h = this.getCoords(targetEl);
    let { width: w, height: ht } = this.config;

    w = setWidthHeight(s, h, 'width', w);
    ht = setWidthHeight(s, h, 'height', ht);

    const { pos, props } = this.calculatePos(this.config.placement, s, h);

    // Try to keep hint host within viewport.
    const { innerHeight, innerWidth } = window;
    const coord = {
      top: Math.min(Math.max(0, props.top), innerHeight - h.height),
      left: Math.min(Math.max(0, props.left), innerWidth - h.width),
    };

    return { ...this.round(coord), width: w, height: ht, extra: pos };
  }

  public reCalc(): void {
    EventBus.send(this.zid, 'z_dynpos');
  }

  private getCoords(elem: HTMLElement): DOMRect {
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

    return p;
  }

  private calculatePos(
    pos: PrizmOverlayOutsidePlacement,
    s: any,
    h: any
  ): { pos: string; props: { left: number; top: number } } {
    const props = this.calc(pos, s, h);

    if (!this.config.autoReposition || !this.isOverflowed({ ...props, width: h.width, height: h.height })) {
      return { pos, props };
    }

    const fallback = this.oppositeDirection(pos);

    // First - check the opposite direction (for backward compatibility and most likely correct value),
    // if still overflows - check all available placements
    pos =
      [fallback, ...HINT_DIRECTIONS].find(direction => {
        // Already checked?
        if (direction === pos) return false;

        const props = this.calc(direction, s, h);
        return !this.isOverflowed({ ...props, width: h.width, height: h.height });
      }) ?? fallback;

    return { pos, props: this.calc(pos, s, h) };
  }

  private isOverflowed(props: { [x: string]: any }): boolean {
    const { innerHeight, innerWidth } = window;

    props.bottom = props.top + props.height;
    props.right = props.left + props.width;

    return props.bottom > innerHeight || props.top < 0 || props.left < 0 || props.right > innerWidth;
  }

  private oppositeDirection(current: PrizmOverlayOutsidePlacement): any {
    const index = HINT_DIRECTIONS.indexOf(current);
    const even = index % 2 === 0;

    return even ? HINT_DIRECTIONS[index + 1] : HINT_DIRECTIONS[index - 1];
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
