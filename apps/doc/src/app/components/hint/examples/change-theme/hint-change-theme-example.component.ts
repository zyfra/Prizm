import { Component } from '@angular/core';
import { PRIZM_HINT_DEFAULT_OPTIONS, PrizmHintOptions } from '@prizm-ui/components';

@Component({
  selector: 'prizm-hint-change-theme-example',
  templateUrl: './hint-change-theme-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmHintChangeThemeExampleComponent {
  public readonly prizmHintThemeVariants: ReadonlyArray<PrizmHintOptions['theme']> = [null, 'dark', 'light'];
  public prizmHintTheme: PrizmHintOptions['theme'] = PRIZM_HINT_DEFAULT_OPTIONS.theme;
  public hintText = 'Текст подсказки';

  public setTheme(theme: PrizmHintOptions['theme']) {
    this.prizmHintTheme = theme;
  }
}
