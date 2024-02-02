"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[18726],{18726:n=>{n.exports="import { ChangeDetectionStrategy, Component } from '@angular/core';\nimport { PolymorphComponent, PrizmOverlayOutsidePlacement } from '@prizm-ui/components';\nimport { PrizmHintSomeComponent } from './some.component';\n\n@Component({\n  selector: 'prizm-hint-with-component-example',\n  templateUrl: './hint-with-component-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PrizmHintWithComponentExampleComponent {\n  readonly component = new PolymorphComponent(PrizmHintSomeComponent);\n  readonly direction = PrizmOverlayOutsidePlacement.BOTTOM;\n}\n"}}]);