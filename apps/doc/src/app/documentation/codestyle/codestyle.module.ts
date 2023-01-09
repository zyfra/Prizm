import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { MarkdownModule } from 'ngx-markdown';
import { CodestyleComponent } from './codestyle.component';

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule,
        PrizmAddonDocModule,
        RouterModule.forChild(prizmDocGenerateRoutes(CodestyleComponent)),
    ],
    declarations: [CodestyleComponent],
    exports: [CodestyleComponent],
})
export class CodestyleModule {}
