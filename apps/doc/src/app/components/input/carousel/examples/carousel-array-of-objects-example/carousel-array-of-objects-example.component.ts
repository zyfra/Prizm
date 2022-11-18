import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmCarouselArrayContent } from '@prizm-ui/components';

interface SomeEntity {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'prizm-carousel-array-of-objects-example',
  templateUrl: './carousel-array-of-objects-example.component.html',
  styleUrls: ['./carousel-array-of-objects-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCarouselArrayOfObjectsExampleComponent {
  arrayWithObjects = new PrizmCarouselArrayContent<SomeEntity>(
    [
      {
        id: 1,
        title: 'title 1',
        description: 'description 1',
      },
      {
        id: 2,
        title: 'title 2',
        description: 'description 2',
      },
      {
        id: 3,
        title: 'title 3',
        description: 'description 3',
      },
    ],
    (item, el) => item.id === el.id
  );
}

