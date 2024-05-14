import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmLanguageSwitcher } from './language-switcher.service';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'prizmLang',
  standalone: true,
})
export class PrizmLanguagePipe implements PipeTransform {
  constructor(private readonly languageSwitcher: PrizmLanguageSwitcher) {}

  public transform<T = unknown>(value: Record<string, T>, failLang: T): Observable<T> {
    return this.languageSwitcher.language$.pipe(
      map(lang => {
        return value[lang] ?? failLang;
      })
    );
  }
}
