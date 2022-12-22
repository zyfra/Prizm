import { INavigationTree } from '@prizm-ui/components';

export const NAVIGATION_EXAMPLE: INavigationTree[] = [
  {
    title: 'Раздел 1',
    icon: 'audio-music',
    children: [
      {
        title: 'Подраздел 1.1',
        children: [
          {
            title: 'Предметные области',
          },
          {
            title: 'Коллекции данных',
          },
          {
            title: 'Страница 1.1.3',
            indicatorStatus: 'success',
            indicatorValue: 2,
          },
        ],
      },
      {
        title: 'Подраздел 1.2',
        children: [
          {
            title: 'Страница 1',
          },
          {
            title: 'Страница 2',
          },
          {
            title: 'Страница 3',
          },
        ],
      },
    ],
  },
  {
    title: 'Раздел 2',
    icon: 'files-method',
    isExpanded: true,
    children: [
      {
        title: 'Подраздел 2.1',
      },
      {
        title: 'Подраздел 2.2',
      },
      {
        title: 'Подраздел 2.3',
        isExpanded: true,
        children: [
          {
            title: 'Подраздел 2.3.1',
          },
          {
            title: 'Подраздел 2.3.2',
          },
        ],
      },
      {
        title: 'Подраздел 2.4',
      },
    ],
  },
  {
    title: 'Раздел 3',
    icon: 'battery-80',
    children: [
      {
        title: 'Страница 1',
      },
      {
        title: 'Страница 2',
      },
      {
        title: 'Страница 1',
      },
      {
        title: 'Страница 2',
        indicatorStatus: 'warning',
        indicatorValue: 2,
      },
    ],
  },
];
