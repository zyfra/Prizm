import { Type } from '@angular/core';
import { Routes } from '@angular/router';

export function prizmDocGenerateRoutes(type: Type<unknown>): Routes {
  return [
    {
      path: ``,
      component: type,
      children: [
        {
          path: `:tab`,
          component: type,
        },
      ],
    },
  ];
}
