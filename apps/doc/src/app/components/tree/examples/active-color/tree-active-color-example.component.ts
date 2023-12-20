import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'prizm-tree-active-color-example',
  templateUrl: './tree-active-color-example.component.html',
  styles: [
    `
      prizm-tree-item.active > .prizm-tree-item__main {
        background: var(--prizm-v3-table-fill-row-active);
        color: var(--prizm-v3-text-icon-primary);
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TreeActiveColorExampleComponent {}
