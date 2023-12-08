import { PrizmIcons } from './icons/prizm-icons.model';

export type PrizmIconsNameSubset<T extends Readonly<PrizmIcons[]>> = T[number]['name'];
export * from './icons/prizm-icons.model';
