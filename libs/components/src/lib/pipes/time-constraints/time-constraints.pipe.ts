import { Pipe, PipeTransform } from '@angular/core';

import { PrizmDateTime, PrizmDay, PrizmTime } from '../../@core';
import { PrizmDateTimeMinMax } from '../../components';

@Pipe({ name: 'prizmTimeConstraints', standalone: true })
export class PrizmTimeConstraintsPipe implements PipeTransform {
  public transform(
    timeItems: readonly PrizmTime[],
    currentDate: PrizmDay | null | undefined,
    min: PrizmDay | [PrizmDay, PrizmTime] | PrizmDateTimeMinMax,
    max: PrizmDay | [PrizmDay, PrizmTime] | PrizmDateTimeMinMax
  ): PrizmTime[] {
    let items = [...timeItems];

    if (!currentDate || (min instanceof PrizmDay && max instanceof PrizmDay)) {
      return items;
    }

    if (min instanceof PrizmDateTime) {
      min = min.time ? [min.day, min.time] : min.day;
    }

    if (max instanceof PrizmDateTime) {
      max = max.time ? [max.day, max.time] : max.day;
    }

    const minDate = min instanceof PrizmDay ? null : min[0];
    const maxDate = max instanceof PrizmDay ? null : max[0];

    if (minDate && currentDate?.daySame(minDate)) {
      items = items.filter(el => el.hours >= (min as [PrizmDay, PrizmTime])[1].hours);
    }

    if (maxDate && currentDate?.daySame(maxDate)) {
      items = items.filter(el => el.hours <= (max as [PrizmDay, PrizmTime])[1].hours);
    }

    return items;
  }
}
