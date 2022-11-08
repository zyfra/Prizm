import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmStepperStatus } from '@digital-plant/zui-components';

type StepsMap = { [key: number]: { title: string; status: PrizmStepperStatus; disabled: boolean } };

@Component({
  selector: 'pzm-stepper-vertical-example',
  templateUrl: './stepper-vertical-example.component.html',
  styleUrls: ['./stepper-vertical-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmStepperVerticalExampleComponent {
  currentStep: keyof StepsMap = 1;

  readonly statusItems: Array<PrizmStepperStatus> = ['default', 'success', 'warning', 'danger'];

  steps: StepsMap = {
    1: { title: 'Шаг 1', status: 'default', disabled: false },
    2: { title: 'Шаг 2', status: 'default', disabled: false },
    3: { title: 'Шаг 3', status: 'default', disabled: false },
    4: { title: 'Шаг 4', status: 'default', disabled: false },
    5: { title: 'Шаг 5', status: 'default', disabled: false },
  };

  public toPrevStep(): void {
    this.currentStep--;
  }

  public toNextStep(): void {
    this.currentStep++;
  }

  public get toPrevStepDisabled(): boolean {
    if (this.currentStep === 1) {
      return true;
    }

    if (this.steps[this.currentStep - 1]?.disabled) {
      return true;
    }

    return false;
  }

  public get toNextStepDisabled(): boolean {
    if (this.currentStep === 5) {
      return true;
    }

    if (this.steps[this.currentStep + 1]?.disabled) {
      return true;
    }

    return false;
  }
}

