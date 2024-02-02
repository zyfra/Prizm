"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[30890],{30890:e=>{e.exports="import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDay, PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-layout-date-time-base-example',\n  templateUrl: './input-layout-date-time-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputLayoutDateTimeBaseExampleComponent {\n  public readonly value = new UntypedFormControl([new PrizmDay(2022, 2, 15), new PrizmTime(12, 30)]);\n\n  public setDefaultValue(): void {\n    this.value.setValue([new PrizmDay(2022, 1, 1), new PrizmTime(6, 0)]);\n  }\n\n  public clear(): void {\n    this.value.setValue(null);\n  }\n}\n"}}]);