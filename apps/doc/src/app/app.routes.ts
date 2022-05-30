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
