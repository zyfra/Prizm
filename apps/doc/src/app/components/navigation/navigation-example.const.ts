import { INavigationTree } from '@prizm-ui/components';

export const NAVIGATION_EXAMPLE: INavigationTree[] = [
  {
    title: 'Раздел 1',
    icon: 'music',
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
            icon: 'camera-movie',
          },
        ],
      },
      {
        title: 'Подраздел 1.2',
        children: [
          {
            title: 'Страница 1.2.1',
          },
          {
            title: 'Страница 1.2.2',
          },
          {
            title: 'Страница 1.2.3',
          },
        ],
      },
    ],
  },
  {
    title: 'Раздел 2',
    icon: 'list',
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
    icon: 'battery-three-quarters',
    children: [
      {
        title: 'Страница 3.1',
      },
      {
        title: 'Страница 3.2',
      },
      {
        title: 'Страница 3.3',
      },
      {
        title: 'Страница 3.4',
        indicatorStatus: 'warning',
        indicatorValue: 2,
      },
    ],
  },
  {
    title: 'Очень очень длинный раздел 4',
    icon: 'battery-three-quarters',
    children: [
      {
        title: 'Очень очень длинный подраздел 4.1',
      },
      {
        title: 'Очень очень длинный подраздел 4.2',
        children: [
          {
            title: 'Очень очень длинный подраздел 4.2.1',
          },
          {
            title: 'Подраздел 4.2.2',
          },
        ],
      },
      {
        title: 'Подраздел 4.3',
      },
    ],
  },
];
