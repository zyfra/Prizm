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

  describe('raceEmit', () => {
    // Тест для raceEmit: проверяем, что первый источник, который эмитирует значение в заданном временном интервале, проходит
    it('should emit the first observable to emit within a given time frame', done => {
      const source1 = of('first').pipe(delay(100));
      const source2 = of('second').pipe(delay(400));
      raceEmit(250, source1, source2).subscribe({
        next: value => expect(value).toBe('first'),
        complete: () => done(),
      });
    });
  });

  describe('moveInEventLoopIteration', () => {
    // Тест для moveInEventLoopIteration: проверяем, что значение эмитируется без задержки, если count равен 0
    it('should emit the value without delay if count is 0', done => {
      const start = Date.now();
      of('test')
        .pipe(moveInEventLoopIteration(0))
        .subscribe(() => {
          const duration = Date.now() - start;
          expect(duration).toBeLessThan(5);
          done();
        });
    });

    // Тест для moveInEventLoopIteration: проверяем, что значение эмитируется с задержкой, если count больше 0
    it('should emit the value with delay if count is greater than 0', done => {
      const start = Date.now();
      of('test')
        .pipe(moveInEventLoopIteration(1))
        .subscribe(() => {
          const duration = Date.now() - start;
          expect(duration).toBeGreaterThanOrEqual(1);
          done();
        });
    });

    // Тест для moveInEventLoopIteration: проверяем, что задержка увеличивается с увеличением count
    it('should increase delay with larger count', done => {
      const start1 = Date.now();
      const start2 = Date.now();
      let duration1: number;
      let duration2: number;

      of('test')
        .pipe(moveInEventLoopIteration(1))
        .subscribe(() => {
          duration1 = Date.now() - start1;

          of('test')
            .pipe(moveInEventLoopIteration(2))
            .subscribe(() => {
              duration2 = Date.now() - start2;

              expect(duration2).toBeGreaterThan(duration1);
              done();
            });
        });
    });
  });
});
