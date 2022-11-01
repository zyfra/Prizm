import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ZuiCarouselArrayContent, PzmInputSize, PzmInputStatus } from '@digital-plant/zui-components';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'zui-carousel-example',
  templateUrl: './carousel-example.component.html',
  styleUrls: ['./carousel-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiCarouselExampleComponent {
  value = 5;
  formControl = new FormControl();
  public label = 'Заголовок';
  public placeholder = '';
  public outer: false;
  public size: PzmInputSize = 'l';
  public sizesOuter: PzmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PzmInputSize[] = ['l', 'm'];
  public disabled = false;
  public status: PzmInputStatus = 'default';
  public statuses: PzmInputStatus[] = ['default', 'success', 'warning', 'danger'];
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

  public readonly zyfraCarouselYearMonthExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/carousel-year-month-example/carousel-year-month-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/carousel-year-month-example/carousel-year-month-example.component.html'
    ),
    PIPE: import('!!raw-loader!./examples/carousel-year-month-example/month.pipe.ts'),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}

