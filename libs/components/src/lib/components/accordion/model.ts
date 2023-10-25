import { PolymorphContent } from '../../directives/polymorph/types/content';

export type PrizmAccordionItemData = {
  icon: PolymorphContent<unknown>;
  title: PolymorphContent<unknown>;
  isExpanded: boolean;
  disabled: boolean;
  focused: boolean;
};
