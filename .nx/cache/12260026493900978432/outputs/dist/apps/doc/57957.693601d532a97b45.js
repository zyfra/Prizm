'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [57957],
  {
    57957: n => {
      n.exports =
        '<button (click)="show()" type="button" prizmButton>Show SideBar</button>\n\n<ng-template #contentExample>\n  <div style="height: 100%; display: flex; align-items: center">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n    mollit anim id est laborum.\n  </div>\n</ng-template>\n<div style="margin-top: 16px">\n  <prizm-doc-documentation [hasTestId]="false">\n    <ng-template\n      [(documentationPropertyValue)]="position"\n      [documentationPropertyValues]="positionVariants"\n      documentationPropertyName="position"\n      documentationPropertyType="PrizmOverlayInsidePlacement"\n    >\n      Position\n    </ng-template>\n\n    <ng-template\n      [(documentationPropertyValue)]="dismissible"\n      documentationPropertyName="dismissible"\n      documentationPropertyType="boolean"\n    >\n      Dismissible\n    </ng-template>\n    <ng-template\n      [(documentationPropertyValue)]="backdrop"\n      documentationPropertyName="backdrop"\n      documentationPropertyType="boolean"\n    >\n      Backdrop\n    </ng-template>\n  </prizm-doc-documentation>\n</div>\n';
    },
  },
]);
