import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-auto-complete-test',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCompleteComponent {
  public countries = [
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Russia', code: 'RU' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' },
  ];

  public selectedCountry = null;
  public suggestions = [];
  public field = 'name';
  public minLength = 1;
  public label = 'Страна';
  public dropdown = true;

  public completeMethod(event): void {
    const query = event.query.toLowerCase();
    console.log(Array.isArray(this.countries));
    this.suggestions = this.countries.filter(country => country.name.toLowerCase().indexOf(query) > -1);
  }
}
