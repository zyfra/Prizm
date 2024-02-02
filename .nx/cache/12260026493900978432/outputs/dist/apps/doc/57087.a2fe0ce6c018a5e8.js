'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [57087],
  {
    57087: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { PrizmToastService } from '@prizm-ui/components';\nimport { BehaviorSubject } from 'rxjs';\nimport { FormControl } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-zone-event-base-example',\n  templateUrl: './base.component.html',\n  styles: [\n    `\n      :host {\n        display: flex;\n        flex-direction: column;\n        gap: 16px;\n      }\n\n      .zone {\n        padding: 1rem;\n        border-radius: 0.5rem;\n        border: 1px solid #ccc;\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n    `,\n  ],\n})\nexport class PrizmZoneEventBaseExampleComponent {\n  readonly activeControl = new FormControl(true);\n  constructor(private readonly toastService: PrizmToastService) {}\n\n  public log(msg: string, isWarning = false): void {\n    this.toastService.create(msg, {\n      appearance: isWarning ? 'warning' : 'success',\n    });\n  }\n}\n";
    },
  },
]);
