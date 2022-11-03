import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmCarouselArrayContent } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-carousel-light-example',
  templateUrl: './carousel-light-example.component.html',
  styleUrls: ['./carousel-light-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCarouselLightExampleComponent {
  carouselContent = new PrizmCarouselArrayContent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (item, el) => item === el);
}

