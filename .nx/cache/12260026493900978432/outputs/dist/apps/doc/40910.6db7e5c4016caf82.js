'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [40910],
  {
    40910: n => {
      n.exports =
        "import { PrizmNavigationMenuItem } from '@prizm-ui/components';\nimport { v4 } from 'uuid';\n\nexport interface CustomItem extends PrizmNavigationMenuItem {\n  id: string;\n  children?: CustomItem[];\n}\n\nexport const MOKED_ITEMS: CustomItem[] = [\n  {\n    id: v4(),\n    text: 'Topmost (text)',\n    children: [\n      {\n        id: v4(),\n        text: '1 (text)',\n        icon: 'editor_decor_collage_fill',\n        children: [\n          {\n            id: v4(),\n            text: '1-1 (text)',\n            icon: 'editor_decor_subskrit_up',\n            children: [\n              {\n                id: v4(),\n                text: '1-1-1 (text)',\n              },\n              {\n                id: v4(),\n                text: '1-1-2 (text)',\n              },\n              {\n                id: v4(),\n                text: '1-1-3 (text)',\n              },\n            ],\n          },\n          {\n            id: v4(),\n            text: '1-2 (text)',\n            icon: 'logistics_transportation_airplane_side_view',\n            children: [\n              {\n                id: v4(),\n                text: '1-2-1 (text)',\n                icon: 'documents_folders_folder',\n                children: [\n                  {\n                    id: v4(),\n                    text: '1-2-1-1 (text)',\n                  },\n                  {\n                    id: v4(),\n                    text: '1-2-1-2 (text)',\n                  },\n                  {\n                    id: v4(),\n                    text: '1-2-1-3 (text)',\n                  },\n                ],\n              },\n              {\n                id: v4(),\n                text: '1-2-2 (text)',\n              },\n              {\n                id: v4(),\n                text: '1-2-3 (text)',\n                icon: 'documents_folders_folder',\n                children: [\n                  {\n                    id: v4(),\n                    text: '1-2-3-1 (text)',\n                  },\n                  {\n                    id: v4(),\n                    text: '1-2-3-2 (text)',\n                  },\n                  {\n                    id: v4(),\n                    text: '1-2-3-3 (text)',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            id: v4(),\n            text: '1-3 (text)',\n            icon: 'editor_decor_polyline',\n            children: [\n              {\n                id: v4(),\n                text: '1-3-1 (text)',\n              },\n              {\n                id: v4(),\n                text: '1-3-2 (text)',\n              },\n              {\n                id: v4(),\n                text: '1-3-3 (text)',\n              },\n            ],\n          },\n        ],\n      },\n      {\n        id: v4(),\n        text: '2 (text)',\n        icon: 'documents_folders_folder',\n        children: [\n          {\n            id: v4(),\n            text: '2-1 (text)',\n            icon: 'documents_folders_folder',\n          },\n          {\n            id: v4(),\n            text: '2-2 (text)',\n            icon: 'documents_folders_folder',\n            children: [\n              {\n                id: v4(),\n                text: '2-2-1 (text)',\n              },\n              {\n                id: v4(),\n                text: '2-2-2 (text)',\n              },\n              {\n                id: v4(),\n                text: '2-2-3 (text)',\n              },\n            ],\n          },\n        ],\n      },\n      {\n        id: v4(),\n        text: '3 (text)',\n        icon: 'documents_folders_folder',\n        children: [\n          {\n            id: v4(),\n            text: '3-1 (text)',\n          },\n        ],\n      },\n    ],\n  },\n];\n";
    },
  },
]);
