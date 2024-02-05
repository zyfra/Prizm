import { PrizmIcons, PrizmIconsNameSubset } from './24';
import { prizmIconSvg, PrizmIconSvgEnum } from '../icons-svg';

export type PrizmIconsName = PrizmIconsNameSubset<PrizmIcons[]> | string;

export interface PrizmIcon {
  name: PrizmIconSvgEnum | prizmIconSvg | string;
  data: string;
}
