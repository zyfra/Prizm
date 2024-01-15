import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'prizm-tree-active-color-example',
  templateUrl: './tree-active-color-example.component.html',
  styles: [
    `
      prizm-tree-item.active > .prizm-tree-item__main {
        background: var(--prizm-table-fill-row-active);
        color: var(--prizm-text-icon-primary);
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TreeActiveColorExampleComponent {}
