'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [16834],
  {
    16834: n => {
      n.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { IBreadcrumb } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-breadcrumbs-example-with-icon',\n  templateUrl: './breadcrumbs-example-with-icon.component.html',\n  styleUrls: ['./breadcrumbs-example-with-icon.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class BreadcrumbsExampleWithIconComponent {\n  public breadcrumbs: IBreadcrumb[] = [\n    {\n      name: '',\n      icon: 'social-home-breadcrumbs',\n    },\n    {\n      name: 'Lady',\n      icon: 'account',\n    },\n    {\n      name: \"I'm your knight in\",\n      icon: 'account-contact-sync',\n    },\n    {\n      name: 'Shining',\n      icon: 'alerts-alarm-light',\n    },\n    {\n      name: 'Armor',\n      icon: 'account-shield-1',\n    },\n  ];\n\n  private currentBreadcrumb: IBreadcrumb | null = null;\n\n  public breadcrumbChange(current: IBreadcrumb): void {\n    this.currentBreadcrumb = current;\n  }\n}\n";
    },
  },
]);
