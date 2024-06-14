import { transformDateIfNeeded } from './date-transform-util';
import { PrizmDay } from './day';
import { PrizmTime } from './time';

describe('transformDateIfNeeded', () => {
  it('should return the value unchanged if it is PrizmDay', () => {
    const day = new PrizmDay(2019, 1, 1);
    const result = transformDateIfNeeded(day);
    expect(day).toEqual(result);
  });

  it('should return the value unchanged if it is an array [PrizmDay | PrizmTime]', () => {
    const day = new PrizmDay(2019, 1, 1);
    const time = new PrizmTime(12, 0);
    const result = transformDateIfNeeded([day, time]);
    expect(result).toEqual([day, time]);
  });

  it('should return an array [PrizmDay, PrizmTime] if Date is passed in', () => {
    const day = new PrizmDay(2019, 1, 1);
    const time = new PrizmTime(18, 30);
    const expectedResult = [day, time];
    const result = transformDateIfNeeded(day);
    expect(expectedResult).toEqual(result);
  });
});
