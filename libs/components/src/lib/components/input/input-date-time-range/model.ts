import { PrizmDateTime } from '../../../@core/date-time/date-time';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmTime } from '../../../@core/date-time/time';

export type PrizmDateTimeMinMax = PrizmDay | [PrizmDay, PrizmTime] | PrizmDateTime;
