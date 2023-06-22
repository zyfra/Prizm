import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmInputCarouselArrayContent } from '@prizm-ui/components';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'prizm-carousel-basic-example',
  templateUrl: './carousel-basic-example.component.html',
  styleUrls: ['./carousel-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmInputCarouselBasicExampleComponent {
  control = new FormControl(5, [Validators.required]);
  carouselContent = new PrizmInputCarouselArrayContent(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    (item, el) => item === el
  );
}
