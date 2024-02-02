import { PrizmIconSvgEnum, prizmIconSvg } from '../icons-svg/svg/my-icons';
import { PrizmIcons, PrizmIconsNameSubset } from './24';
export type PrizmIconsName = PrizmIconsNameSubset<PrizmIcons[]> | string;
export interface PrizmIcon {
    name: PrizmIconSvgEnum | prizmIconSvg | string;
    data: string;
}
