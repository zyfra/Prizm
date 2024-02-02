'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [25769],
  {
    25769: l => {
      l.exports =
        '<h1 class="title">Footer</h1>\n<prizm-scrollbar>\n  <div class="table" prizmStickyRelative>\n    <div class="header">\n      <div class="row">\n        <div class="col col-1">Column 1</div>\n        <div class="col col-2">Column 2</div>\n        <div class="col col-3">Column 3</div>\n        <div class="col col-4">Column 4</div>\n        <div class="col col-5">Column 5</div>\n        <div class="col col-6">Column 6</div>\n        <div class="col col-7">Column 7</div>\n        <div class="col col-8">Column 8</div>\n        <div class="col col-9">Column 9</div>\n      </div>\n    </div>\n    <div class="body">\n      <div class="row" *ngFor="let col of cols; let idx = index">\n        <div class="col col-1">#{{ idx + 1 }}</div>\n        <div class="col col-2">Value 2</div>\n        <div class="col col-3">Value 3</div>\n        <div class="col col-4">Value 4</div>\n        <div class="col col-5">Value 5</div>\n        <div class="col col-6">Value 6</div>\n        <div class="col col-7">Value 7</div>\n        <div class="col col-8">Value 8</div>\n        <div class="col col-9">Value 9</div>\n      </div>\n      <div class="row footer" [prizmStickyBottom]="true">\n        <div class="col col-1">Footer 1</div>\n        <div class="col col-2">Footer 2</div>\n        <div class="col col-3">Footer 3</div>\n        <div class="col col-4">Footer 4</div>\n        <div class="col col-5">Footer 5</div>\n        <div class="col col-6">Footer 6</div>\n        <div class="col col-7">Footer 7</div>\n        <div class="col col-8">Footer 8</div>\n        <div class="col col-9">Footer 9</div>\n      </div>\n    </div>\n  </div>\n</prizm-scrollbar>\n\n<h1 class="title">Header</h1>\n<prizm-scrollbar>\n  <div class="table" prizmStickyRelative>\n    <div class="header" [prizmStickyTop]="true">\n      <div class="row header">\n        <div class="col col-1">Column 1</div>\n        <div class="col col-2">Column 2</div>\n        <div class="col col-3">Column 3</div>\n        <div class="col col-4">Column 4</div>\n        <div class="col col-5">Column 5</div>\n        <div class="col col-6">Column 6</div>\n        <div class="col col-7">Column 7</div>\n        <div class="col col-8">Column 8</div>\n        <div class="col col-9">Column 9</div>\n      </div>\n    </div>\n    <div class="body">\n      <div class="row" *ngFor="let col of cols; let idx = index">\n        <div class="col col-1">#{{ idx + 1 }}</div>\n        <div class="col col-2">Value 2</div>\n        <div class="col col-3">Value 3</div>\n        <div class="col col-4">Value 4</div>\n        <div class="col col-5">Value 5</div>\n        <div class="col col-6">Value 6</div>\n        <div class="col col-7">Value 7</div>\n        <div class="col col-8">Value 8</div>\n        <div class="col col-9">Value 9</div>\n      </div>\n    </div>\n  </div>\n</prizm-scrollbar>\n\n<h1 class="title">Left</h1>\n<prizm-scrollbar>\n  <div class="table" prizmStickyRelative>\n    <div class="header">\n      <div class="row">\n        <div class="col col-1 sticky" [prizmStickyLeft]="true">Column 1</div>\n        <div class="col col-2 sticky" [prizmStickyLeft]="true">Column 2</div>\n        <div class="col col-3">Column 3</div>\n        <div class="col col-4">Column 4</div>\n        <div class="col col-5">Column 5</div>\n        <div class="col col-6">Column 6</div>\n        <div class="col col-7">Column 7</div>\n        <div class="col col-8">Column 8</div>\n        <div class="col col-9">Column 9</div>\n      </div>\n    </div>\n    <div class="body">\n      <div class="row" *ngFor="let col of cols; let idx = index">\n        <div class="col col-1 sticky" [prizmStickyLeft]="true">#{{ idx + 1 }}</div>\n        <div class="col col-2 sticky" [prizmStickyLeft]="true">Value 2</div>\n        <div class="col col-3">Value 3</div>\n        <div class="col col-4">Value 4</div>\n        <div class="col col-5">Value 5</div>\n        <div class="col col-6">Value 6</div>\n        <div class="col col-7">Value 7</div>\n        <div class="col col-8">Value 8</div>\n        <div class="col col-9">Value 9</div>\n      </div>\n    </div>\n  </div>\n</prizm-scrollbar>\n\n<h1 class="title">Right</h1>\n<prizm-scrollbar>\n  <div class="table" prizmStickyRelative>\n    <div class="header">\n      <div class="row">\n        <div class="col col-1">Column 1</div>\n        <div class="col col-2">Column 2</div>\n        <div class="col col-3">Column 3</div>\n        <div class="col col-4">Column 4</div>\n        <div class="col col-5">Column 5</div>\n        <div class="col col-6">Column 6</div>\n        <div class="col col-7">Column 7</div>\n        <div class="col col-8 sticky" [prizmStickyRight]="true">Column 8</div>\n        <div class="col col-9 sticky" [prizmStickyRight]="true">Column 9</div>\n      </div>\n    </div>\n    <div class="body">\n      <div class="row" *ngFor="let col of cols; let idx = index">\n        <div class="col col-1">#{{ idx + 1 }}</div>\n        <div class="col col-2">Value 2</div>\n        <div class="col col-3">Value 3</div>\n        <div class="col col-4">Value 4</div>\n        <div class="col col-5">Value 5</div>\n        <div class="col col-6">Value 6</div>\n        <div class="col col-7">Value 7</div>\n        <div class="col col-8 sticky" [prizmStickyRight]="true">Value 8</div>\n        <div class="col col-9 sticky" [prizmStickyRight]="true">Value 9</div>\n      </div>\n    </div>\n  </div>\n</prizm-scrollbar>\n\n<h1 class="title">Multiple</h1>\n<prizm-scrollbar>\n  <div class="table" prizmStickyRelative>\n    <div class="header" [prizmStickyTop]="true">\n      <div class="row">\n        <div class="col col-1 sticky" [style.z-index]="2" [prizmStickyLeft]="true">Column 1</div>\n        <div class="col col-2">Column 2</div>\n        <div class="col col-3">Column 3</div>\n        <div class="col col-4">Column 4</div>\n        <div class="col col-5">Column 5</div>\n        <div class="col col-6">Column 6</div>\n        <div class="col col-7">Column 7</div>\n        <div class="col col-8">Column 8</div>\n        <div class="col col-9 sticky" [style.z-index]="2" [prizmStickyRight]="true">Column 9</div>\n      </div>\n    </div>\n    <div class="body">\n      <div class="row" *ngFor="let col of cols; let idx = index">\n        <div class="col col-1 sticky" [prizmStickyLeft]="true">#{{ idx + 1 }}</div>\n        <div class="col col-2">Value 2</div>\n        <div class="col col-3">Value 3</div>\n        <div class="col col-4">Value 4</div>\n        <div class="col col-5">Value 5</div>\n        <div class="col col-6">Value 6</div>\n        <div class="col col-7">Value 7</div>\n        <div class="col col-8">Value 8</div>\n        <div class="col col-9 sticky" [prizmStickyRight]="true">Value 9</div>\n      </div>\n\n      <div class="row footer" [prizmStickyBottom]="true">\n        <div class="col col-1 sticky" [prizmStickyLeft]="true">Footer 1</div>\n        <div class="col col-2">Footer 2</div>\n        <div class="col col-3">Footer 3</div>\n        <div class="col col-4">Footer 4</div>\n        <div class="col col-5">Footer 5</div>\n        <div class="col col-6">Footer 6</div>\n        <div class="col col-7">Footer 7</div>\n        <div class="col col-8">Footer 8</div>\n        <div class="col col-9 sticky" [prizmStickyRight]="true">Footer 9</div>\n      </div>\n    </div>\n  </div>\n</prizm-scrollbar>\n';
    },
  },
]);
