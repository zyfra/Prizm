import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmColumnSettingsComponent } from './column-settings.component';
import { PrizmCardModule } from '../card';
import { PrizmButtonModule } from '../button';
import { PrizmToggleModule } from '../toggle';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PrizmColumnIconPipe } from './pipes/column-icon.pipe';
import { PrizmIconModule } from '../icon/icon.module';
import { PrizmScrollbarModule } from '../scrollbar';
import { PrizmLetModule, PrizmPluckPipeModule } from '@prizm-ui/helpers';
import { PrizmHintModule } from '../../directives/hint';
import { PrizmColumnDropListComponent } from './components/column-drop-list/column-drop-list.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmCardModule,
    PrizmButtonModule,
    PrizmToggleModule,
    DragDropModule,
    PrizmIconModule,
    PrizmScrollbarModule,
    PrizmLetModule,
    PrizmPluckPipeModule,
    PrizmHintModule,
  ],
  declarations: [PrizmColumnSettingsComponent, PrizmColumnIconPipe, PrizmColumnDropListComponent],
  exports: [PrizmColumnSettingsComponent],
})
export class PrizmColumnSettingsModule {}
