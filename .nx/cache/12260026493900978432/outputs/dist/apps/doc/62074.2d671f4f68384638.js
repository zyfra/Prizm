"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[62074],{62074:n=>{n.exports='<button (click)="show()" type="button" prizmButton>Show SideBar</button>\n\n<div\n  #parentPanel\n  style="\n    height: 400px;\n    margin: 10px 0;\n    position: relative;\n    border: 1px solid var(--tui-base-03);\n    border-radius: var(--tui-radius-m);\n  "\n></div>\n\n<ng-template #contentExample>\n  <h4>Check Dropdown Host Parent Container And Position</h4>\n  <prizm-select [formControl]="control" [items]="items" label="Validators"> </prizm-select>\n</ng-template>\n\n<div style="margin-top: 16px">\n  <prizm-doc-documentation [hasTestId]="false">\n    <ng-template\n      [(documentationPropertyValue)]="position"\n      [documentationPropertyValues]="positionVariants"\n      documentationPropertyName="position"\n      documentationPropertyType="PrizmOverlayInsidePlacement"\n    >\n      Position\n    </ng-template>\n\n    <ng-template\n      [(documentationPropertyValue)]="dismissible"\n      documentationPropertyName="dismissible"\n      documentationPropertyType="boolean"\n    >\n      Dismissible\n    </ng-template>\n    <ng-template\n      [(documentationPropertyValue)]="backdrop"\n      documentationPropertyName="backdrop"\n      documentationPropertyType="boolean"\n    >\n      Backdrop\n    </ng-template>\n  </prizm-doc-documentation>\n</div>\n'}}]);