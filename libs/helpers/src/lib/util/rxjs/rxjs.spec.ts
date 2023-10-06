import {
  filterFalsy,
  filterTruthy,
  filterNotNullish,
  filterNullish,
  mapUndefinedToNull,
  raceEmit,
  moveInEventLoopIteration,
} from './rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('RXJS js operators', () => {
  // Тест для filterFalsy: проверяем, что все ложные значения фильтруются
  it('filterFalsy', done => {
    of(null, false, undefined, '', 0)
      .pipe(filterFalsy())
      .subscribe({
        next: value => expect(value).toBeFalsy(),
        complete: () => done(),
      });
  });

  // Тест для filterTruthy: проверяем, что все истинные значения проходят фильтр
  it('filterTruthy', done => {
    of('value', 1, {}, [])
      .pipe(filterTruthy())
      .subscribe({
        next: value => expect(value).toBeTruthy(),
        complete: () => done(),
      });
  });

  // Тест для filterNotNullish: проверяем, что все ненулевые значения проходят фильтр
  it('filterNotNullish', done => {
    of('value', 1, {}, [])
      .pipe(filterNotNullish())
      .subscribe({
        next: value => expect(value).not.toBeNull(),
        complete: () => done(),
      });
  });

  // Тест для filterNullish: проверяем, что все нулевые значения проходят фильтр
  it('filterNullish', done => {
    of(null, undefined)
      .pipe(filterNullish())
      .subscribe({
        next: value => expect(value).toBeNull(),
        complete: () => done(),
      });
  });

  // Тест для mapUndefinedToNull: проверяем, что все неопределенные значения преобразуются в null
  it('mapUndefinedToNull', done => {
    of(undefined)
      .pipe(mapUndefinedToNull())
      .subscribe({
        next: value => expect(value).toBeNull(),
        complete: () => done(),
      });
  });
});
