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
import { ZuiNavMenuComponent } from './components/zui-nav-menu/zui-nav-menu.component';
import { ZuiAutofocusDirective } from './directives/zui-autofocus.directives';
import { ZuiNavMenuGroupDirective } from './directives/nav-menu-group.directive';
import { NavMenuService } from './service/selection.service';
import { ZuiNavMenuItemComponent } from './components/zui-menu-item/zui-nav-menu-item.component';
import { ZuiNavMenuGroupComponent } from './components/zui-nav-menu-group/zui-nav-menu-group.component';
import { ZuiTemplateDirective } from './directives/zui-template.directive';
import { AccordionModule } from 'primeng/accordion';

import { ZuiInputTextModule } from '../input';
import { ZuiIconModule } from '../icon';

@NgModule({
  declarations: [
    ZuiNavMenuComponent,
    ZuiAutofocusDirective,
    ZuiNavMenuGroupDirective,
    ZuiNavMenuGroupComponent,
    ZuiNavMenuItemComponent,
    ZuiTemplateDirective,
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
    ZuiInputTextModule,
    ZuiIconModule,
    ReactiveFormsModule,
  ],
  providers: [NavMenuService],
  exports: [ZuiNavMenuComponent, ZuiNavMenuGroupDirective, ZuiTemplateDirective],
})
export class ZuiNavMenuModule {}

