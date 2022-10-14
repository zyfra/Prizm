import { HierarchicalMenuNode } from '../zyfra-hierarchical-menu.interface';

export const exampleData: HierarchicalMenuNode[] = [
  {
    id: 'Предприятие',
    name: 'Предприятие',
    attributes: {
      icon: 'shapes-shape-4',
    },
    hierarchy: {
      collapsed: false,
    },
    children: [
      {
        id: 'Агло-доменное пр-во',
        name: 'Агло-доменное пр-во',
        attributes: {
          icon: 'poi-pipeline',
        },
      },
      {
        id: 'Прокатное пр-во',
        name: 'Прокатное пр-во',
        attributes: {
          icon: 'poi-pipeline',
        },
        hierarchy: {
          collapsed: false,
        },
        children: [
          {
            id: 'НЛМК-Липецк',
            name: 'НЛМК-Липецк',
            attributes: {
              icon: 'poi-factory',
            },
            hierarchy: {
              collapsed: false,
            },
            children: [
              {
                id: 'ЦГП 1',
                name: 'ЦГП 1',
                attributes: {
                  icon: 'poi-press',
                },
              },
              {
                id: 'ЦГП 2',
                name: 'ЦГП 2',
                attributes: {
                  icon: 'poi-press',
                },
              },
              {
                id: 'ЦГП 3',
                name: 'ЦГП 3',
                attributes: {
                  icon: 'poi-press',
                },
              },

              {
                id: 'Отчетность',
                name: 'Отчетность',
                attributes: {
                  icon: 'files-file',
                  subMenuItem: true,
                },
                hierarchy: {
                  onlyFolder: true,
                },
                children: [
                  {
                    id: 'xz',
                    name: 'Отчет 1',
                    attributes: {
                      icon: 'files-file',
                      subMenuItem: true,
                    },

                    children: [
                      {
                        id: 'yxz',
                        name: 'Отчет 1.1',
                        attributes: {
                          icon: 'files-file',
                          subMenuItem: true,
                        },
                      },

                      {
                        id: 'yxz2',
                        name: 'Отчет 1.2',
                        attributes: {
                          icon: 'files-file',
                          subMenuItem: true,
                        },
                      },
                    ],
                  },

                  {
                    id: 'xz2',
                    name: 'Отчет 2',
                    attributes: {
                      icon: 'files-file',
                      subMenuItem: true,
                    },
                  },
                ],
              },
              {
                id: '9',
                name: 'Учёт',
                attributes: {
                  icon: 'files-file',
                  subMenuItem: true,
                },
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: '10',
    name: 'Объектная модель',
    attributes: {
      icon: 'charts-hexagon-multiple',
    },
    hierarchy: {},
  },
];

export const exampleData2: HierarchicalMenuNode[] = [
  {
    id: 'Предприятие',
    name: 'Раздел 1',
    attributes: {
      icon: 'audio-music',
    },
    hierarchy: {
      collapsed: false,
    },
    children: [
      {
        id: 'НЛМК-Липецк',
        name: 'Подраздел 1',
        attributes: {
          icon: 'files-folder',
        },
        hierarchy: {
          collapsed: false,
        },
        children: [
          {
            id: 'ЦГП 1',
            name: 'Предметные области',
            attributes: {},
          },
          {
            id: 'ЦГП 2',
            name: 'Коллекции данных',
            attributes: {},
          },
          {
            id: 'ЦГП 3',
            name: 'Страница 3',
            attributes: {},
          },
        ],
      },

      {
        id: 'НЛМК-Липецкацу',
        name: 'Подраздел 2',
        attributes: {
          icon: 'files-folder',
        },
        hierarchy: {
          collapsed: false,
        },
        notification: {
          showCount: false,
          count: 2,
          color: '#2862C6',
        },
        children: [
          {
            id: 'ЦГП 1ацу',
            name: 'Страница 1',
            attributes: {},
          },
          {
            id: 'ЦГП 2ауц',
            name: 'Страница 2',
            attributes: {},
          },
          {
            id: 'ЦГП 3ауц',
            name: 'Страница 3',
            attributes: {},
            notification: {
              showCount: true,
              count: 2,
              color: '#2862C6',
            },
          },
        ],
      },
    ],
  },

  {
    id: 'НЛМК-Липецкаfwefцацуау',
    name: 'Раздел 2',
    attributes: {
      icon: 'files-description-properties\n',
    },
    children: [
      {
        id: 'ЦГП 1ацуfewацуа',
        name: 'Страница 1',
        attributes: {},
      },
    ],
  },
  {
    id: 'НЛМК-Липецкацацуау',
    name: 'Раздел 3',
    attributes: {
      icon: 'battery-80',
    },
    hierarchy: {
      collapsed: false,
    },
    notification: {
      showCount: false,
      count: 3,
      color: '#C66008',
    },
    children: [
      {
        id: 'ЦГП 1ацуацуа',
        name: 'Страница 1',
        attributes: {},
      },
      {
        id: 'ЦГП 2ауцуца',
        name: 'Страница 2',
        attributes: {},
        notification: {
          showCount: true,
          count: 3,
          color: '#C66008',
        },
      },
    ],
  },
];
