import { PrizmBaseColor } from '../@core/enums/base-color';
import { PrizmSupportColor } from '../@core/enums/support-color';

export type PrizmColor =
  | PrizmBaseColor
  | PrizmSupportColor
  | 'base-01'
  | 'base-02'
  | 'base-03'
  | 'base-04'
  | 'base-05'
  | 'base-06'
  | 'base-07'
  | 'base-08'
  | 'base-09';
