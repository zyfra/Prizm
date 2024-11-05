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
    const date = new Date(2019, 1, 1, 18, 30);
    const expectedResult = [day, time];
    const result = transformDateIfNeeded(date);
    expect(expectedResult).toEqual(result);
  });

  it('should return an array [PrizmDay, PrizmTime] if valid ISOString is passed in', () => {
    const date = new Date();
    const day = new PrizmDay(date.getFullYear(), date.getMonth(), date.getDate());
    const time = new PrizmTime(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    const dateString = date.toISOString();
    const expectedResult = [day, time];
    const result = transformDateIfNeeded(dateString);
    expect(expectedResult).toEqual(result);
  });

  it('should return an array [PrizmDay, PrizmTime] if valid UTCString is passed in', () => {
    const date = new Date();
    const day = new PrizmDay(date.getFullYear(), date.getMonth(), date.getDate());
    const time = new PrizmTime(date.getHours(), date.getMinutes(), date.getSeconds());
    const dateString = date.toUTCString();
    const expectedResult = [day, time];
    const result = transformDateIfNeeded(dateString);
    expect(expectedResult).toEqual(result);
  });

  it('should return a PrizmDay if flag dayOnly === true is passed in', () => {
    const date = new Date();
    const dateString = date.toUTCString();
    const expectedResult = new PrizmDay(date.getFullYear(), date.getMonth(), date.getDate());
    const result = transformDateIfNeeded(dateString, true);
    expect(expectedResult).toEqual(result);
  });
});
