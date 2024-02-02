'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [54857],
  {
    54857: e => {
      e.exports =
        '<div class="container">\n  <prizm-panel>\n    <div class="tabs" header>\n      <prizm-tabs (activeTabIndexChange)="activeTabIndexChange()" (closeClick)="tabCancelClick()">\n        <prizm-tab\n          *ngFor="let item of tabs"\n          [disabled]="!!item.disabled"\n          [icon]="$any(item.icon)"\n          [content]="$any(item.title)"\n          [type]="\'line\'"\n        >\n        </prizm-tab>\n      </prizm-tabs>\n    </div>\n  </prizm-panel>\n  <div class="content">\n    <span>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur delectus dolores magnam\n      quibusdam reiciendis, reprehenderit sapiente sequi sit sunt tempora tenetur vel veritatis? Incidunt modi\n      perferendis quas? Accusantium aut exercitationem id pariatur quisquam, sequi suscipit. A aspernatur\n      atque cum cumque error exercitationem hic id, in ipsa magni nesciunt quam qui, quidem quod ratione rem\n      repudiandae sint sunt suscipit, vitae.\n    </span>\n  </div>\n</div>\n';
    },
  },
]);
