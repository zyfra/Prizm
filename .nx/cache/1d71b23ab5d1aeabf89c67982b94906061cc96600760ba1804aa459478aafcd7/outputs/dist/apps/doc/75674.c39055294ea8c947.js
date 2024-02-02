"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[75674],{75674:e=>{e.exports='<prizm-scrollbar class="scrollable" visibility="hidden">\n  <table class="table" [columns]="columns" prizmTable tableBorderStyle="horizontal">\n    <thead>\n      <tr prizmThGroup>\n        <th *prizmHead="\'code\'" [resizable]="true" [sorter]="null" prizmTh>\u041a\u043e\u0434</th>\n        <th *prizmHead="\'name\'" [resizable]="true" prizmTh>\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435</th>\n        <th *prizmHead="\'category\'" [resizable]="true" prizmTh>\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f</th>\n        <th *prizmHead="\'count\'" [resizable]="true" prizmTh>\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e</th>\n        <th class="head__actions" *prizmHead="\'actions\'" [sorter]="null" prizmTh></th>\n      </tr>\n    </thead>\n\n    <tbody [data]="products" prizmTbody>\n      <tr\n        class="row"\n        *prizmRow="let item of products; let i = index"\n        [active]="selectedItemsCodes.includes(item.code)"\n        [class.row_edit]="currentEditableRow === item"\n        (click)="selectRow($event, item.code, currentEditableRow === item)"\n        prizmTr\n      >\n        <td class="format__number" *prizmCell="\'code\'" prizmTd>{{ item.code | spaceNumber : \'0.0-0\' }}</td>\n        <td class="row__editable" *prizmCell="\'name\'" prizmTd>\n          <input\n            [disabled]="currentEditableRow !== item"\n            [value]="item.name"\n            (click)="$event.stopPropagation()"\n            (blur)="changeItemName($event, \'name\')"\n            prizmInput\n          />\n        </td>\n        <td class="row__editable" *prizmCell="\'category\'" prizmTd>\n          <prizm-input-select\n            [disabled]="currentEditableRow !== item"\n            [ngModel]="item.category"\n            [items]="categories"\n            (ngModelChange)="changeByValue($event, \'category\')"\n          >\n          </prizm-input-select>\n        </td>\n        <td class="row__editable" *prizmCell="\'count\'" prizmTd>\n          <input\n            class="format__number"\n            [disabled]="currentEditableRow !== item"\n            [value]="$any(item.count)"\n            (click)="$event.stopPropagation()"\n            (blur)="changeItemName($event, \'count\')"\n            prizmInput\n          />\n        </td>\n        <td *prizmCell="\'actions\'" prizmTd>\n          <div class="edit-buttons-container" (click)="$event.stopPropagation()">\n            <prizm-icon\n              class="edit-buttons"\n              *ngIf="currentEditableRow !== item"\n              (click)="onRowEditInit(item)"\n              size="16"\n              iconClass="editor-mode"\n            ></prizm-icon>\n\n            <prizm-icon\n              class="edit-buttons"\n              *ngIf="currentEditableRow === item"\n              (click)="onRowEditSave()"\n              size="16"\n              iconClass="selection-choice"\n            ></prizm-icon>\n\n            <prizm-icon\n              class="edit-buttons"\n              *ngIf="currentEditableRow === item"\n              (click)="onRowEditCancel(item)"\n              size="16"\n              iconClass="cancel-close"\n            ></prizm-icon>\n\n            <prizm-icon\n              class="edit-buttons"\n              (click)="onRowDelete(item)"\n              size="16"\n              iconClass="delete"\n            ></prizm-icon>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</prizm-scrollbar>\n'}}]);