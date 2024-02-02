'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [45950],
  {
    45950: n => {
      n.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { IBreadcrumb } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-breadcrumbs-example-projection',\n  templateUrl: './breadcrumbs-example-projection.component.html',\n  styleUrls: ['./breadcrumbs-example-projection.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class BreadcrumbsExampleProjectionComponent {\n  public breadcrumbs = [\n    { link: '/components/button', name: 'Button' },\n    { link: '/components/split-button', name: 'Split' },\n    { link: '/components/icon-button', name: 'Icon' },\n  ];\n\n  private currentBreadcrumb: IBreadcrumb | null = null;\n\n  public breadcrumbChange(current: IBreadcrumb): void {\n    this.currentBreadcrumb = current;\n  }\n}\n";
    },
  },
]);
