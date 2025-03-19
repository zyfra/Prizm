import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsExampleComponent } from './tabs-example.component';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmPanelComponent, PrizmTabsModule } from '@prizm-ui/components';
import { TabsExampleBasicComponent } from './examples/tabs-example-basic/tabs-example-basic.component';
import { TabsExampleLinedComponent } from './examples/tabs-example-lined/tabs-example-lined.component';
import { TabsExampleContainedComponent } from './examples/tabs-example-contained/tabs-example-contained.component';
import { TabsExampleIconComponent } from './examples/tabs-example-icon/tabs-example-icon.component';
import { TabsExampleCounterComponent } from './examples/tabs-example-counter/tabs-example-counter.component';
import { TabsExampleClosableComponent } from './examples/tabs-example-closable/tabs-example-closable.component';
import { TabsExampleComponentContentComponent } from './examples/tabs-example-component/tabs-example-content-component.component';
import { TabsExampleComponentComponent } from './examples/tabs-example-component/tabs-example-component.component';
import { TabsExampleInPanelComponent } from './examples/tabs-example-in-panel/tabs-example-in-panel.component';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';
import { OpenAiChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { MarkdownComponent } from 'ngx-markdown';

@NgModule({
  declarations: [
    OpenAiChatComponent,
    TabsExampleComponent,
    TabsExampleBasicComponent,
    TabsExampleComponentContentComponent,
    TabsExampleComponentComponent,
    TabsExampleLinedComponent,
    TabsExampleContainedComponent,
    TabsExampleIconComponent,
    TabsExampleCounterComponent,
    TabsExampleClosableComponent,
    TabsExampleInPanelComponent,
  ],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(TabsExampleComponent)),
    PrizmTabsModule,
    PrizmPanelComponent,
    PrizmIfLanguageDirective,
    FormsModule,
    MarkdownComponent,
  ],
})
export class TabsExampleModule {}
