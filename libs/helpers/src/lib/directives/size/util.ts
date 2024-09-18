import { PRIZM_DEFAULT_SIZE } from './const';

export function prizmSetDefaultSize(size: string) {
  return {
    provide: PRIZM_DEFAULT_SIZE,
    useValue: size,
  };
}
