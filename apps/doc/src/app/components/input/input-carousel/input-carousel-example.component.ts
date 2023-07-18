import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PrizmCarouselArrayContent,
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
} from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-carousel-example',
  templateUrl: './input-carousel-example.component.html',
  styleUrls: ['./input-carousel-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmInputCarouselExampleComponent {
  public border = false;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  readonly layoutKey = 'PrizmInputLayoutComponent';
  readonly controlKey = 'PrizmInputCarouselComponent';

  value = 5;
  formControl = new UntypedFormControl();
  public label = 'Заголовок';
  public placeholder = '';
  public outer: false;
  public size: PrizmInputSize = 'l';
  public sizesOuter: PrizmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PrizmInputSize[] = ['l', 'm'];
  public disabled = false;
  public testIdPostfix: string;
  public control = new UntypedFormControl();
  public required = false;
  carouselContent = new PrizmCarouselArrayContent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (item, el) => item === el);
  lightMode = false;

  public readonly zyfraCarouselBasicExample: TuiDocExample = {
    TypeScript: import('./examples/carousel-basic-example/carousel-basic-example.component.ts?raw'),
    HTML: import('./examples/carousel-basic-example/carousel-basic-example.component.html?raw'),
  };

  public readonly zyfraCarouselLightExample: TuiDocExample = {
    TypeScript: import('./examples/carousel-light-example/carousel-light-example.component.ts?raw'),
    HTML: import('./examples/carousel-light-example/carousel-light-example.component.html?raw'),
  };

  public readonly zyfraCarouselArrayofObjectsExample: TuiDocExample = {
    TypeScript: import(
      './examples/carousel-array-of-objects-example/carousel-array-of-objects-example.component.ts?raw'
    ),
    HTML: import(
      './examples/carousel-array-of-objects-example/carousel-array-of-objects-example.component.html?raw'
    ),
  };

  public readonly zyfraCarouselYearMonthExample: TuiDocExample = {
    TypeScript: import('./examples/carousel-year-month-example/carousel-year-month-example.component.ts?raw'),
    HTML: import('./examples/carousel-year-month-example/carousel-year-month-example.component.html?raw'),
    PIPE: import('./examples/carousel-year-month-example/month.pipe.ts?raw'),
  };

  public readonly carouselAsInputExample: TuiDocExample = {
    Module: import('./examples/input-as-carousel/input-as-carousel.module.ts?raw'),
    Component: import('./examples/input-as-carousel/input-as-carousel.component.ts?raw'),
    HTML: import('./examples/input-as-carousel/input-as-carousel.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
