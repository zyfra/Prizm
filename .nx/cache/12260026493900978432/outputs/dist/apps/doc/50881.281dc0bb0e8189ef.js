'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [50881],
  {
    50881: t => {
      t.exports =
        '<prizm-stepper\n  [currentStep]="currentStep"\n  [title]="\'Stepper basic example\'"\n  (selectStep)="onSelectStep($event)"\n>\n  <ng-template\n    [prizmStepperStep]="1"\n    [title]="steps[1].title"\n    [status]="steps[1].status"\n    [disabled]="steps[1].disabled"\n  >\n    <h2>Step 1</h2>\n    <div>Status: {{ steps[1].status }}</div>\n  </ng-template>\n\n  <ng-template\n    [prizmStepperStep]="2"\n    [title]="steps[2].title"\n    [status]="steps[2].status"\n    [disabled]="steps[2].disabled"\n  >\n    <h2>Step 2</h2>\n    <div>Status: {{ steps[2].status }}</div>\n  </ng-template>\n\n  <ng-template\n    [prizmStepperStep]="3"\n    [title]="steps[3].title"\n    [status]="steps[3].status"\n    [disabled]="steps[3].disabled"\n  >\n    <h2>Step 3</h2>\n    <div>Status: {{ steps[3].status }}</div>\n  </ng-template>\n\n  <div class="footer" prizmStepperFooter>\n    <button\n      [disabled]="toPrevStepDisabled"\n      (click)="toPrevStep()"\n      prizmButton\n      appearanceType="outline"\n      appearance="primary"\n      size="l"\n    >\n      \u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u0448\u0430\u0433\n    </button>\n    <button\n      *ngIf="currentStep !== 3"\n      [disabled]="toNextStepDisabled"\n      (click)="toNextStep()"\n      prizmButton\n      appearanceType="outline"\n      appearance="primary"\n      size="l"\n    >\n      \u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433\n    </button>\n\n    <button *ngIf="currentStep === 3" prizmButton appearanceType="outline" appearance="success" size="l">\n      \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c\n    </button>\n  </div>\n</prizm-stepper>\n';
    },
  },
]);
