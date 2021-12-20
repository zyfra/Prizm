import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraNavMenuComponent } from './components/zyfra-nav-menu/zyfra-nav-menu.component';
import { ZyfraNavMenuModule } from './zyfra-nav-menu.module';
import { action } from '@storybook/addon-actions';
import { ZyfraSplitterModule } from '../splitter';
import { APP_BASE_HREF } from '@angular/common';
import { basic, basicWithIcons, subItems, subItemsRubricator } from './dataForStories';
import { BadgeModule } from 'primeng/badge';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import {
  AfterViewInit,
  Component,
  ContentChild,
  OnDestroy,
  TemplateRef,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { filter, take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ZyfraTemplateDirective } from '../@core/shared/zyfra-template.directives';
import { ZyfraSharedModule } from '../@core/shared/zyfra-shared.module';

@Component({ template: 'Страница 1' })
class Page1Component {}

@Component({ template: 'Страница 2' })
class Page2Component {}

@Component({ template: 'Страница 3' })
class Page3Component {}

@Component({
  selector: 'wrapper',
  template: '<ng-container *ngTemplateOutlet="tmpl"></ng-container>'
})

class WrapperComponent implements AfterViewInit, OnDestroy {
  @ContentChild(ZyfraTemplateDirective) template: ZyfraTemplateDirective;
  tmpl: TemplateRef<any>;

  private destroyed$ = new Subject<void>();

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        take(1),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => this.tmpl = this.template.templateRef);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component }
];

export default {
  title: 'Menu/NavMenu',
  component: ZyfraNavMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        Page1Component,
        Page2Component,
        Page3Component,
        WrapperComponent
      ],
      imports: [
        BrowserAnimationsModule,
        ZyfraNavMenuModule,
        ZyfraSplitterModule,
        ZyfraSharedModule,
        BadgeModule,
        RouterModule.forRoot(routes, { useHash: true })
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
  ],
  parameters: {
    docs: {
      page: require('./zyfra-nav-menu.component.story.doc.mdx').default,
    },
  },
} as Meta<ZyfraNavMenuComponent>;

const actions = {
  activeItemChange: action('activeItemChange'),
  homeClick: action('homeClick'),
  selectionChange: action('selectionChange'),
  nodeCollapse: action('nodeCollapse($event)'),
  nodeExpand: action('nodeExpand($event)'),
};

const BasicTemplate: Story = (args) => ({
  template:
      `<wrapper>
          <ng-template zyfraTemplate>
              <zyfra-splitter layout="horizontal" [panelSizes]="[25,75]" [style]="{ height: '600px' }">
                  <ng-template zyfraSplitterTemplate>
                      <zyfra-nav-menu [model]="model"
                                      [menuTitle]="menuTitle"
                                      [headerConfig]="headerConfig"
                                      [settingsConfig]="settingsConfig"
                                      [toolbarConfig]="toolbarConfig"
                                      [emptyMessage]="emptyMessage"
                                      (activeItemChange)="activeItemChange($event)"
                                      (selectionChange)="selectionChange($event)"
                                      (homeClick)="homeClick($event)">
                    </zyfra-nav-menu>
                  </ng-template>
                  <ng-template zyfraSplitterTemplate>
                      <router-outlet></router-outlet>
                  </ng-template>
              </zyfra-splitter>
          </ng-template>
      </wrapper>`,
  props: {
    ...args,
    ...actions
  },
});

export const Basic = BasicTemplate.bind({});
Basic.args = {
  model: [...basic],
  menuTitle: 'Наименование приложения'
};

export const BasicWithIcons = BasicTemplate.bind({});
BasicWithIcons.args = {
  model: [...basicWithIcons],
  menuTitle: 'Наименование приложения',
  headerConfig: {
    home: true
  }
};

export const SubItems = BasicTemplate.bind({});
SubItems.args = {
  model: [...subItems],
  menuTitle: 'Наименование приложения',
  headerConfig: {
    home: true
  }
};

export const EnlargedSize = BasicTemplate.bind({});
EnlargedSize.args = {
  model: [...subItems],
  menuTitle: 'Наименование приложения',
  headerConfig: {
    home: true
  },
  settingsConfig: {
    selectedSize: 'enlarged'
  },
};

const ExtraItemTemplate: Story = (args) => ({
  template:
      `<wrapper>
          <ng-template zyfraTemplate>
              <zyfra-splitter layout="horizontal" [panelSizes]="[25,75]" [style]="{ height: '600px' }">
                  <ng-template zyfraSplitterTemplate>
                      <zyfra-nav-menu [model]="model"
                                      [menuTitle]="menuTitle"
                                      [emptyMessage]="emptyMessage"
                                      [headerConfig]="headerConfig"
                                      [settingsConfig]="settingsConfig"
                                      [toolbarConfig]="toolbarConfig"
                                      (activeItemChange)="activeItemChange($event)"
                                      (selectionChange)="selectionChange($event)"
                                      (homeClick)="homeClick($event)">

                           <ng-template let-item zyfraTemplate='menuitem'>
                                  <p-badge *ngIf="item?.badge" styleClass="p-badge-dot" [severity]="item.badge"></p-badge>
                          </ng-template>

                          <ng-template zyfraTemplate='toolbar'>
                              <i class="toolbar-button zyfra-icon files-upload"></i>
                              <i class="toolbar-button zyfra-icon files-download"></i>
                          </ng-template>

                          <ng-template zyfraTemplate='header'>
                              <i class="toolbar-button zyfra-icon charts-pie"></i>
                          </ng-template>
                    </zyfra-nav-menu>
                  </ng-template>
                  <ng-template zyfraSplitterTemplate>
                      <router-outlet></router-outlet>
                  </ng-template>
              </zyfra-splitter>
          </ng-template>
      </wrapper>`,
  props: {
    ...args,
    ...actions
  },
});

export const ExtraTemplates = ExtraItemTemplate.bind({});
ExtraTemplates.args = {
  model: [...subItems],
  menuTitle: 'Наименование приложения'
};

export const MultipleSelection = BasicTemplate.bind({});
MultipleSelection.args = {
  model: [...subItems],
  menuTitle: 'Наименование приложения',
  headerConfig: {
    home: true
  },
  settingsConfig: {
    selectionMode: 'checkbox'
  }
};

export const Search = BasicTemplate.bind({});
Search.args = {
  model: [...subItems],
  menuTitle: 'Наименование приложения',
  searchPlaceholder: 'Введите текст',
  emptyMessage: '<Нет данных для отображения>',
  headerConfig: {
    home: true
  },
  toolbarConfig: {
    search: true,
    closeAll: true
  }
};

export const FolderMode = BasicTemplate.bind({});
FolderMode.args = {
  model: [...subItems],
  menuTitle: 'Наименование приложения',
  searchPlaceholder: 'Введите текст',
  headerConfig: {
    home: true
  },
  toolbarConfig: {
    filesMode: true,
    search: true,
    closeAll: true
  }
};

export const RubricatorMode = BasicTemplate.bind({});
RubricatorMode.args = {
  model: [...subItemsRubricator],
  menuTitle: 'Наименование приложения',
  searchPlaceholder: 'Введите текст',
  headerConfig: {
    home: true
  },
  toolbarConfig: {
    filesMode: true,
    rubricatorMode: true,
    search: true
  }
};

const GroupPanelTemplate: Story = (args) => ({
  template:
      `<wrapper>
          <ng-template zyfraTemplate>
              <zyfra-splitter layout="horizontal" [panelSizes]="[25,75]" [style]="{ height: '600px' }">
                  <ng-template zyfraSplitterTemplate>
                      <zyfra-nav-menu [menuTitle]="menuTitle"
                                      [emptyMessage]="emptyMessage"
                                      [headerConfig]="headerConfig"
                                      [settingsConfig]="settingsConfig"
                                      [toolbarConfig]="toolbarConfig"
                                      [searchPlaceholder]="searchPlaceholder"
                                      (homeClick)="homeClick($event)"
                                      (activeItemChange)="activeItemChange($event)"
                                      (nodeCollapse)="nodeCollapse($event)"
                                      (nodeExpand)="nodeExpand($event)"
                                      (selectionChange)="selectionChange($event)">
                      <ng-template zyfraNavMenuGroup
                                   [header]="header1"
                                   [items]="items1"></ng-template>

                      <ng-template zyfraNavMenuGroup
                                   [header]="header2"
                                   [items]="items2"></ng-template>

                      <ng-template zyfraNavMenuGroup
                                   [header]="header3"
                                   [items]="items3"></ng-template>
                      </zyfra-nav-menu>
                  </ng-template>
                  <ng-template zyfraSplitterTemplate>
                      <router-outlet></router-outlet>
                  </ng-template>
              </zyfra-splitter>
          </ng-template>
      </wrapper>`,
  props: {
    ...args,
    ...actions
  },
});

export const GroupPanels = GroupPanelTemplate.bind({});
GroupPanels.args = {
  header1: 'Групповая панель 1',
  header2: 'Групповая панель 2',
  header3: 'Групповая панель 3',
  items1: [ ...subItems],
  items2: [...basicWithIcons],
  items3: [...basic],
  menuTitle: 'Наименование приложения',
  searchPlaceholder: 'Введите текст',
  headerConfig: {
    home: true
  },
  toolbarConfig: {
    filesMode: true,
    search: true
  }
};

export const SingleGroupPanel = GroupPanelTemplate.bind({});
SingleGroupPanel.args = {
  header1: 'Групповая панель 1',
  header2: 'Групповая панель 2',
  header3: 'Групповая панель 3',
  items1: [...subItems],
  items2: [...basicWithIcons],
  items3: [...basic],
  menuTitle: 'Наименование приложения',
  searchPlaceholder: 'Введите текст',
  headerConfig: {
    home: true
  },
  settingsConfig: {
    selectionMode: 'checkbox',
    singleGroup: true,
  },
  toolbarConfig: {
    filesMode: true,
    search: true
  }
};
