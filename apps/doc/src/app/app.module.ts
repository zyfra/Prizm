import { ZyfraUiRootModule } from "@digital-plant/zyfra-components";
import {NgModule} from '@angular/core';
import {TuiAddonDocModule, TuiDocMainModule} from '@taiga-ui/addon-doc';
// import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {AppComponent} from './app.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutes} from "./app.routes";
import {VersionManagerComponent} from "./version-manager/version-manager.component";
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule, TuiStringifyContentPipeModule, TuiStringifyPipeModule} from '@taiga-ui/kit';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MarkdownModule} from 'ngx-markdown';
import {APP_PROVIDERS} from "./app.providers";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutes,
    MarkdownModule,
    TuiDocMainModule,
    TuiAddonDocModule,
    TuiDataListModule,
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiStringifyContentPipeModule,
    TuiStringifyPipeModule,
      ZyfraUiRootModule
],
  declarations: [
    AppComponent,
    GettingStartedComponent,
    VersionManagerComponent,
  ],
  providers: [
    // {
    //   provide: HIGHLIGHT_OPTIONS,
    //   useValue: {
    //     coreLibraryLoader: () => import('highlight.js/lib/core' as string),
    //     lineNumbersLoader: () => import('highlightjs-line-numbers.js' as string), // Optional, only if you want the line numbers
    //     languages: {
    //       typescript: () => import('highlight.js/lib/languages/typescript' as string),
    //       less: () => import('highlight.js/lib/languages/less' as string),
    //       xml: () => import('highlight.js/lib/languages/xml' as string),
    //     },
    //   },
    // },
    ...APP_PROVIDERS
  ],
})
export class AppModule {}
