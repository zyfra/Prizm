/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { PrizmToTypePipe } from './to-type.pipe';

describe('Pipe: ToTypee', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new PrizmToTypePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "string"', () => {
    const testString: `test` = 'test';
    expect(pipe.transform(testString, testString)).toBe(testString);
  });
});
