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
  // COMPONENTS
  {
    path: 'components/button',
    loadChildren: async () => (await import('./components/button/button.module')).ExampleButtonModule,
    data: {
      title: 'Button',
    },
  },
  {
    path: 'components/input',
    loadChildren: async () => (await import('./components/input/input-example.module')).InputExampleModule,
    data: {
      title: 'Input',
    },
  },
  { path: '**', redirectTo: 'components/button' },
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
