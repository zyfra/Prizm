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
import { PrizmNavMenuComponent } from './components/nav-menu/pzm-nav-menu.component';
import { PrizmAutofocusDirective } from './directives/autofocus.directives';
import { PrizmNavMenuGroupDirective } from './directives/nav-menu-group.directive';
import { NavMenuService } from './service/selection.service';
import { PrizmNavMenuItemComponent } from './components/menu-item/pzm-nav-menu-item.component';
import { PrizmNavMenuGroupComponent } from './components/nav-menu-group/pzm-nav-menu-group.component';
import { PrizmTemplateDirective } from './directives/pzm-template.directive';
import { AccordionModule } from 'primeng/accordion';
import { PrizmInputTextModule } from '../input';
import { PrizmIconModule } from '../icon';

@NgModule({
  declarations: [
    PrizmNavMenuComponent,
    PrizmAutofocusDirective,
    PrizmNavMenuGroupDirective,
    PrizmNavMenuGroupComponent,
    PrizmNavMenuItemComponent,
    PrizmTemplateDirective,
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
    PrizmInputTextModule,
    PrizmIconModule,
    ReactiveFormsModule,
  ],
  providers: [NavMenuService],
  exports: [PrizmNavMenuComponent, PrizmNavMenuGroupDirective, PrizmTemplateDirective],
})
export class PrizmNavMenuModule {}

