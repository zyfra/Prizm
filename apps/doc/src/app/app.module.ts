import {NgModule} from '@angular/core';
import {TuiAddonDocModule, TuiDocMainModule} from '@taiga-ui/addon-doc';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {AppComponent} from './app.component';
import {ZyfraButtonModule} from "@digital-plant/zyfra-components";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    TuiDocMainModule,
    TuiAddonDocModule,
    ZyfraButtonModule
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core' as string),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js' as string), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript' as string),
          less: () => import('highlight.js/lib/languages/less' as string),
          xml: () => import('highlight.js/lib/languages/xml' as string),
        },
      },
    },
  ],
})
export class AppModule {}
