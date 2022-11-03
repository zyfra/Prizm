import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { TreeModule } from 'primeng/tree';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { PzmNavMenuComponent } from './components/nav-menu/pzm-nav-menu.component';
import { PzmAutofocusDirective } from './directives/autofocus.directives';
import { PzmNavMenuGroupDirective } from './directives/nav-menu-group.directive';
import { NavMenuService } from './service/selection.service';
import { PzmNavMenuItemComponent } from './components/menu-item/pzm-nav-menu-item.component';
import { PzmNavMenuGroupComponent } from './components/nav-menu-group/pzm-nav-menu-group.component';
import { PzmTemplateDirective } from './directives/pzm-template.directive';
import { AccordionModule } from 'primeng/accordion';
import { PzmInputTextModule } from '../input';
import { PzmIconModule } from '../icon';

@NgModule({
  declarations: [
    PzmNavMenuComponent,
    PzmAutofocusDirective,
    PzmNavMenuGroupDirective,
    PzmNavMenuGroupComponent,
    PzmNavMenuItemComponent,
    PzmTemplateDirective,
  ],
  imports: [
    PanelMenuModule,
    MenuModule,
    TreeModule,
    ToggleButtonModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    CommonModule,
    InputTextModule,
    OverlayPanelModule,
    RadioButtonModule,
    TooltipModule,
    AccordionModule,
    PzmInputTextModule,
    PzmIconModule,
    ReactiveFormsModule,
  ],
  providers: [NavMenuService],
  exports: [PzmNavMenuComponent, PzmNavMenuGroupDirective, PzmTemplateDirective],
})
export class PzmNavMenuModule {}

