'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [57491],
  {
    57491: n => {
      n.exports =
        "import { PrizmNavigationMenuItem, PrizmNavigationMenuToolbarConfig } from '@prizm-ui/components';\n\nexport interface PersistentExpandedValue {\n  [key: string]: boolean;\n}\n\nexport interface CustomGroupConfig {\n  title: string;\n  items: CustomItem[];\n  toolbarConfig?: PrizmNavigationMenuToolbarConfig;\n}\n\nexport interface CustomItem extends PrizmNavigationMenuItem {\n  id: string;\n  groupName?: string;\n  children?: CustomItem[];\n}\n";
    },
  },
]);
