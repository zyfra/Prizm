'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [41036],
  {
    41036: n => {
      n.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-skeleton-base-example',\n  templateUrl: './skeleton-base-example.component.html',\n  styles: [\n    `\n      .header {\n        margin: 8px 0;\n        padding: 8px 0;\n        border-bottom: 1px solid var(--prizm-v3-background-stroke);\n      }\n\n      .body {\n        margin-top: 16px;\n        display: flex;\n        gap: 1rem;\n        flex-direction: column;\n      }\n    `,\n  ],\n})\nexport class PrizmSkeletonBaseExampleComponent implements OnInit {\n  public items = [];\n  public readonly activeControl = new UntypedFormControl(false);\n  public readonly selectControl = new UntypedFormControl();\n  public readonly toggleControl = new UntypedFormControl();\n  public readonly value2Disabled = new UntypedFormControl(false);\n\n  public ngOnInit(): void {\n    this.value2Disabled.disable();\n  }\n}\n";
    },
  },
]);
