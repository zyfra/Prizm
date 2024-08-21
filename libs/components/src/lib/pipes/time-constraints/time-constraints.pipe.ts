import { Pipe, PipeTransform } from '@angular/core';

import { PrizmDay, PrizmTime } from '../../@core';

@Pipe({ name: 'prizmTimeConstraints', standalone: true })
export class PrizmTimeConstraintsPipe implements PipeTransform {
  public transform(
    timeItems: readonly PrizmTime[],
    currentDate: PrizmDay | null,
    min: PrizmDay | [PrizmDay, PrizmTime],
    max: PrizmDay | [PrizmDay, PrizmTime]
  ): PrizmTime[] {
    let items = [...timeItems];

    if (!currentDate || (min instanceof PrizmDay && max instanceof PrizmDay)) {
      return items;
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
