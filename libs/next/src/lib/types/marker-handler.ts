import { PzmDay } from '../@core/date-time';
import { PzmColor } from './color';
import { ZuiHandler } from './handler';

export type PzmMarkerHandler = ZuiHandler<
    PzmDay,
    [] | [PzmColor | string] | [PzmColor | string, PzmColor | string]
>;
