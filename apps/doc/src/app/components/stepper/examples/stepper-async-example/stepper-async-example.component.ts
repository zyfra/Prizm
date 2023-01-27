import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PrizmStepperStatus } from '@prizm-ui/components';

type StepsMap = { [key: number]: { title: string; status: PrizmStepperStatus; disabled: boolean } };

@Component({
  selector: 'prizm-stepper-async-example',
  templateUrl: './stepper-async-example.component.html',
  styleUrls: ['./stepper-async-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmStepperAsyncExampleComponent {
  currentStep: keyof StepsMap = 1;

  readonly statusItems: Array<PrizmStepperStatus> = ['default', 'success', 'warning', 'danger'];

  steps: StepsMap = {
    1: { title: 'Шаг 1', status: 'default', disabled: false },
    2: { title: 'Шаг 2', status: 'default', disabled: false },
    3: { title: 'Шаг 3', status: 'default', disabled: false },
  };

  constructor(private cdr: ChangeDetectorRef) {}

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

  public onSelectStep(stepIndex: number): void {
    this.currentStep = stepIndex;
    console.log('CS', this.currentStep);
    setTimeout(() => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const newStatus = this.statusItems[this.random(0, 3)];
        if (newStatus !== this.steps[stepIndex].status) {
          this.steps[stepIndex].status = newStatus;
          this.cdr.markForCheck();
          break;
        }
      }
    }, 1000);
  }

  private random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
