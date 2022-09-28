import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'zuiMonthExample' })
export class ZuiMonthExamplePipe implements PipeTransform {
  private defaultMonthNames = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ];
  public transform(value: number): string {
    return this.defaultMonthNames[value - 1];
  }
}

