import { PolymorphContent } from '@prizm-ui/components';

export type PrizmAccordionItemData = {
  icon: PolymorphContent<any>;
  title: PolymorphContent<any>;
  isExpanded: boolean;
  disabled: boolean;
  focused: boolean;
};
