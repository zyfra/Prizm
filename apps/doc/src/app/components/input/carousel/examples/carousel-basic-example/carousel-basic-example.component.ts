import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ZuiCarouselArrayContent } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-carousel-basic-example',
  templateUrl: './carousel-basic-example.component.html',
  styleUrls: ['./carousel-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiCarouselBasicExampleComponent {
  carouselContent = new ZuiCarouselArrayContent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (item, el) => item === el);
}

