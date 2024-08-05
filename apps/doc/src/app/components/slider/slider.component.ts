import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmSliderCnobValuePosition, PrizmSliderOrientation, PrizmSliderValue } from '@prizm-ui/components';

import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmFormControlHelpers } from '@prizm-ui/helpers';
import { Observable, map, merge, timer } from 'rxjs';

@Component({
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSliderExampleComponent {
  _min = 0;
  get min(): number {
    return this._min;
  }

  set min(value: number) {
    this._min = value;
    if (this.range && this.fc.value[0] < this._min) {
      // TODO fix type
      this.fc.patchValue([this._min, this.fc.value[1]] as any);
      return;
    }

    if (!this.range && this.fc.value < this._min) {
      this.fc.patchValue(this._min);
      return;
    }
  }

  _max = 100;
  get max(): number {
    return this._max;
  }

  set max(value: number) {
    this._max = value;
    if (this.range && this.fc.value[1] > this._max) {
      // TODO fix type
      this.fc.patchValue([this.fc.value[1], this._max] as any);
      return;
    }

    if (!this.range && this.fc.value > this._max) {
      this.fc.patchValue(this._max);
      return;
    }
  }
  step = 1;

  showValue = true;
  showMinMax = true;

  private _range = false;

  get range(): boolean {
    return this._range;
  }
  set range(value: boolean) {
    if (value === true) {
      // TODO fix type
      this.fc.patchValue([this.min, this.max] as any);
    } else {
      this.fc.patchValue(this.min);
    }

    this._range = value;
  }

  cnobValuePosition: PrizmSliderCnobValuePosition = 'top';
  cnobValuePositionValues: Array<PrizmSliderCnobValuePosition> = ['top', 'right', 'bottom', 'left'];
  readonly valueSingleVariants: Array<PrizmSliderValue> = [10, 25, 37, 73];
  readonly valueRangeVariants: Array<PrizmSliderValue> = [
    [10, 20],
    [0, 50],
    [4, 87],
  ];

  _orientation: PrizmSliderOrientation = 'horizontal';
  get orientation(): PrizmSliderOrientation {
    return this._orientation;
  }

  set orientation(value: PrizmSliderOrientation) {
    if (value === 'vertical') {
      this.minHeight = (Math.abs(this.max - this.min) / this.step) * 2;
    } else {
      this.minHeight = 0;
    }

    this._orientation = value;
  }
  orientationValues: Array<PrizmSliderOrientation> = ['horizontal', 'vertical'];

  minHeight = 0;

  fc = new UntypedFormControl(0);

  get disabled(): boolean {
    return this.fc.disabled;
  }

  set disabled(value: boolean) {
    if (value) {
      this.fc.disable();
    } else {
      this.fc.enable();
    }
  }

  readonly basicExample: TuiDocExample = {
    TypeScript: import('./examples/slider-basic-example/slider-basic-example.component?raw'),
    HTML: import('./examples/slider-basic-example/slider-basic-example.component.html?raw'),
  };

  readonly verticalExample: TuiDocExample = {
    TypeScript: import('./examples/slider-vertical-example/slider-vertical-example.component?raw'),
    HTML: import('./examples/slider-vertical-example/slider-vertical-example.component.html?raw'),
  };

  readonly stepExample: TuiDocExample = {
    TypeScript: import('./examples/slider-step-example/slider-step-example.component?raw'),
    HTML: import('./examples/slider-step-example/slider-step-example.component.html?raw'),
  };

  readonly rangeExample: TuiDocExample = {
    TypeScript: import('./examples/slider-range-example/slider-range-example.component?raw'),
    HTML: import('./examples/slider-range-example/slider-range-example.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public updateValueOfControl(value: PrizmSliderValue): void {
    this.fc.setValue(value);
  }

  public getDisabledFromControl$(control: UntypedFormControl): Observable<boolean> {
    return merge(timer(0, 100), PrizmFormControlHelpers.getDisabled$(control)).pipe(
      map(() => PrizmFormControlHelpers.getDisabled(control))
    );
  }

  public isTouchedFromControl$(control: UntypedFormControl): Observable<boolean> {
    return merge(timer(0, 100), PrizmFormControlHelpers.getValue$(control)).pipe(map(c => control.touched));
  }

  public isDirtyFromControl$(control: UntypedFormControl): Observable<boolean> {
    return merge(timer(0, 100), PrizmFormControlHelpers.getValue$(control)).pipe(map(c => control.dirty));
  }

  public isPristineFromControl$(control: UntypedFormControl): Observable<boolean> {
    return merge(timer(0, 100), PrizmFormControlHelpers.getValue$(control)).pipe(map(c => control.pristine));
  }

  public updateStateOfControl(control: UntypedFormControl, newState: boolean): void {
    PrizmFormControlHelpers.setDisabled(control, newState);
  }

  public setTouched(control: UntypedFormControl, newState: boolean): void {
    if (newState) control.markAsTouched({});
    else control.markAsUntouched();
  }
  public setDirty(control: UntypedFormControl, newState: boolean): void {
    if (newState) control.markAsDirty();
    else control.markAsPristine();
  }
  public setPristine(control: UntypedFormControl, newState: boolean): void {
    if (newState) control.markAsPristine();
    else control.markAsDirty();
  }
}
