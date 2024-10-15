import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmButtonComponent, PrizmFileUploadComponent, PrizmToastModule } from '@prizm-ui/components';
import { PrizmFileUploadExampleComponent } from './file-upload-example.component';
import { PrizmFileUploadBasicExampleComponent } from './examples/basic/basic.component';
import { HttpClientModule } from '@angular/common/http';
import { fakeFileUploadProvider } from './interceptor';
import { PrizmFileAutoUploadExampleComponent } from './examples/auto-upload/auto-upload.component';
import { PrizmFileUploadI18nExampleComponent } from './examples/i18n/file-upload-i18n-example.component';
import { PrizmFileUploadInFormExampleComponent } from './examples/file-upload-in-form/file-upload-in-form-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';
import { PrizmFileUploadWithInitFilesComponent } from './examples/file-upload-with-init-files/file-upload-with-init-files.component';
import { PrizmFileUploadCustomActionsComponent } from './examples/file-upload-custom-actions/file-upload-custom-actions.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmFileUploadComponent,
    PrizmToastModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmFileUploadExampleComponent)),
    HttpClientModule,
    PrizmButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    PrizmIfLanguageDirective,
  ],
  declarations: [
    PrizmFileUploadExampleComponent,
    PrizmFileUploadBasicExampleComponent,
    PrizmFileAutoUploadExampleComponent,
    PrizmFileUploadI18nExampleComponent,
    PrizmFileUploadInFormExampleComponent,
    PrizmFileUploadWithInitFilesComponent,
    PrizmFileUploadCustomActionsComponent,
  ],
  providers: [fakeFileUploadProvider],
})
export class PrizmFileUploadExampleModule {}
