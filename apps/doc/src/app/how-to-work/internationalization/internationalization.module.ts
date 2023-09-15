import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAccordionModule, PrizmFileUploadModule, PrizmButtonModule } from '@prizm-ui/components';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { InternationalizationComponent } from './internationalization.component';
import { PrizmLanguageSwitcherExampleComponent } from './examples/language-switcher/language-switcher-example.component';
import { PrizmLanguageName, PrizmLanguageSwitcher } from '@prizm-ui/i18n';

@NgModule({
  exports: [InternationalizationComponent],
  declarations: [InternationalizationComponent, PrizmLanguageSwitcherExampleComponent],
  imports: [
    PrizmAddonDocModule,
    PrizmAccordionModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InternationalizationComponent)),
    PrizmFileUploadModule,
    PrizmButtonModule,
  ],
})
export class InternationalizationModule {
  constructor(private readonly prizmLanguage: PrizmLanguageSwitcher) {
    this.prizmLanguage.setLanguage('en' as PrizmLanguageName);
  }
}
