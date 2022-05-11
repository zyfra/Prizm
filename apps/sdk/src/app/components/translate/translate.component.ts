import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Language, TranslateService } from '@digital-plant/zyfra-translate';

const DefaultLang = Language.ruRU;

@Component({
  selector: 'zyfra-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslateComponent {
  public lang: Language = DefaultLang;

  constructor(private readonly translateService: TranslateService) {
    translateService.addChunk({
      defaultLang: DefaultLang,
      id: 'sdk',
      supportedLangs: [Language.enUS, Language.ruRU],
    });

    translateService.use(DefaultLang);
  }

  public toggleTranslate(): void {
    const lang = this.translateService.lang == Language.enUS ? Language.ruRU : Language.enUS;

    this.translateService.use(lang);
  }
}
