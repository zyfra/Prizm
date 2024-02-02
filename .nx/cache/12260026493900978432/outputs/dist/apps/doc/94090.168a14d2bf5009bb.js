"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[94090],{94090:e=>{e.exports="import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';\nimport { PrizmStepperStatus } from '@prizm-ui/components';\n\ntype StepsMap = { [key: number]: { title: string; status: PrizmStepperStatus; disabled: boolean } };\n\n@Component({\n  selector: 'prizm-stepper-async-example',\n  templateUrl: './stepper-async-example.component.html',\n  styleUrls: ['./stepper-async-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PrizmStepperAsyncExampleComponent {\n  currentStep: keyof StepsMap = 1;\n\n  readonly statusItems: Array<PrizmStepperStatus> = ['default', 'success', 'warning', 'danger'];\n\n  steps: StepsMap = {\n    1: { title: '\u0428\u0430\u0433 1', status: 'default', disabled: false },\n    2: { title: '\u0428\u0430\u0433 2', status: 'default', disabled: false },\n    3: { title: '\u0428\u0430\u0433 3', status: 'default', disabled: false },\n  };\n\n  constructor(private cdr: ChangeDetectorRef) {}\n\n  public toPrevStep(): void {\n    this.currentStep--;\n  }\n\n  public toNextStep(): void {\n    this.currentStep++;\n  }\n\n  public get toPrevStepDisabled(): boolean {\n    if (this.currentStep === 1) {\n      return true;\n    }\n\n    if (this.steps[this.currentStep - 1]?.disabled) {\n      return true;\n    }\n\n    return false;\n  }\n\n  public get toNextStepDisabled(): boolean {\n    if (this.currentStep === 5) {\n      return true;\n    }\n\n    if (this.steps[this.currentStep + 1]?.disabled) {\n      return true;\n    }\n\n    return false;\n  }\n\n  public onSelectStep(stepIndex: number): void {\n    this.currentStep = stepIndex;\n    console.log('CS', this.currentStep);\n    setTimeout(() => {\n      // eslint-disable-next-line no-constant-condition\n      while (true) {\n        const newStatus = this.statusItems[this.random(0, 3)];\n        if (newStatus !== this.steps[stepIndex].status) {\n          this.steps[stepIndex].status = newStatus;\n          this.cdr.markForCheck();\n          break;\n        }\n      }\n    }, 1000);\n  }\n\n  private random(min: number, max: number): number {\n    return Math.floor(Math.random() * (max - min + 1) + min);\n  }\n}\n"}}]);