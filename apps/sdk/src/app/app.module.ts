import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZyfraTabViewModule } from '@digital-plant/zyfra-components';
import { AppComponent } from './app.component';
import { AppDirective } from './app.directive';
import { AccordionModule } from './components/accordion/accordion.module';
import { AutoCompleteModule } from './components/auto-complete/auto-complete.module';
import { BlockTestModule } from './components/blockUI/block-test.module';
import { BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';
import { ChipionModule } from './components/chip/chip.module';
import { ConfirmModule } from './components/confirm-dialog/confirm-dialog.module';
import { DialogModule } from './components/dialog/dialog.module';
import { InputMaskModule } from './components/input-mask/input-mask.module';
import { InputNumberModule } from './components/input-number/input-number.module';
import { InputSwitchModule } from './components/input-switch/input-switch.module';
import { MessageModule } from './components/message/message.module';
import { PaginatorModule } from './components/paginator/paginator.module';
import { PasswordModule } from './components/password/password.module';
import { ProgressModule } from './components/progress/progress.module';
import { RadioButtonModule } from './components/radio-button/radio-button.module';
import { SelectButtonTestModule } from './components/select-button-test/select-button-test.module';
import { SliderTestModule } from './components/slider/slider-test.module';
import { SpinnerTestModule } from './components/spinner/spinner-test.module';
import { SplitButtonTestModule } from './components/split-button-test/split-button-test.module';
import { SplitterTestModule } from './components/splitter/splitter-test.module';
import { TextareaTestModule } from './components/textarea-test/textarea-test.module';
import { ToastTestModule } from './components/toast-test/toast-test.module';
import { ToggleButtonTestModule } from './components/toggle-button-test/toggle-button-test.module';
import { TooltipTestModule } from './components/tooltip-test/tooltip-test.module';
import { TreeTestModule } from './components/tree-test/tree-test.module';
import { TreeTableTestModule } from './components/tree-table-test/tree-table-test.module';
import { TriCheckboxTestModule } from './components/tri-checkbox-test/tri-checkbox-test.module';
import { MenuApplicationsModule } from './components/menu-applications-test/menu-applications-test.module';
import { MenuNavModule } from './components/menu-nav-test/menu-nav-test.module';
import { ButtonModule } from './components/button/button.module';
import { CalendarTestModule } from './components/calendar-test/calendar-test.module';
import { CheckboxModule } from './components/checkbox/checkbox.module';
import { DatePickerModule } from './components/datepicker/datepicker.module';
import { DropdownTestModule } from './components/dropdown-test/dropdown-test.module';
import { IconModule } from './components/icon/icon.module';
import { InputGroupModule } from './components/input-group/input-group.module';
import { InputModule } from './components/input/input.module';
import { TableTestModule } from './components/table-test/table-test.module';
import { TranslateModule } from './components/translate/translate.module';

@NgModule({
  declarations: [AppComponent, AppDirective],
  imports: [
    AccordionModule,
    AutoCompleteModule,
    BlockTestModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CalendarTestModule,
    CheckboxModule,
    ChipionModule,
    CommonModule,
    ConfirmModule,
    DialogModule,
    DropdownTestModule,
    DatePickerModule,
    HttpClientModule,
    IconModule,
    InputModule,
    InputGroupModule,
    InputMaskModule,
    InputNumberModule,
    InputSwitchModule,
    MenuApplicationsModule,
    MenuNavModule,
    MessageModule,
    PaginatorModule,
    PasswordModule,
    ProgressModule,
    RadioButtonModule,
    SelectButtonTestModule,
    SliderTestModule,
    SpinnerTestModule,
    SplitButtonTestModule,
    SplitterTestModule,
    TableTestModule,
    TextareaTestModule,
    ToastTestModule,
    ToggleButtonTestModule,
    TooltipTestModule,
    TranslateModule,
    TreeTestModule,
    TreeTableTestModule,
    TriCheckboxTestModule,
    ZyfraTabViewModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
