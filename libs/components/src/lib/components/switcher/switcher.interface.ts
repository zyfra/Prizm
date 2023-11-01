import { PrizmHintOptions } from '../../directives';
import { PolymorphContent } from '../../directives/polymorph/types/content';

export interface PrizmSwitcherItem<ID extends PrizmSwitcherId = PrizmSwitcherId> {
  title?: string | number;
  icon?: PolymorphContent;
  disabled?: boolean;
  hide?: boolean;
  id?: ID;
  hint?: prizmSwitcherHint;
}

export type PrizmSwitcherSize = 'm' | 's' | 'l';

export type PrizmSwitcherType = 'inner' | 'outer';
export type PrizmSwitcherId = number | string;

export type prizmSwitcherHint = {
  value: PolymorphContent | null;
  options?: Partial<PrizmHintOptions>;
};
