import { PolymorphContent } from '../../directives/polymorph/types/content';

export type PrizmAccordionItemData = {
  icon: PolymorphContent<any>;
  title: PolymorphContent<any>;
  isExpanded: boolean;
  disabled: boolean;
  focused: boolean;
};
