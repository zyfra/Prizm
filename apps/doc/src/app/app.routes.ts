import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GettingStartedComponent } from './documentation/getting-started/getting-started.component';

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
      (await import('./documentation/generate-example/generate-example.module')).GenerateExampleModule,
    data: {
      title: 'Generate example',
    },
  },
  {
    path: 'changelog',
    loadChildren: async (): Promise<unknown> =>
      (await import('./documentation/changelog/changelog.module')).ChangelogModule,
    data: {
      title: 'Changelog',
    },
  },
  // COMPONENTS
  {
    path: 'components/dropdowns/dropdown-host',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/dropdowns/dropdown-host/dropdown-host.module')).DropdownHostModule,
    data: {
      title: 'DropdownHost',
    },
  },
  {
    path: 'components/skeleton',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/skeleton/skeleton.module')).SkeletonModule,
    data: {
      title: 'Skeleton',
    },
  },
  {
    path: 'components/dropdowns/select',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/dropdowns/select/select.module')).SelectModule,
    data: {
      title: 'Select',
    },
  },
  {
    path: 'components/dropdowns/multi-select',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/dropdowns/multi-select/multi-select.module')).MultiSelectModule,
    data: {
      title: 'Multi Select',
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
    loadChildren: async (): Promise<unknown> => (await import('./components/card/card.module')).CardModule,
    data: {
      title: 'Card',
    },
  },
  {
    path: 'components/progress-line-bar',
    loadChildren: async (): Promise<unknown> => (await import('./components/progress/line-bar/progress-line-bar.module')).ProgressLineBarModule,
    data: {
      title: 'Progress Line',
    },
  },
  {
    path: 'components/progress-circle-bar',
    loadChildren: async (): Promise<unknown> => (await import('./components/progress/circle-bar/progress-circle-bar.module')).ProgressCircleBarModule,
    data: {
      title: 'Progress Circle',
    },
  },
  {
    path: 'components/progress-line-segmented',
    loadChildren: async (): Promise<unknown> => (await import('./components/progress/line-segmented/progress-line-segmented.module')).ProgressLineSegmentedModule,
    data: {
      title: 'Progress Segmented',
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
      (await import('./components/buttons/button/button.module')).ButtonModule,
    data: {
      title: 'Button',
    },
  },
  {
    path: 'components/split-button',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/buttons/split-button/split-button.module')).SplitButtonModule,
    data: {
      title: 'Split Button',
    },
  },
  {
    path: 'components/icon-button',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/buttons/icon-button/icon-button.module')).IconButtonModule,
    data: {
      title: 'Icon Button',
    },
  },
  {
    path: 'components/tree',
    loadChildren: async (): Promise<unknown> => (await import('./components/tree/tree.module')).TreeModule,
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
    path: 'components/confirm-popup',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/confirm-popup/confirm-popup.module')).ConfirmPopupModule,
    data: {
      title: 'Confirm Popup',
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
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/scrollbar/scrollbar.module')).ScrollbarModule,
    data: {
      title: 'Scrollbar',
    },
  },
  {
    path: 'components/input',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/input-text/input-example.module')).InputExampleModule,
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
    path: 'components/input-date',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/input-date/input-date.module')).InputDateModule,
    data: {
      title: 'Input Date',
    },
  },
  {
    path: 'components/input-date-time',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/input-date-time/input-date-time.module')).InputDateTimeTimeModule,
    data: {
      title: 'Input Date Time',
    },
  },
  {
    path: 'components/input-date-multi',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/input-date-multi/input-date-multi.module')).InputDateMultiModule,
    data: {
      title: 'Input Date Multi',
    },
  },
  {
    path: 'components/input-time',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/input-time/input-time.module')).InputTimeTimeModule,
    data: {
      title: 'Input Time',
    },
  },
  {
    path: 'components/input-date-range',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/input-date-range/input-date-range.module')).InputDateRangeModule,
    data: {
      title: 'Input Date Range',
    },
  },
  {
    path: 'components/input-date-relative',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/input-date-relative/input-date-relative.module'))
        .InputDateRelativeRelativeModule,
    data: {
      title: 'Input Date Relative',
    },
  },
  {
    path: 'components/input-number',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/input-number/input-number-example.module')).InputNumberExampleModule,
    data: {
      title: 'Input Number',
    },
  },
  {
    path: 'components/input-mask',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/input-mask/input-mask-example.module')).InputMaskExampleModule,
    data: {
      title: 'Input Mask',
    },
  },
  {
    path: 'components/input-password',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/input-password/input-password-example.module'))
        .InputPasswordExampleModule,
    data: {
      title: 'Input Password',
    },
  },
  {
    path: 'components/carousel',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/carousel/carousel-example.module')).CarouselExampleModule,
    data: {
      title: 'Carousel',
    },
  },
  {
    path: 'components/textarea',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/input/textarea/textarea-example.module')).TextareaExampleModule,
    data: {
      title: 'Textarea',
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
    path: 'components/dialogs/sidebar',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/dialogs/sidebar/sidebar.module')).SidebarModule,
    data: {
      title: 'Sidebar',
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
    loadChildren: async (): Promise<unknown> => (await import('./components/toast/toast.module')).ToastModule,
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
      (await import('./components/paginator/paginator-example.module')).PaginatorExampleModule,
    data: {
      title: 'Paginator',
    },
  },
  {
    path: 'components/checkbox',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/checkbox/checkbox-example.module')).CheckboxExampleModule,
    data: {
      title: 'Checkbox',
    },
  },
  {
    path: 'components/radio-button',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/radio/radio-button-example.module')).RadioButtonExampleModule,
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
  {
    path: 'components/accordion',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/accordion/accordion-example.module')).AccordionExampleModule,
    data: {
      title: 'Accordion',
    },
  },
  {
    path: 'tools/overlay',
    loadChildren: async (): Promise<unknown> =>
      (await import('./tools/overlay/overlay.module')).OverlayModule,
    data: {
      title: 'Overlay',
    },
  },
  {
    path: 'components/side-menu',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/side-menu/side-menu-example.module')).SideMenuExampleModule,
    data: {
      title: 'Side menu',
    },
  },
  {
    path: 'components/nav-menu',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/nav-menu/nav-menu-example.module')).NavMenuExampleModule,
    data: {
      title: 'Navigation menu',
    },
  },
  {
    path: 'components/switcher',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/switcher/switcher-example.module')).SwitcherExampleModule,
    data: {
      title: 'Switcher',
    },
  },
  {
    path: 'components/calendar',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/calendars/calendar/calendar.module')).CalendarModule,
    data: {
      title: 'Calendar',
    },
  },
  {
    path: 'components/calendar-range',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/calendars/calendar-range/calendar-range.module')).CalendarRangeModule,
    data: {
      title: 'Calendar Range',
    },
  },
  {
    path: 'components/grids',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/grid/grid-example.module')).GridExampleModule,
    data: {
      title: 'Grids',
    },
  },
  {
    path: 'components/zoom-control',
    loadChildren: async (): Promise<unknown> =>
      (await import('./components/zoom-control/zoom-control-example.module')).ZoomControlExampleModule,
    data: {
      title: 'Zoom Control',
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
