'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [17249],
  {
    17249: n => {
      n.exports =
        "import { Component, HostListener } from '@angular/core';\nimport { PrizmIconComponent, PrizmTreeItemContentComponent } from '@prizm-ui/components';\nimport { CommonModule } from '@angular/common';\n\n@Component({\n  selector: 'prizm-folders',\n  template: `\n    <prizm-icon class=\"prizm-space_right-2\" [iconClass]=\"icon\" size=\"16\"></prizm-icon>\n    <ng-container [ngTemplateOutlet]=\"context.template\"></ng-container>\n  `,\n  styleUrls: ['folder.component.less'],\n  standalone: true,\n  imports: [PrizmIconComponent, CommonModule],\n})\nexport class FoldersComponent extends PrizmTreeItemContentComponent {\n  public get icon(): string {\n    return this.isExpandable ? 'files-folder' : 'files-alarm';\n  }\n\n  @HostListener('click')\n  public onHostClick(): void {\n    this.onClick();\n  }\n}\n";
    },
  },
]);
