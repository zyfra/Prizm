import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmCellDirective } from './directives/cell.directive';
import { PrizmHeadDirective } from './directives/head.directive';
import { PrizmResizedDirective } from './directives/resized.directive';
import { PrizmRowDirective } from './directives/row.directive';
import { PrizmSortByDirective } from './directives/sort-by.directive';
import { PrizmSortableDirective } from './directives/sortable.directive';
import { PrizmTableDirective } from './directives/table.directive';
import { PrizmTheadDirective } from './directives/thead.directive';
import { PrizmTableSortPipe } from './pipes/table-sort.pipe';
import { PrizmTbodyComponent } from './tbody/tbody.component';
import { PrizmTdComponent } from './td/td.component';
import { PrizmThComponent } from './th/th.component';
import { PrizmThGroupComponent } from './th-group/th-group.component';
import { PrizmTrComponent } from './tr/tr.component';
import { PrizmMapperPipe } from '../../pipes';
import { PolymorphModule } from '../../directives';
import { SearchableContentComponent } from './components/searchable-content/searchable-content.component';
import { SpaceNumberPipe } from './pipes/space-number.pipe';
import { PrizmCallFuncPipe } from '@prizm-ui/helpers';
import { PrizmTreeButtonComponent } from '../tree-button/tree-button.component';
import { PrizmTableTreeLoadingDirective } from './directives/tree-loading.directive';
import { PrizmTableLoadingDirective } from './directives/loading.directive';
import { PrizmTableEmptyDirective } from './directives/empty.directive';
import { PrizmTableRowInitDirective } from './directives/row-init.directive';
import { PrizmTrDirective } from './tr/tr.directive';
import { PrizmIconsComponent } from '@prizm-ui/icons';
import { PrizmButtonComponent } from '../button';

@NgModule({
  imports: [
    CommonModule,
    PrizmTreeButtonComponent,
    PrizmCallFuncPipe,
    PrizmMapperPipe,
    PolymorphModule,
    PrizmIconsComponent,
    PrizmButtonComponent,
  ],
  declarations: [
    PrizmTableTreeLoadingDirective,
    PrizmTableLoadingDirective,
    PrizmTableEmptyDirective,
    PrizmTableDirective,
    PrizmTbodyComponent,
    PrizmThGroupComponent,
    PrizmThComponent,
    PrizmTdComponent,
    PrizmTrComponent,
    PrizmCellDirective,
    PrizmHeadDirective,
    PrizmRowDirective,
    PrizmTableRowInitDirective,
    PrizmSortByDirective,
    PrizmSortableDirective,
    PrizmTheadDirective,
    PrizmResizedDirective,
    PrizmTableSortPipe,
    SearchableContentComponent,
    SpaceNumberPipe,
    PrizmTrDirective,
  ],
  exports: [
    PrizmTableLoadingDirective,
    PrizmTableEmptyDirective,
    PrizmTrDirective,
    PrizmTreeButtonComponent,
    PrizmTableTreeLoadingDirective,
    PrizmTableDirective,
    PrizmTbodyComponent,
    PrizmThGroupComponent,
    PrizmThComponent,
    PrizmTdComponent,
    PrizmTrComponent,
    PrizmCellDirective,
    PrizmHeadDirective,
    PrizmRowDirective,
    PrizmSortByDirective,
    PrizmSortableDirective,
    PrizmTheadDirective,
    PrizmTableSortPipe,
    SearchableContentComponent,
    SpaceNumberPipe,
  ],
  providers: [DecimalPipe],
})
export class PrizmTableModule {}
