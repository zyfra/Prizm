import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmButtonModule, PrizmFileUploadModule, PrizmToastModule } from '@prizm-ui/components';
import { PrizmFileUploadExampleComponent } from './file-upload-example.component';
import { PrizmFileUploadBasicExampleComponent } from './examples/basic/basic.component';
import { HttpClientModule } from '@angular/common/http';
import { fakeFileUploadProvider } from './interceptor';
import { PrizmFileAutoUploadExampleComponent } from './examples/auto-upload/auto-upload.component';
import { PrizmFileUploadI18nExampleComponent } from './examples/i18n/file-upload-i18n-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmFileUploadModule,
    PrizmToastModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmFileUploadExampleComponent)),
    HttpClientModule,
    PrizmButtonModule,
  ],
  declarations: [
    PrizmFileUploadExampleComponent,
    PrizmFileUploadBasicExampleComponent,
    PrizmFileAutoUploadExampleComponent,
    PrizmFileUploadI18nExampleComponent,
  ],
  providers: [fakeFileUploadProvider],
})
export class PrizmFileUploadExampleModule {}
