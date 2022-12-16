import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmSliderCnobValuePosition, PrizmSliderOrientation } from '@prizm-ui/components';

import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';

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
      this.fc.patchValue([this._min, this.fc.value[1]]);
      return;
    }

    if (!this.range && this.fc.value < this._min) {
      this.fc.patchValue(this._min);
      return;
    }
  }
  minValues = [-400, -200, 0, 200, 400];

  _max = 100;
  get max(): number {
    return this._max;
  }

  set max(value: number) {
    this._max = value;
    if (this.range && this.fc.value[1] > this._max) {
      this.fc.patchValue([this.fc.value[1], this._max]);
      return;
    }

    if (!this.range && this.fc.value > this._max) {
      this.fc.patchValue(this._max);
      return;
    }
  }
  maxValues = [-800, -400, -100, 100, 400, 800];
  step = 1;
  stepValues = [1, 2, 5, 10];

  showValue = true;
  showMinMax = true;

  private _range = false;

  get range(): boolean {
    return this._range;
  }
  set range(value: boolean) {
    if (value === true) {
      this.fc.patchValue([this.min, this.max]);
    } else {
      this.fc.patchValue(this.min);
    }

    this._range = value;
  }

  cnobValuePosition: PrizmSliderCnobValuePosition = 'top';
  cnobValuePositionValues: Array<PrizmSliderCnobValuePosition> = ['top', 'right', 'bottom', 'left'];

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

  fc = new FormControl(0);

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
    TypeScript: import('!!raw-loader!./examples/slider-basic-example/slider-basic-example.component'),
    HTML: import('!!raw-loader!./examples/slider-basic-example/slider-basic-example.component.html'),
  };

  readonly verticalExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/slider-vertical-example/slider-vertical-example.component'),
    HTML: import('!!raw-loader!./examples/slider-vertical-example/slider-vertical-example.component.html'),
  };

  readonly stepExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/slider-step-example/slider-step-example.component'),
    HTML: import('!!raw-loader!./examples/slider-step-example/slider-step-example.component.html'),
  };

  readonly rangeExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/slider-range-example/slider-range-example.component'),
    HTML: import('!!raw-loader!./examples/slider-range-example/slider-range-example.component.html'),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
