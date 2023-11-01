import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PRIZM_DOC_DEFAULT_TABS } from '@prizm-ui/doc';

export const THEME_TABS = [`Дизайнерам`, `Разработчикам`];

@Component({
  selector: 'prizm-theme-guide',
  templateUrl: './theme-guide.component.html',
  styleUrls: ['./theme-guide.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PRIZM_DOC_DEFAULT_TABS,
      useValue: THEME_TABS,
    },
  ],
})
export class ThemegGuideComponent {}
