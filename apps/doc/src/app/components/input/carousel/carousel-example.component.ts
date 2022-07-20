import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ZuiCarouselArrayContent, ZuiInputSize, ZuiInputStatus } from '@digital-plant/zui-components';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'zui-carousel-example',
  templateUrl: './carousel-example.component.html',
  styleUrls: ['./carousel-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselExampleComponent {
  value = 5;
  formControl = new FormControl();
  public label = 'Заголовок';
  public placeholder = '';
  public outer: false;
  public size: ZuiInputSize = 'l';
  public sizesOuter: ZuiInputSize[] = ['l', 'm', 's'];
  public sizesInner: ZuiInputSize[] = ['l', 'm'];
  public disabled = false;
  public status: ZuiInputStatus = 'default';
  public statuses: ZuiInputStatus[] = ['default', 'success', 'warning', 'danger'];
  public required = false;
  carouselContent = new ZuiCarouselArrayContent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (item, el) => item === el);
  lightMode = false;
  public readonly zyfraCarouselBasicExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/carousel-basic-example/carousel-basic-example.component.ts'),
    HTML: import('!!raw-loader!./examples/carousel-basic-example/carousel-basic-example.component.html'),
  };
  public readonly zyfraCarouselLightExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/carousel-light-example/carousel-light-example.component.ts'),
    HTML: import('!!raw-loader!./examples/carousel-light-example/carousel-light-example.component.html'),
  };
  public readonly zyfraCarouselArrayofObjectsExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/carousel-array-of-objects-example/carousel-array-of-objects-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/carousel-array-of-objects-example/carousel-array-of-objects-example.component.html'
    ),
  };
  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}

