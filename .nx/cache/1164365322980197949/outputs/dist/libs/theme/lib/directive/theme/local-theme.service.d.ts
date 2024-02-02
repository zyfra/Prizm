import { PrizmTheme } from '../../types';
import * as i0 from '@angular/core';
export declare class PrizmLocalThemeService {
  private readonly theme$$;
  readonly theme$: import('rxjs').Observable<string | null>;
  setTheme(theme: PrizmTheme | null): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PrizmLocalThemeService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<PrizmLocalThemeService>;
}
