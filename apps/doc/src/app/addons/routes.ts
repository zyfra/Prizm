import { Routes } from '@angular/router';

export const ADDONS_ROUTES: Routes = [
  {
    path: 'addons/query-builder',
    loadChildren: () =>
      import('./query-builder/query-builder-example.module').then(i => i.QueryBuilderExampleModule),
    data: { title: 'Query Builder' },
  },
];
