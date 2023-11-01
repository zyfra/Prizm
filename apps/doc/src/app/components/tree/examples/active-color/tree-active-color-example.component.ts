import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'prizm-tree-active-color-example',
  templateUrl: './tree-active-color-example.component.html',
  styles: [
    `
      prizm-tree-item.active > .prizm-tree-item__main {
        background: var(--prizm-lite-b130-20);
        color: var(--prizm-text-contrast);
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TreeActiveColorExampleComponent {}
