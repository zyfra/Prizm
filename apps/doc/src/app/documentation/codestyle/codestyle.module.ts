import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { MarkdownModule } from 'ngx-markdown';
import { CodestyleComponent } from './codestyle.component';

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(CodestyleComponent)),
    ],
    declarations: [CodestyleComponent],
    exports: [CodestyleComponent],
})
export class CodestyleModule {}
