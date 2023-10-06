import { Directive, Input, OnChanges, Self } from '@angular/core';
import { PrizmThemeInvertedValues } from './model';
import { PrizmThemeInvertedValuesService } from './theme-inverted-values.service';

@Directive({
  selector: '[prizmThemeInvertedValues]',
  providers: [PrizmThemeInvertedValuesService],
})
export class PrizmThemeInvertedValuesDirective implements OnChanges {
  @Input()
  public prizmThemeInvertedValues!: PrizmThemeInvertedValues;

  constructor(@Self() readonly themeInvertedValuesService: PrizmThemeInvertedValuesService) {}

  ngOnChanges(): void {
    this.themeInvertedValuesService.value$$.next(this.prizmThemeInvertedValues);
  }
}
