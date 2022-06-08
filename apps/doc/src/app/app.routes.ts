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
    path: 'components/button',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/button/button.module')).ButtonModule,
    data: {
      title: 'Button',
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
    path: 'components/icon',
    loadChildren: async (): Promise<unknown> => (await import('./components/icon/icon.module')).IconModule,
    data: {
      title: 'Icon',
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
    path: 'components/loader',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/loader/loader.module')).LoaderModule,
    data: {
      title: 'Loader',
    },
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
