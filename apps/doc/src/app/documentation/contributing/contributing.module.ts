import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { MarkdownModule } from 'ngx-markdown';
import { ContributingComponent } from './contributing.component';

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ContributingComponent)),
    ],
    declarations: [ContributingComponent],
    exports: [ContributingComponent],
})
export class ContributingModule {}
