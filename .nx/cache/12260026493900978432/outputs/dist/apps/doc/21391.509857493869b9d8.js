'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [21391],
  {
    21391: n => {
      n.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { PrizmInputCarouselArrayContent } from '@prizm-ui/components';\n\ninterface SomeEntity {\n  id: number;\n  title: string;\n  description: string;\n}\n\n@Component({\n  selector: 'prizm-carousel-array-of-objects-example',\n  templateUrl: './carousel-array-of-objects-example.component.html',\n  styleUrls: ['./carousel-array-of-objects-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PrizmInputCarouselArrayOfObjectsExampleComponent {\n  arrayWithObjects = new PrizmInputCarouselArrayContent<SomeEntity>(\n    [\n      {\n        id: 1,\n        title: 'title 1',\n        description: 'description 1',\n      },\n      {\n        id: 2,\n        title: 'title 2',\n        description: 'description 2',\n      },\n      {\n        id: 3,\n        title: 'title 3',\n        description: 'description 3',\n      },\n    ],\n    (item, el) => item?.id === el?.id\n  );\n}\n";
    },
  },
]);
