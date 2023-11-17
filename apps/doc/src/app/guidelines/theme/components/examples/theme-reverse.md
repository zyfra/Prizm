```ts
import { PrizmTheme, PrizmThemeInvertedDirective, PrizmThemeInvertedValuesService } from '@prizm-ui/theme';

  @Input()
  set invertedTheme(theme: PrizmTheme) {
    this.themeInvertedValuesService.value$$.next({
      ...this.themeInvertedValuesService.value$$.value,
      '*': theme ?? null,
    });
  }

  readonly themeInvertedDirective = new PrizmThemeInvertedDirective();
```
