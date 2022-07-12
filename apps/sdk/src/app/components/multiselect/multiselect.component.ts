import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Country } from './multiselect.types';

@Component({
  selector: 'zyfra-multiselect-test',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiselectComponent {
  countries: Country[];
  selectedCountries: Country[];

  constructor() {
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];
  }
}
