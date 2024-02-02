'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [21775],
  {
    21775: e => {
      e.exports =
        '<div class="container">\n  <prizm-listing-item [disabled]="false" [selected]="false"> My Default List item</prizm-listing-item>\n  <prizm-listing-item [disabled]="false" [selected]="true">My Selected List item</prizm-listing-item>\n  <prizm-listing-item [disabled]="true" [selected]="false">My Disabled List item</prizm-listing-item>\n\n  <prizm-dropdown-host\n    class="dropdown-host"\n    #tabsDropdown\n    [(isOpen)]="open"\n    [content]="dropdown"\n    prizmDropdownHostWidth="auto"\n  >\n    <button (click)="open = !open" prizmButton appearanceType="fill" appearance="primary" size="m">\n      Click me\n    </button>\n  </prizm-dropdown-host>\n\n  <ng-template #dropdown>\n    <prizm-listing-item [disabled]="false" [selected]="false">My Default List item</prizm-listing-item>\n    <prizm-listing-item [disabled]="false" [selected]="true">My Selected List item</prizm-listing-item>\n    <prizm-listing-item [disabled]="true" [selected]="false"> My Disabled List item</prizm-listing-item>\n  </ng-template>\n</div>\n';
    },
  },
]);
