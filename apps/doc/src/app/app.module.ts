import { LOCALE_ID, NgModule, SecurityContext } from '@angular/core';
import { PrizmAddonDocModule, PrizmDocMainModule } from '@prizm-ui/doc';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app.routes';
import {
  TuiDataListModule,
  TuiLinkModule,
  TuiModeModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiSelectModule,
  TuiStringifyContentPipeModule,
  TuiStringifyPipeModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { APP_PROVIDERS } from './app.providers';
import { PrizmDocLogoModule } from './logo/logo.module';
import { VersionManagerModule } from './version-manager/version-manager.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { PrizmAccordionModule, PrizmToastModule, PrizmToggleComponent } from '@prizm-ui/components';
import { PrizmThemeService } from '@prizm-ui/theme';
import { ContactsModule } from './about-prizm/contacts/contacts.module';
import { DesignSystemModule } from './about-prizm/design-system/design-system.module';
import { ForDevelopersModule } from './how-to-work/for-developers/for-developers.module';
import { ReleasePolicyModule } from './about-prizm/release-policy/release-policy.module';
import { ServiceLevelAgreementModule } from './about-prizm/service-level-agreement/service-level-agreement.module';
import { RoadmapModule } from './about-prizm/roadmap/roadmap.module';
import { TransitionModule } from './how-to-work/transition/transition.module';
import { AddComponentModule } from './how-to-work/add-component/add-component.module';
import { SetTaskModule } from './how-to-work/set-task/set-task.module';
import { IntroductionModule } from './forZIIoT/introduction/introduction.module';
import { LibraryRequirementsModule } from './forZIIoT/library-requirements/library-requirements.module';
import { PRIZM_ENGLISH_LANGUAGE, PRIZM_RUSSIAN_LANGUAGE, prizmLanguageSwitcher } from '@prizm-ui/i18n';

registerLocaleData(localeRu);
@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutes,
    TuiTextfieldControllerModule,
    PrizmDocLogoModule,
    PrizmDocMainModule,
    PrizmAddonDocModule,
    TuiDataListModule,
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiStringifyContentPipeModule,
    TuiStringifyPipeModule,
    TuiToggleModule,
    PrizmToggleComponent,
    TuiModeModule,
    TuiLinkModule,
    VersionManagerModule,
    PrizmToastModule,
    HttpClientModule,
    PrizmAccordionModule,
    DesignSystemModule,
    ForDevelopersModule,
    ContactsModule,
    ReleasePolicyModule,
    ServiceLevelAgreementModule,
    RoadmapModule,
    TransitionModule,
    AddComponentModule,
    SetTaskModule,
    IntroductionModule,
    LibraryRequirementsModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
  ],
  declarations: [AppComponent],
  providers: [
    ...prizmLanguageSwitcher(async lang => {
      if (lang === 'russian') return PRIZM_RUSSIAN_LANGUAGE;
      if (lang === 'english') return { ...PRIZM_ENGLISH_LANGUAGE };

      return PRIZM_RUSSIAN_LANGUAGE;
    }),
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    ...APP_PROVIDERS,
  ],
})
export class AppModule {
  constructor(private readonly themeSwitcher: PrizmThemeService) {}
}
