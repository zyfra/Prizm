import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {GettingStartedComponent} from "./getting-started/getting-started.component";

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
    loadChildren: async () =>
      (await import('./components/example-component/example.module'))
        .ExampleModule,
    data: {
      title: 'Example',
    },
  },
  // COMPONENTS
  {
    path: 'components/button',
    loadChildren: async () =>
      (await import('./components/button/button.module'))
        .ButtonModule,
    data: {
      title: 'Button',
    },
  },
  {
    path: 'components/icon',
    loadChildren: async () =>
      (await import('./components/icon/icon.module'))
        .IconModule,
    data: {
      title: 'Icon',
    },
  },
  {
    path: 'components/loader',
    loadChildren: async () =>
      (await import('./components/loader/loader.module'))
        .LoaderModule,
    data: {
      title: 'Loader',
    },
  },
  {path: '**', redirectTo: 'getting-started'},
]


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
