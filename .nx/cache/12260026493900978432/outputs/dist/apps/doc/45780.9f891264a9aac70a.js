'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [45780],
  {
    45780: o => {
      o.exports =
        "import './polyfills';\n\nimport { enableProdMode } from '@angular/core';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\n\nimport { AppModule } from './app/app.module';\n\nplatformBrowserDynamic().bootstrapModule(AppModule).then(ref => {\n  // Ensure Angular destroys itself on hot reloads.\n  if (window['ngRef']) {\n    window['ngRef'].destroy();\n  }\n  window['ngRef'] = ref;\n\n  // Otherwise, log the boot error\n}).catch(err => console.error(err));\n";
    },
  },
]);
