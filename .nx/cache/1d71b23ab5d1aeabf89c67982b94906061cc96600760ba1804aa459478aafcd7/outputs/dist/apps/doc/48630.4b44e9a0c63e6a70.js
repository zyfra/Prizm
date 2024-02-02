"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[48630],{48630:e=>{e.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { PrizmStepperStatus } from '@prizm-ui/components';\n\ntype StepsMap = { [key: number]: { title: string; status: PrizmStepperStatus; disabled: boolean } };\n\n@Component({\n  selector: 'prizm-stepper-basic-example',\n  templateUrl: './stepper-basic-example.component.html',\n  styleUrls: ['./stepper-basic-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PrizmStepperBasicExampleComponent {\n  currentStep: keyof StepsMap = 1;\n\n  readonly statusItems: Array<PrizmStepperStatus> = ['default', 'success', 'warning', 'danger'];\n\n  steps: StepsMap = {\n    1: { title: '\u0428\u0430\u0433 1', status: 'default', disabled: false },\n    2: { title: '\u0428\u0430\u0433 2', status: 'default', disabled: true },\n    3: { title: '\u0428\u0430\u0433 3', status: 'default', disabled: true },\n    4: { title: '\u0428\u0430\u0433 4', status: 'default', disabled: true },\n    5: { title: '\u0428\u0430\u0433 5', status: 'default', disabled: true },\n  };\n\n  public toPrevStep(): void {\n    this.currentStep--;\n  }\n\n  public toNextStep(): void {\n    this.currentStep++;\n  }\n\n  public get toPrevStepDisabled(): boolean {\n    if (this.currentStep === 1) {\n      return true;\n    }\n\n    if (this.steps[this.currentStep - 1]?.disabled) {\n      return true;\n    }\n\n    return false;\n  }\n\n  public get toNextStepDisabled(): boolean {\n    if (this.currentStep === 5) {\n      return true;\n    }\n\n    if (this.steps[this.currentStep + 1]?.disabled) {\n      return true;\n    }\n\n    return false;\n  }\n}\n"}}]);