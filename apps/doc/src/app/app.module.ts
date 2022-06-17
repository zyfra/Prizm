import {ZyfraUiRootModule} from "@digital-plant/zyfra-components";
import {NgModule} from '@angular/core';
import {TuiAddonDocModule, TuiDocMainModule} from '@taiga-ui/addon-doc';
// import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {AppComponent} from './app.component';
import {GettingStartedComponent} from './getting-started/getting-started.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutes} from "./app.routes";
import {VersionManagerComponent} from "./version-manager/version-manager.component";
import {TuiDataListModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiSelectModule, TuiStringifyContentPipeModule, TuiStringifyPipeModule} from '@taiga-ui/kit';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MarkdownModule} from 'ngx-markdown';
import {APP_PROVIDERS} from "./app.providers";
import {LogoModule} from "./logo/logo.module";
import {VersionManagerModule} from "./version-manager/version-manager.module";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutes,
    TuiTextfieldControllerModule,
    MarkdownModule,
    LogoModule,
    TuiDocMainModule,
    TuiAddonDocModule,
    TuiDataListModule,
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiStringifyContentPipeModule,
    TuiStringifyPipeModule,
    ZyfraUiRootModule,
    VersionManagerModule
],
  declarations: [
    AppComponent,
    GettingStartedComponent,
  ],
  providers: [
    ...APP_PROVIDERS
  ],
})
export class AppModule {}
