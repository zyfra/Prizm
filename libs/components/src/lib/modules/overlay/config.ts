import { PrizmOverlayConfig } from './models';
import { noop } from 'rxjs';

export const PrizmOverlayDefaultConfig: PrizmOverlayConfig = {
  containerClass: 'z-overlay',
  bodyClass: 'z-open',
  wrapperClass: '',
  backdropClass: '',
  backdrop: false,
  closeOnDocClick: false,
  listenWindowEvents: true,
  closeOnEsc: false,
  windowResizeCallback: noop,
  docClickCallback: noop,
};
