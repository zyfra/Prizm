"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[94005],{94005:e=>{e.exports="import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport {\n  PrizmDateTime,\n  PrizmDay,\n  prizmGetInputDateTimeBaseTransformer,\n  PrizmTime,\n} from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-layout-date-time-base-transformer-example',\n  templateUrl: './input-layout-date-time-base-transformer-example.component.html',\n  providers: [prizmGetInputDateTimeBaseTransformer()],\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputLayoutDateTimeBaseTransformerExampleComponent {\n  public readonly value = new UntypedFormControl(\n    new PrizmDateTime(new PrizmDay(2022, 2, 15), new PrizmTime(12, 30))\n  );\n\n  public setDefaultValue(): void {\n    this.value.setValue(PrizmDateTime.fromLocalNativeDate(new Date()));\n  }\n\n  public clear(): void {\n    this.value.setValue(null);\n  }\n}\n"}}]);