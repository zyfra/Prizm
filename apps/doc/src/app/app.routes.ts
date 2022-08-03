import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';

export const ROUTES = [
  // DOCS
  {
    path: 'getting-started',
    component: GettingStartedComponent,
    data: {
      title: 'Getting started',
    },
  },
  {
    path: 'example-component',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/example-component/example.module')).ExampleModule,
    data: {
      title: 'Example',
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
      title: 'Icon',
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
  },
  {
    path: 'components/paginator',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/paginator-example/paginator-example.module')).PaginatorExampleModule,
  },
  {
    path: 'components/checkbox',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/example-checkbox-component/example-checkbox.module')).ExampleCheckboxModule,
  },
  {
    path: 'components/radio-button',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/example-radio-component/example-radio-button.module'))
        .ExampleRadioButtonModule,
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
