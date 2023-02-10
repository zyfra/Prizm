import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './about-prizm/contacts/contacts.component';
import { DesignSystemComponent } from './about-prizm/design-system/design-system.component';
import { GettingStartedComponent } from './documentation/getting-started/getting-started.component';
import { MigrationComponent } from './how-to-start/migration/migration.component';

export const ROUTES: Routes = [
  {
    path: 'about-prizm',
    children: [
      {
        path: 'license',
        loadChildren: () => import('./about-prizm/license/license.module').then(m => m.LicenseModule),
        data: {
          title: 'License',
        },
      },
      {
        path: 'changelog',
        loadChildren: () => import('./about-prizm/changelog/changelog.module').then(i => i.ChangelogModule),
        data: {
          title: 'Changelog',
        },
      },
      {
        path: 'design-system',
        component: DesignSystemComponent,
        data: {
          title: 'About Design System',
        },
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        data: {
          title: 'Contacts',
        },
      },
    ],
  },
  //Guidelines
  {
    path: 'guidelines',
    children: [
      {
        path: 'typography',
        loadChildren: () => import('./guidelines/typography/typography.module').then(m => m.TypographyModule),
        data: {
          title: 'Typography',
        },
      },
      {
        path: 'colors',
        loadChildren: () => import('./guidelines/colors/colors.module').then(m => m.ColorsModule),
        data: {
          title: 'Colors',
        },
      },
      {
        path: 'grid',
        loadChildren: () => import('./guidelines/grid/grid.module').then(m => m.GridModule),
        data: {
          title: 'Grid',
        },
      },
    ],
  },
  //How to start
  {
    path: 'how-to-start',
    children: [
      {
        path: 'for-developers',
        component: GettingStartedComponent,
        data: {
          title: 'For developers',
        },
      },
      {
        path: 'migration',
        component: MigrationComponent,
        data: {
          title: 'Migration',
        },
      },
      {
        path: '**',
        redirectTo: 'for-developers',
      },
    ],
  },
  // DOC
  {
    path: 'generate-example',
    loadChildren: () =>
      import('./documentation/generate-example/generate-example.module').then(i => i.GenerateExampleModule),
    data: {
      title: 'Generate example',
    },
  },
  {
    path: 'contributing',
    loadChildren: () =>
      import('./documentation/contributing/contributing.module').then(i => i.ContributingModule),
    data: {
      title: 'Contributing',
    },
  },
  {
    path: 'codestyle',
    loadChildren: () => import('./documentation/codestyle/codestyle.module').then(i => i.CodestyleModule),
    data: {
      title: 'CodeStyle',
    },
  },
  // COMPONENTS
  {
    path: 'components/dropdowns/dropdown-host',
    loadChildren: () =>
      import('./components/dropdowns/dropdown-host/dropdown-host.module').then(i => i.DropdownHostModule),
    data: {
      title: 'DropdownHost',
    },
  },
  {
    path: 'components/skeleton',
    loadChildren: () => import('./components/skeleton/skeleton.module').then(i => i.SkeletonModule),
    data: {
      title: 'Skeleton',
    },
  },
  {
    path: 'components/dropdowns/select',
    loadChildren: () => import('./components/dropdowns/select/select.module').then(i => i.SelectModule),
    data: {
      title: 'Select',
    },
  },
  {
    path: 'components/dropdowns/multi-select',
    loadChildren: () =>
      import('./components/dropdowns/multi-select/multi-select.module').then(i => i.MultiSelectModule),
    data: {
      title: 'Multi Select',
    },
  },
  {
    path: 'components/shadow',
    loadChildren: () => import('./components/shadow/shadow.module').then(i => i.ShadowModule),
    data: {
      title: 'Shadow',
    },
  },
  {
    path: 'components/card',
    loadChildren: () => import('./components/card/card.module').then(i => i.CardModule),
    data: {
      title: 'Card',
    },
  },
  {
    path: 'components/progress-line-bar',
    loadChildren: () =>
      import('./components/progress/line-bar/progress-line-bar.module').then(i => i.ProgressLineBarModule),
    data: {
      title: 'Progress Line',
    },
  },
  {
    path: 'components/progress-circle-bar',
    loadChildren: () =>
      import('./components/progress/circle-bar/progress-circle-bar.module').then(
        i => i.ProgressCircleBarModule
      ),
    data: {
      title: 'Progress Circle',
    },
  },
  {
    path: 'components/progress-line-segmented',
    loadChildren: () =>
      import('./components/progress/line-segmented/progress-line-segmented.module').then(
        i => i.ProgressLineSegmentedModule
      ),
    data: {
      title: 'Progress Segmented',
    },
  },
  {
    path: 'components/widget',
    loadChildren: () => import('./components/widget/widget.module').then(i => i.WidgetModule),
    data: {
      title: 'Widget',
    },
  },
  {
    path: 'components/button',
    loadChildren: () => import('./components/buttons/button/button.module').then(i => i.ButtonModule),
    data: {
      title: 'Button',
    },
  },
  {
    path: 'components/split-button',
    loadChildren: () =>
      import('./components/buttons/split-button/split-button.module').then(i => i.SplitButtonModule),
    data: {
      title: 'Split Button',
    },
  },
  {
    path: 'components/icon-button',
    loadChildren: () =>
      import('./components/buttons/icon-button/icon-button.module').then(i => i.IconButtonModule),
    data: {
      title: 'Icon Button',
    },
  },
  {
    path: 'components/tree',
    loadChildren: () => import('./components/tree/tree.module').then(i => i.TreeModule),
    data: {
      title: 'Tree',
    },
  },
  {
    path: 'components/toggle',
    loadChildren: () => import('./components/toggle/toggle.module').then(i => i.ToggleModule),
    data: {
      title: 'Toggle',
    },
  },
  {
    path: 'components/hint',
    loadChildren: () => import('./components/hint/hint.module').then(i => i.HintModule),
    data: {
      title: 'Hint',
    },
  },
  {
    path: 'components/tooltip',
    loadChildren: () => import('./components/tooltip/tooltip.module').then(i => i.TooltipModule),
    data: {
      title: 'Tooltip',
    },
  },
  {
    path: 'components/confirm-popup',
    loadChildren: () =>
      import('./components/confirm-popup/confirm-popup.module').then(i => i.ConfirmPopupModule),
    data: {
      title: 'Confirm Popup',
    },
  },
  {
    path: 'components/old-icon',
    loadChildren: () => import('./components/icons/old/icon.module').then(i => i.IconModule),
    data: {
      title: 'Old Icon',
    },
  },
  {
    path: 'components/icon',
    loadChildren: () => import('./components/icons/svg/icon.module').then(i => i.IconModule),
    data: {
      title: 'Icon',
    },
  },
  {
    path: 'components/flag-icons',
    loadChildren: () => import('./components/icons/flags/flags.module').then(i => i.FlagsModule),
    data: {
      title: 'Icon Flags',
    },
  },
  {
    path: 'components/scrollbar',
    loadChildren: () => import('./components/scrollbar/scrollbar.module').then(i => i.ScrollbarModule),
    data: {
      title: 'Scrollbar',
    },
  },
  {
    path: 'components/input',
    loadChildren: () =>
      import('./components/input/input-text/input-example.module').then(i => i.InputExampleModule),
    data: {
      title: 'Input',
    },
  },
  {
    path: 'components/input-chips',
    loadChildren: () =>
      import('./components/input/input-chips/input-chips-example.module').then(
        i => i.InputChipsExampleModule
      ),
    data: {
      title: 'Input Chips',
    },
  },
  {
    path: 'components/input-date',
    loadChildren: () =>
      import('./components/input/input-date/input-date.module').then(i => i.InputDateModule),
    data: {
      title: 'Input Date',
    },
  },
  {
    path: 'components/input-date-time-range',
    loadChildren: () =>
      import('./components/input/input-date-time-range/input-date-time-range.module').then(
        i => i.InputDateTimeRangeModule
      ),
    data: {
      title: 'Input Date Time Range',
    },
  },
  {
    path: 'components/input-date-time',
    loadChildren: () =>
      import('./components/input/input-date-time/input-date-time.module').then(
        i => i.InputDateTimeTimeModule
      ),
    data: {
      title: 'Input Date Time',
    },
  },
  {
    path: 'components/input-date-multi',
    loadChildren: () =>
      import('./components/input/input-date-multi/input-date-multi.module').then(i => i.InputDateMultiModule),
    data: {
      title: 'Input Date Multi',
    },
  },
  {
    path: 'components/input-time',
    loadChildren: () =>
      import('./components/input/input-time/input-time.module').then(i => i.InputTimeTimeModule),
    data: {
      title: 'Input Time',
    },
  },
  {
    path: 'components/input-date-range',
    loadChildren: () =>
      import('./components/input/input-date-range/input-date-range.module').then(i => i.InputDateRangeModule),
    data: {
      title: 'Input Date Range',
    },
  },
  {
    path: 'components/input-date-relative',
    loadChildren: () =>
      import('./components/input/input-date-relative/input-date-relative.module').then(
        i => i.InputDateRelativeRelativeModule
      ),
    data: {
      title: 'Input Date Relative',
    },
  },
  {
    path: 'components/input-number',
    loadChildren: () =>
      import('./components/input/input-number/input-number-example.module').then(
        i => i.InputNumberExampleModule
      ),
    data: {
      title: 'Input Number',
    },
  },
  {
    path: 'components/input-mask',
    loadChildren: () =>
      import('./components/input/input-mask/input-mask-example.module').then(i => i.InputMaskExampleModule),
    data: {
      title: 'Input Mask',
    },
  },
  {
    path: 'components/input-password',
    loadChildren: () =>
      import('./components/input/input-password/input-password-example.module').then(
        i => i.InputPasswordExampleModule
      ),
    data: {
      title: 'Input Password',
    },
  },
  {
    path: 'components/carousel',
    loadChildren: () =>
      import('./components/input/carousel/carousel-example.module').then(i => i.CarouselExampleModule),
    data: {
      title: 'Carousel',
    },
  },
  {
    path: 'components/textarea',
    loadChildren: () =>
      import('./components/input/textarea/textarea-example.module').then(i => i.TextareaExampleModule),
    data: {
      title: 'Textarea',
    },
  },
  {
    path: 'components/loader',
    loadChildren: () => import('./components/loader/loader.module').then(i => i.LoaderModule),
    data: {
      title: 'Loader',
    },
  },
  {
    path: 'components/dialogs/dialog',
    loadChildren: () => import('./components/dialogs/dialog/dialog.module').then(i => i.DialogModule),
    data: {
      title: 'Dialog',
    },
  },
  {
    path: 'components/dialogs/sidebar',
    loadChildren: () => import('./components/dialogs/sidebar/sidebar.module').then(i => i.SidebarModule),
    data: {
      title: 'Sidebar',
    },
  },
  {
    path: 'components/dialogs/confirm-dialog',
    loadChildren: () =>
      import('./components/dialogs/confirm-dialog/confirm.module').then(i => i.ConfirmModule),
    data: {
      title: 'Confirm Dialog',
    },
  },
  {
    path: 'components/toast',
    loadChildren: () => import('./components/toast/toast.module').then(i => i.ToastModule),
    data: {
      title: 'Toast',
    },
  },
  {
    path: 'components/indicators',
    loadChildren: () =>
      import('./components/indicators/indicators-example.module').then(i => i.IndicatorsExampleModule),
    data: {
      title: 'Indicators',
    },
  },
  {
    path: 'components/paginator',
    loadChildren: () =>
      import('./components/paginator/paginator-example.module').then(i => i.PaginatorExampleModule),
    data: {
      title: 'Paginator',
    },
  },
  {
    path: 'components/checkbox',
    loadChildren: () =>
      import('./components/checkbox/checkbox-example.module').then(i => i.CheckboxExampleModule),
    data: {
      title: 'Checkbox',
    },
  },
  {
    path: 'components/radio-button',
    loadChildren: () =>
      import('./components/radio/radio-button-example.module').then(i => i.RadioButtonExampleModule),
    data: {
      title: 'Radio-button',
    },
  },
  {
    path: 'components/panel',
    loadChildren: () => import('./components/panel/panel-example.module').then(i => i.PanelExampleModule),
    data: {
      title: 'Panel',
    },
  },
  {
    path: 'components/tabs',
    loadChildren: () => import('./components/tabs/tabs-example.module').then(i => i.TabsExampleModule),
    data: {
      title: 'Tabs',
    },
  },
  {
    path: 'components/breadcrumbs',
    loadChildren: () =>
      import('./components/breadcrumbs/breadcrumbs-example.module').then(i => i.BreadcrumbsExampleModule),
    data: {
      title: 'Breadcrumbs',
    },
  },
  {
    path: 'components/table',
    loadChildren: () => import('./components/table/table-example.module').then(i => i.TableExampleModule),
    data: {
      title: 'Table',
    },
  },
  {
    path: 'components/table-old',
    loadChildren: () =>
      import('./components/table-old/table-example-old.module').then(i => i.TableExampleOldModule),
    data: {
      title: 'Table',
    },
  },
  {
    path: 'components/accordion',
    loadChildren: () =>
      import('./components/accordion/accordion-example.module').then(i => i.AccordionExampleModule),
    data: {
      title: 'Accordion',
    },
  },
  {
    path: 'tools/overlay',
    loadChildren: () => import('./tools/overlay/overlay.module').then(i => i.OverlayModule),
    data: {
      title: 'Overlay',
    },
  },
  {
    path: 'tools/theme',
    loadChildren: () => import('./tools/theme/theme.module').then(i => i.ThemeModule),
    data: {
      title: 'Theme',
    },
  },
  {
    path: 'tools/polymorph',
    loadChildren: () => import('./tools/polymorph/polymorph.module').then(i => i.ExamplePolymorphModule),
    data: {
      title: 'Polymorph',
    },
  },
  // CHARTS
  {
    path: 'charts/line',
    loadChildren: () => import('./charts/line/line.module').then(i => i.LineModule),
    data: {
      title: 'Line',
    },
  },
  {
    path: 'charts/area',
    loadChildren: () => import('./charts/area/area.module').then(i => i.AreaModule),
    data: {
      title: 'Area',
    },
  },
  {
    path: 'charts/column-group',
    loadChildren: () => import('./charts/column/column.module').then(i => i.ColumnModule),
    data: {
      title: 'Column',
    },
  },
  {
    path: 'charts/bar',
    loadChildren: () => import('./charts/bar/bar.module').then(i => i.BarModule),
    data: {
      title: 'Bar',
    },
  },
  {
    path: 'charts/pie',
    loadChildren: () => import('./charts/pie/pie.module').then(i => i.PieModule),
    data: {
      title: 'Pie',
    },
  },
  {
    path: 'charts/radar',
    loadChildren: () => import('./charts/radar/radar.module').then(i => i.RadarModule),
    data: {
      title: 'Radar',
    },
  },
  {
    path: 'charts/scatter',
    loadChildren: () => import('./charts/scatter/scatter.module').then(i => i.ScatterModule),
    data: {
      title: 'Scatter',
    },
  },
  {
    path: 'charts/treemap',
    loadChildren: () => import('./charts/treemap/treemap.module').then(i => i.TreemapModule),
    data: {
      title: 'Treemap',
    },
  },
  {
    path: 'charts/gauge',
    loadChildren: () => import('./charts/gauge/gauge.module').then(i => i.GaugeModule),
    data: {
      title: 'Gauge',
    },
  },
  {
    path: 'charts/radial-bar',
    loadChildren: () => import('./charts/radial-bar/radial-bar.module').then(i => i.RadialBarModule),
    data: {
      title: 'Radial Bar',
    },
  },
  {
    path: 'charts/waterfall',
    loadChildren: () => import('./charts/waterfall/waterfall.module').then(i => i.WaterfallModule),
    data: {
      title: 'Waterfall',
    },
  },
  {
    path: 'components/side-menu',
    loadChildren: () =>
      import('./components/side-menu/side-menu-example.module').then(i => i.SideMenuExampleModule),
    data: {
      title: 'Side menu',
    },
  },
  {
    path: 'components/nav-menu',
    loadChildren: () =>
      import('./components/nav-menu/nav-menu-example.module').then(i => i.NavMenuExampleModule),
    data: {
      title: 'Navigation menu',
    },
  },
  {
    path: 'components/navigation',
    loadChildren: () =>
      import('./components/navigation/navigation-example.module').then(i => i.NavigationExampleModule),
    data: {
      title: 'Navigation',
    },
  },
  {
    path: 'components/switcher',
    loadChildren: () =>
      import('./components/switcher/switcher-example.module').then(i => i.SwitcherExampleModule),
    data: {
      title: 'Switcher',
    },
  },
  {
    path: 'components/calendar',
    loadChildren: () => import('./components/calendars/calendar/calendar.module').then(i => i.CalendarModule),
    data: {
      title: 'Calendar',
    },
  },
  {
    path: 'components/calendar-range',
    loadChildren: () =>
      import('./components/calendars/calendar-range/calendar-range.module').then(i => i.CalendarRangeModule),
    data: {
      title: 'Calendar Range',
    },
  },
  {
    path: 'components/grids',
    loadChildren: () => import('./components/grid/grid-example.module').then(i => i.GridExampleModule),
    data: {
      title: 'Grids',
    },
  },
  {
    path: 'components/zoom-control',
    loadChildren: () =>
      import('./components/zoom-control/zoom-control-example.module').then(i => i.ZoomControlExampleModule),
    data: {
      title: 'Zoom Control',
    },
  },
  {
    path: 'components/stepper',
    loadChildren: () =>
      import('./components/stepper/stepper-example.module').then(i => i.PrizmStepperExampleModule),
    data: {
      title: 'Stepper',
    },
  },
  {
    path: 'components/splitter',
    loadChildren: () =>
      import('./components/splitter/splitter-example.module').then(i => i.PrizmSpliiterExampleModule),
    data: {
      title: 'Splitter',
    },
  },
  {
    path: 'components/slider',
    loadChildren: () => import('./components/slider/slider.module').then(i => i.PrizmSliderExampleModule),
    data: {
      title: 'Slider',
    },
  },
  {
    path: 'components/cron',
    loadChildren: () => import('./components/cron/cron.module').then(i => i.CronModule),
    data: {
      title: 'Cron',
    },
  },
  {
    path: 'components/error-page',
    loadChildren: () =>
      import('./components/error-page/error-page.module').then(i => i.PrizmErrorPageExampleModule),
    data: {
      title: 'Error page',
    },
  },
  {
    path: 'components/file-upload',
    loadChildren: () =>
      import('./components/file-upload/file-upload-example.module').then(i => i.PrizmFileUploadExampleModule),
    data: {
      title: 'File upload',
    },
  },
  { path: '**', redirectTo: 'how-to-start/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutes {}
