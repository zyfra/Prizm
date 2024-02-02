'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [12210],
  {
    12210: o => {
      o.exports =
        "```ts\nimport { NgModule } from '@angular/core';\nimport { PrizmToastModule, prizmToastOptionsProvider } from '@prizm-ui/components';\n\n@NgModule({\n  imports: [\n    // required - import our module\n    PrizmToastModule,\n  ],\n  providers: [\n    /* optional - we can override default options */\n    prizmToastOptionsProvider({\n      timer: 1000,\n    }),\n  ],\n})\nexport class MyModule {}\n```\n";
    },
  },
]);
