import { Component } from '@angular/core';
import { PrizmLanguageName, PrizmLanguageSwitcher } from '@prizm-ui/i18n';

@Component({
  selector: 'prizm-language-switcher-example',
  templateUrl: './language-switcher-example.component.html',
  styles: [
    `
      button:first-child {
        margin-right: 16px;
      }
    `,
  ],
})
export class PrizmLanguageSwitcherExampleComponent {
  constructor(private readonly prizmLanguageSwitcher: PrizmLanguageSwitcher) {}

  public changeLanguage(lang: string) {
    this.prizmLanguageSwitcher.setLanguage(lang as PrizmLanguageName);
  }
}
