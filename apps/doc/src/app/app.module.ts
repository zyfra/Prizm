import { LOCALE_ID, NgModule, SecurityContext } from '@angular/core';
import { TuiAddonDocModule, TuiDocMainModule } from '@taiga-ui/addon-doc';
import { AppComponent } from './app.component';
import { GettingStartedComponent } from './documentation/getting-started/getting-started.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app.routes';
import { TuiDataListModule, TuiLinkModule, TuiModeModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiSelectModule, TuiStringifyContentPipeModule, TuiStringifyPipeModule, TuiToggleModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { APP_PROVIDERS } from './app.providers';
import { LogoModule } from './logo/logo.module';
import { VersionManagerModule } from './version-manager/version-manager.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './documentation/about/about.component';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { LicenseComponent } from './about-prizm/license/license.component';
import { UpdatesComponent } from './about-prizm/updates/updates.component';
import { DesignSystemComponent } from './about-prizm/design-system/design-system.component';
import { ForDesignersComponent } from './how-to-start/for-designers/for-designers.component';
import { ForDevelopersComponent } from './how-to-start/for-developers/for-developers.component';
import { MigrationComponent } from './how-to-start/migration/migration.component';


registerLocaleData(
  localeRu
);
@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutes,
    TuiTextfieldControllerModule,
    LogoModule,
    TuiDocMainModule,
    TuiAddonDocModule,
    TuiDataListModule,
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiStringifyContentPipeModule,
    TuiStringifyPipeModule,
    TuiToggleModule,
    TuiModeModule,
    TuiLinkModule,
    VersionManagerModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
],
  declarations: [
    AppComponent,
    GettingStartedComponent,
    AboutComponent,
    UpdatesComponent,
    DesignSystemComponent,
    ForDesignersComponent,
    ForDevelopersComponent,
    MigrationComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "ru-RU" },
    ...APP_PROVIDERS
  ],
})
export class AppModule {}
