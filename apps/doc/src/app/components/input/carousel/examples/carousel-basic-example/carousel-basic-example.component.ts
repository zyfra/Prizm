import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PzmCarouselArrayContent } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-carousel-basic-example',
  templateUrl: './carousel-basic-example.component.html',
  styleUrls: ['./carousel-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PzmCarouselBasicExampleComponent {
  carouselContent = new PzmCarouselArrayContent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (item, el) => item === el);
}

