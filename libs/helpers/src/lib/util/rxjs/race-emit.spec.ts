import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { raceEmit } from '@prizm-ui/helpers';

describe('rxjs:raceEmit', () => {
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
