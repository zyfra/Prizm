import { LOCALE_ID, NgModule, SecurityContext } from '@angular/core';
import { PrizmAddonDocModule, PrizmDocMainModule } from '@prizm-ui/doc';
import { AppComponent } from './app.component';
import { GettingStartedComponent } from './documentation/getting-started/getting-started.component';
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
import { PrizmAccordionModule, PrizmToastModule, PrizmToggleModule } from '@prizm-ui/components';
import { PrizmThemeService } from '@prizm-ui/theme';
import { ContactsModule } from './about-prizm/contacts/contacts.module';
import { DesignSystemModule } from './about-prizm/design-system/design-system.module';
import { ForDevelopersModule } from './how-to-work/for-developers/for-developers.module';
import { GettingStartedModule } from './documentation/getting-started/getting-started.module';
import { ReleasePolicyModule } from './about-prizm/release-policy/release-policy.module';

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
    PrizmToggleModule,
    TuiModeModule,
    TuiLinkModule,
    VersionManagerModule,
    PrizmToastModule,
    HttpClientModule,
    PrizmAccordionModule,
    DesignSystemModule,
    ForDevelopersModule,
    ContactsModule,
    GettingStartedModule,
    ReleasePolicyModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
  ],
  declarations: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'ru-RU' }, ...APP_PROVIDERS],
})
export class AppModule {
  constructor(private readonly themeSwitcher: PrizmThemeService) {
    this.themeSwitcher.rootElement = null;
  }
}
