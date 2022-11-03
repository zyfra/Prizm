import { PzmBaseColor } from '../@core/enums/base-color';
import { PzmSupportColor } from '../@core/enums/support-color';

export type PzmColor =
    | PzmBaseColor
    | PzmSupportColor
    | 'base-01'
    | 'base-02'
    | 'base-03'
    | 'base-04'
    | 'base-05'
    | 'base-06'
    | 'base-07'
    | 'base-08'
    | 'base-09';
