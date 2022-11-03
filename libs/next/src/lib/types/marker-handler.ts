import { PzmDay } from '../@core/date-time';
import { PzmColor } from './color';
import { PzmHandler } from './handler';

export type PzmMarkerHandler = PzmHandler<
    PzmDay,
    [] | [PzmColor | string] | [PzmColor | string, PzmColor | string]
>;
