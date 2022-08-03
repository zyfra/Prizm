import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';

export const ROUTES = [
  // DOC
  {
    path: 'getting-started',
    component: GettingStartedComponent,
    data: {
      title: 'Getting started',
    },
  },
  {
    path: 'generate-example',
    loadChildren: async (): Promise<unknown> =>
      (await import('./generate-example/generate-example.module')).GenerateExampleModule,
    data: {
      title: 'Generate example',
    },
  },
  // COMPONENTS
  {
    path: 'components/dropdown-host',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/dropdown-host/dropdown-host.module')).DropdownHostModule,
    data: {
      title: 'DropdownHost',
    },
  },
  {
    path: 'components/shadow',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/shadow/shadow.module')).ShadowModule,
    data: {
      title: 'Shadow',
    },
  },
  {
    path: 'components/card',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/card/card.module')).CardModule,
    data: {
      title: 'Card',
    },
  },
  {
    path: 'components/widget',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/widget/widget.module')).WidgetModule,
    data: {
      title: 'Widget',
    },
  },
  {
    path: 'components/button',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/button/button.module')).ButtonModule,
    data: {
      title: 'Button',
    },
  },
  {
    path: 'components/tree',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/tree/tree.module')).TreeModule,
    data: {
      title: 'Tree',
    },
  },
  {
    path: 'components/toggle',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/toggle/toggle.module')).ToggleModule,
    data: {
      title: 'Toggle',
    },
  },
  {
    path: 'components/hint',
    loadChildren: async (): Promise<unknown> => (await import('./components/hint/hint.module')).HintModule,
    data: {
      title: 'Hint',
    },
  },
  {
    path: 'components/tooltip',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/tooltip/tooltip.module')).TooltipModule,
    data: {
      title: 'Tooltip',
    },
  },
  {
    path: 'components/icon',
    loadChildren: async (): Promise<unknown> => (await import('./components/icon/icon.module')).IconModule,
    data: {
      title: 'Icon',
    },
  },
  {
    path: 'components/scrollbar',
    loadChildren: async (): Promise<unknown> => (await import('./components/scrollbar/scrollbar.module')).ScrollbarModule,
    data: {
      title: 'Scrollbar',
    },
  },
  {
    path: 'components/input',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/input-example.module')).InputExampleModule,
    data: {
      title: 'Input',
    },
  },
  {
    path: 'components/input-chips',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/input-chips/input-chips-example.module')).InputChipsExampleModule,
    data: {
      title: 'Input Chips',
    },
  },
  {
    path: 'components/loader',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/loader/loader.module')).LoaderModule,
    data: {
      title: 'Loader',
    },
  },
  {
    path: 'components/dialogs/dialog',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/dialogs/dialog/dialog.module')).DialogModule,
    data: {
      title: 'Dialog',
    },
  },
  {
    path: 'components/dialogs/confirm-dialog',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/dialogs/confirm-dialog/confirm.module')).ConfirmModule,
    data: {
      title: 'Confirm Dialog',
    },
  },
  {
    path: 'components/toast',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/toast/toast.module')).ToastModule,
    data: {
      title: 'Toast',
    },
  },
  {
    path: 'components/indicators',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/indicators/indicators-example.module')).IndicatorsExampleModule,
    data: {
      title: 'Indicators',
    },
  },
  {
    path: 'components/paginator',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/paginator-example/paginator-example.module')).PaginatorExampleModule,
    data: {
      title: 'Paginator',
    },
  },
  {
    path: 'components/checkbox',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/example-checkbox-component/example-checkbox.module')).ExampleCheckboxModule,
    data: {
      title: 'Checkbox',
    },
  },
  {
    path: 'components/radio-button',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/example-radio-component/example-radio-button.module'))
        .ExampleRadioButtonModule,
    data: {
      title: 'Radio-button',
    },
  },
  {
    path: 'components/panel',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/panel/panel-example.module')).PanelExampleModule,
    data: {
      title: 'Panel',
    },
  },
  {
    path: 'components/tabs',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/tabs/tabs-example.module')).TabsExampleModule,
    data: {
      title: 'Tabs',
    },
  },
  {
    path: 'components/breadcrumbs',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/breadcrumbs/breadcrumbs-example.module')).BreadcrumbsExampleModule,
    data: {
      title: 'Breadcrumbs',
    },
  },
  {
    path: 'components/table',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/table/table-example.module')).TableExampleModule,
    data: {
      title: 'Table',
    },
  },
  { path: '**', redirectTo: 'getting-started' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutes {}
