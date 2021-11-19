import { ZyfraMenuItem } from './model/zyfra-menu-item.interface';

export const basic: ZyfraMenuItem[] = [
  {label: 'Наименование ячейки 1'},
  {label: 'Наименование ячейки 2',  routerLink: ['/page2']},
  {label: 'Наименование ячейки 3 длиннее остальных'},
  {label: 'Наименование ячейки 4'},
  {label: 'Наименование ячейки 5'},
];

export const basicWithIcons: ZyfraMenuItem[] = [
  {label: 'Наименование ячейки 1', icon: 'zyfra-icon files-file'},
  {label: 'Наименование ячейки 2', icon: 'zyfra-icon files-file'},
  {label: 'Наименование ячейки 3 длиннее остальных', icon: 'zyfra-icon files-file',  routerLink: ['/page3']},
  {label: 'Наименование ячейки 4', icon: 'zyfra-icon files-file'},
  {label: 'Наименование ячейки 5', icon: 'zyfra-icon files-file'},
];

export const subItems: ZyfraMenuItem[] = [
  {label: 'Наименование ячейки 1', icon: 'zyfra-icon files-file'},
  {
    label: 'Наименование ячейки 2',
    icon: 'zyfra-icon files-file',
    badge: 'warning',
    badgeStyleClass: 'p-badge-dot',
    items: [
      {
        label: 'Ячейка второго уровня 1 длиннее остальных',
        icon: 'zyfra-icon files-file',
      },
      {
        label: 'Ячейка второго уровня 2',
        icon: 'zyfra-icon files-file',
        items: [
          {
            label: 'Ячейка тертьего уровня 1 длиннее остальных',
            icon: 'zyfra-icon files-file',
            badge: 'danger',
            badgeStyleClass: 'p-badge-dot',
            routerLink: ['/page1']
          },
          {
            label: 'Ячейка тертьего уровня 2',
            icon: 'zyfra-icon files-file',
            items: [
              {
                label: 'Ячейка четвертого уровня 1',
                icon: 'zyfra-icon files-file',
                items: [
                  {
                    label: 'Ячейка пятого уровня 1',
                    icon: 'zyfra-icon files-file',
                  },
                  {
                    label: 'Ячейка пятого уровня 2 длиннее остальных',
                    icon: 'zyfra-icon files-file',
                  }
                ]
              },
              {
                label: 'Ячейка четвертого уровня 2',
                icon: 'zyfra-icon files-file',
              },
              {
                label: 'Ячейка четвертого уровня 3',
                icon: 'zyfra-icon files-file',
              }
            ]
          }
        ]
      },
      {
        label: 'Ячейка второго уровня 3',
        icon: 'zyfra-icon files-file',
      }
    ]
  },
  {label: 'Наименование ячейки 3', icon: 'zyfra-icon files-file'},
  {
    label: 'Наименование ячейки 4',
    icon: 'zyfra-icon files-file',
    badge: 'info',
    badgeStyleClass: 'p-badge-dot',
    items: [
      {
        label: 'Ячейка второго уровня 1',
        icon: 'zyfra-icon files-file',
      },
      {
        label: 'Ячейка второго уровня 2 длиннее остальных',
        icon: 'zyfra-icon files-file'
      }
    ]
  },
  {label: 'Наименование ячейки 5', icon: 'zyfra-icon files-file'},
];

export const subItemsRubricator: ZyfraMenuItem[] = [
  {label: 'Наименование ячейки 1', icon: 'zyfra-icon files-file'},
  {
    label: 'Наименование ячейки 2',
    icon: 'zyfra-icon files-file',
    items: [
      {
        label: 'A-Ячейка второго уровня 1',
        icon: 'zyfra-icon files-file',
      },
      {
        label: 'Д-Ячейка второго уровня 2',
        icon: 'zyfra-icon files-file',
        items: [
          {
            label: 'Б-Ячейка тертьего уровня 1',
            icon: 'zyfra-icon files-file',
          },
          {
            label: 'Ячейка тертьего уровня 2',
            icon: 'zyfra-icon files-file',
            items: [
              {
                label: 'В-Ячейка четвертого уровня 1',
                icon: 'zyfra-icon files-file',
                items: [
                  {
                    label: 'Ц-Ячейка пятого уровня 1',
                    icon: 'zyfra-icon files-file',
                  },
                  {
                    label: 'Э-Ячейка пятого уровня 2',
                    icon: 'zyfra-icon files-file',
                  }
                ]
              },
              {
                label: 'Ж-Ячейка четвертого уровня 2',
                icon: 'zyfra-icon files-file',
              },
              {
                label: 'М-Ячейка четвертого уровня 3',
                icon: 'zyfra-icon files-file',
              }
            ]
          }
        ]
      },
      {
        label: 'У-Ячейка второго уровня 3',
        icon: 'zyfra-icon files-file',
      }
    ]
  },
  {label: 'Наименование ячейки 3', icon: 'zyfra-icon files-file'},
  {
    label: 'Наименование ячейки 4',
    icon: 'zyfra-icon files-file',
    items: [
      {
        label: 'Ячейка второго уровня 1',
        icon: 'zyfra-icon files-file',
      },
      {
        label: 'Ячейка второго уровня 2',
        icon: 'zyfra-icon files-file'
      }
    ]
  },
  {label: 'Наименование ячейки 5', icon: 'zyfra-icon files-file'},
];
