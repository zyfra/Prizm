import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { TreeModule } from 'primeng/tree';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { ZyfraNavMenuComponent } from './components/zyfra-nav-menu/zyfra-nav-menu.component';
import { ZyfraAutofocusDirective } from './directives/zyfra-autofocus.directives';
import { ZyfraNavMenuGroupDirective } from './directives/nav-menu-group.directive';
import { NavMenuService } from './service/selection.service';
import { ZyfraNavMenuItemComponent } from './components/zyfra-menu-item/zyfra-nav-menu-item.component';
import { ZyfraNavMenuGroupComponent } from './components/zyfra-nav-menu-group/zyfra-nav-menu-group.component';
import { ZyfraHintModule } from '../hint/zyfra-hint.module';
import { ZyfraAccordionModule } from '../accordion/zyfra-accordion.module';
import { ZyfraInputModule } from '../input/zyfra-input.module';
import { ZyfraButtonModule } from '../button/zyfra-button.module';
import { ZyfraCheckBoxModule } from '../checkbox/zyfra-checkbox.module';
import { ZyfraSharedModule } from '../@core/shared/zyfra-shared.module';

@NgModule({
  declarations: [
    ZyfraNavMenuComponent,
    ZyfraAutofocusDirective,
    ZyfraNavMenuGroupDirective,
    ZyfraNavMenuGroupComponent,
    ZyfraNavMenuItemComponent
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
    ZyfraCheckBoxModule,
    ZyfraButtonModule,
    ZyfraInputModule,
    ZyfraAccordionModule,
    ZyfraSharedModule,
    ZyfraHintModule
  ],
  providers: [NavMenuService],
  exports: [
    ZyfraNavMenuComponent,
    ZyfraNavMenuGroupDirective
  ]
})
export class ZyfraNavMenuModule { }
