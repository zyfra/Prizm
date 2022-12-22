import { LOCALE_ID, NgModule, SecurityContext } from '@angular/core';
import { PrizmAddonDocModule, PrizmDocMainModule } from '@prizm/doc-base';
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
import { AboutComponent } from './documentation/about/about.component';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { DesignSystemComponent } from './about-prizm/design-system/design-system.component';
import { ForDesignersComponent } from './how-to-start/for-designers/for-designers.component';
import { ForDevelopersComponent } from './how-to-start/for-developers/for-developers.component';
import { MigrationComponent } from './how-to-start/migration/migration.component';
import { PrizmAccordionModule, PrizmThemeService, PrizmToggleModule } from '@prizm-ui/components';

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
    HttpClientModule,
    PrizmAccordionModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
  ],
  declarations: [
    AppComponent,
    GettingStartedComponent,
    AboutComponent,
    DesignSystemComponent,
    ForDesignersComponent,
    ForDevelopersComponent,
    MigrationComponent,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru-RU' }, ...APP_PROVIDERS],
})
export class AppModule {
  constructor(private readonly themeSwitcher: PrizmThemeService) {
    this.themeSwitcher.rootElement = null;
  }
}
