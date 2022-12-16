import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/taiga-ui/addon-doc';
import { MarkdownModule } from 'ngx-markdown';
import { ContributingComponent } from './contributing.component';

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule,
        PrizmAddonDocModule,
        RouterModule.forChild(prizmDocGenerateRoutes(ContributingComponent)),
    ],
    declarations: [ContributingComponent],
    exports: [ContributingComponent],
})
export class ContributingModule {}
