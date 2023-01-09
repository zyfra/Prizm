import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { MarkdownModule } from 'ngx-markdown';
import { ChangelogComponent } from './changelog.component';

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule,
        PrizmAddonDocModule,
        RouterModule.forChild(prizmDocGenerateRoutes(ChangelogComponent)),
    ],
    declarations: [ChangelogComponent],
    exports: [ChangelogComponent],
})
export class ChangelogModule {}
