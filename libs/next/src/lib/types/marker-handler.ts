import { ZuiDay } from '../@core/date-time';
import { ZuiColor } from './color';
import { ZuiHandler } from './handler';

export type ZuiMarkerHandler = ZuiHandler<
    ZuiDay,
    [] | [ZuiColor | string] | [ZuiColor | string, ZuiColor | string]
>;
