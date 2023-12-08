import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmButtonComponent, PrizmFileUploadComponent } from '@prizm-ui/components';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { InternationalizationComponent } from './internationalization.component';
import { PrizmLanguageSwitcherExampleComponent } from './examples/language-switcher/language-switcher-example.component';
import { PrizmLanguageName, PrizmLanguageSwitcher } from '@prizm-ui/i18n';
import { AsyncPipe } from '@angular/common';

@NgModule({
  exports: [InternationalizationComponent],
  declarations: [InternationalizationComponent, PrizmLanguageSwitcherExampleComponent],
  imports: [
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InternationalizationComponent)),
    PrizmFileUploadComponent,
    PrizmButtonComponent,
    AsyncPipe,
  ],
})
export class InternationalizationModule {
  constructor(private readonly prizmLanguage: PrizmLanguageSwitcher) {
    this.prizmLanguage.setLanguage('en' as PrizmLanguageName);
  }
}
