'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [42576],
  {
    42576: n => {
      n.exports =
        '<div class="header">\n  <prizm-toggle [formControl]="activeControl"></prizm-toggle>\n  Active\n</div>\n\n<div class="body">\n  <div>\n    <prizm-input-layout [prizmSkeleton]="activeControl.value" label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a">\n      <input prizmInput />\n    </prizm-input-layout>\n  </div>\n\n  <div>\n    <prizm-input-layout [outer]="true" [prizmSkeleton]="activeControl.value" label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a">\n      <input prizmInput />\n    </prizm-input-layout>\n  </div>\n\n  <div>\n    <prizm-select\n      [formControl]="selectControl"\n      [items]="items"\n      [prizmSkeleton]="activeControl.value"\n    ></prizm-select>\n  </div>\n\n  <div>\n    <prizm-toggle\n      [formControl]="toggleControl"\n      [prizmSkeletonRounded]="true"\n      [prizmSkeleton]="activeControl.value"\n    ></prizm-toggle>\n    <span [prizmSkeleton]="activeControl.value" [prizmSkeletonText]="true" style="margin-left: 6px"\n      >Toggle</span\n    >\n  </div>\n\n  <div>\n    <prizm-card [prizmSkeleton]="activeControl.value">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n      deserunt mollit anim id est laborum.\n    </prizm-card>\n  </div>\n</div>\n';
    },
  },
]);
