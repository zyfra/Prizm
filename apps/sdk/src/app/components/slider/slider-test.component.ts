import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'zyfra-slider-test',
  templateUrl: './slider-test.component.html',
  styleUrls: ['./slider-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderTestComponent {
  public ngModel = 20;
  public min = 0;
  public max = 100;
  public step = 1;
}
