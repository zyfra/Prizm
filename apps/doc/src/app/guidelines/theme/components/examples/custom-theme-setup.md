```ts
import { PrizmThemeService } from '@prizm-ui/theme';

export class AppComponent {
  constructor(public readonly theme: PrizmThemeService) {}

  public setCustomLightTheme(): void {
    this.theme.update('customLight');
  }

  public setCustomDarkTheme(): void {
    this.theme.update('customDark');
  }
}
```
