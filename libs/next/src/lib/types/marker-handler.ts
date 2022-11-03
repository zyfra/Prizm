import { PrizmDay } from '../@core/date-time';
import { PrizmColor } from './color';
import { PrizmHandler } from './handler';

export type PrizmMarkerHandler = PrizmHandler<
    PrizmDay,
    [] | [PrizmColor | string] | [PrizmColor | string, PrizmColor | string]
>;
