import { PrizmCronService } from '@prizm-ui/components';
import { PrizmCronUiHourType } from './model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getArrWithStringNumbers } from './util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrizmCronUiListService {
  // readonly weeks = [
  //   'Понедельник',
  //   'Вторник',
  //   'Среда',
  //   'Четверг',
  //   'Пятница',
  //   'Суббота',
  //   'Воскресенье',
  // ];
  // readonly monthCronKeys = [
  //   'JAN',
  //   'FEB',
  //   'MAR',
  //   'APR',
  //   'MAY',
  //   'JUN',
  //   'AUG',
  //   'SEP',
  //   'OCT',
  //   'NOV',
  //   'DEC'
  // ];
  readonly monthFromFirst = getArrWithStringNumbers(12, 1, false);
  readonly hoursFromZero = getArrWithStringNumbers(24, 0, true);
  readonly hoursFromOne = getArrWithStringNumbers(24, 1, false);
  readonly secondsFromZero = getArrWithStringNumbers(60, 0, true);
  readonly secondsFromOne = getArrWithStringNumbers(60, 1, false);
  readonly minutesFromZero = getArrWithStringNumbers(60, 0, true);
  readonly minutesFromOne = getArrWithStringNumbers(60, 1, false);
}
