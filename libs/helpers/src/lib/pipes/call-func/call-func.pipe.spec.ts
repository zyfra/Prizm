/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CallFuncPipe } from './call-func.pipe';
import { PzmCallFuncModule } from './call-func.module';

describe('Pipe: CallFunc', () => {
  const pipe = new CallFuncPipe({} as any);

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms with max function, should return 63', () => {
    const args = [2, 63, 1, 19];
    const func = Math.max;
    expect(pipe.transform(args[0], func, ...args)).toBe(func(...args));
  });

  it('transforms with min function, should return -1', () => {
    const args = [23, 61, 0, -1, 1, 20];
    const func = Math.min;
    expect(pipe.transform(args[0], func, ...args)).toBe(func(...args));
  });
});
