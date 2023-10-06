import { of } from 'rxjs';
import { moveInEventLoopIteration } from '@prizm-ui/helpers';

describe('rxjs:moveInEventLoopIteration', () => {
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
