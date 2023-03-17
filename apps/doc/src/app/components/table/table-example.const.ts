import { ITableProduct } from './examples/table-basic-example/table-basic-example.component';

export const TABLE_EXAMPLE_TREE_DATA_1: ITableProduct[] = [
  {
    code: '1',
    name: 'Name 1',
    category: 'Premium',
    count: 3000,
    children: [
      {
        code: '1_1',
        name: 'Name 1_1',
        category: 'Premium',
        count: 2000,
        children: [
          {
            code: '1_1_1',
            name: 'Name 1_1_1',
            category: 'Premium',
            count: 500,
          },
          {
            code: '1_1_2',
            name: 'Name 1_1_2',
            category: 'Premium',
            count: 500,
          },
          {
            code: '1_1_3',
            name: 'Name 1_1_3',
            category: 'Premium',
            count: 100,
          },
        ],
      },
      {
        code: '1_2',
        name: 'Name 1_2',
        category: 'Premium',
        count: 1000,
      },
    ],
  },
  {
    code: '2',
    name: 'Name 2',
    category: 'Active',
    count: 123,
    status: 'success',
  },
  {
    code: '3',
    name: 'Name 3',
    category: 'Sport',
    count: 56000,
    status: 'success',
  },
  {
    code: '4',
    name: 'Name 4',
    category: 'Sport+',
    count: 539,
  },
  {
    code: '5',
    name: 'Name 5',
    category: 'Premium',
    count: 23,
    status: 'danger',
  },
  {
    code: '6',
    name: 'Name 6',
    category: 'Premium',
    count: 99,
  },
  {
    code: '7',
    name: 'Name 7',
    category: 'Premium',
    count: 23,
    status: 'warning',
  },
  {
    code: '8',
    name: 'Name 8 that will be the longest name ever',
    category: 'Premium',
    count: 99,
  },
  {
    code: '9',
    name: 'Name 5',
    category: 'Premium',
    count: 23,
  },
  {
    code: '10',
    name: 'Name 6',
    category: 'Premium',
    count: 99,
  },
];

export const TABLE_EXAMPLE_DATA_1: ITableProduct[] = [
  {
    code: '1',
    name: 'Name 1',
    category: 'Premium',
    count: 3000,
  },
  {
    code: '2',
    name: 'Name 2',
    category: 'Active',
    count: 123,
    status: 'success',
  },
  {
    code: '3',
    name: 'Name 3',
    category: 'Sport',
    count: 56000,
    status: 'success',
  },
  {
    code: '4',
    name: 'Name 4',
    category: 'Sport+',
    count: 539,
  },
  {
    code: '5',
    name: 'Name 5',
    category: 'Premium',
    count: 23,
    status: 'danger',
  },
  {
    code: '6',
    name: 'Name 6',
    category: 'Premium',
    count: 99,
  },
  {
    code: '7',
    name: 'Name 7',
    category: 'Premium',
    count: 23,
    status: 'warning',
  },
  {
    code: '8',
    name: 'Name 8 that will be the longest name ever',
    category: 'Premium',
    count: 99,
  },
  {
    code: '9',
    name: 'Name 5',
    category: 'Premium',
    count: 23,
  },
  {
    code: '10',
    name: 'Name 6',
    category: 'Premium',
    count: 99,
  },
];

export const TABLE_EXAMPLE_DATA_2: ITableProduct[] = [
  {
    code: '12143',
    name: 'Name 1',
    category: 'Premium',
    count: 3000,
  },
  {
    code: '452346',
    name: 'Name 2',
    category: 'Active',
    count: 123,
  },
  {
    code: '78292',
    name: 'Name 2',
    category: 'Sport',
    count: 500,
    status: 'danger',
  },
  {
    code: '1532254',
    name: 'Name 4',
    category: 'Sport+',
    count: 579,
    status: 'danger',
  },
  {
    code: '16704',
    name: 'Name 523',
    category: 'Premium',
    count: 213,
    status: 'danger',
  },
  {
    code: '3482',
    name: 'Name 623',
    category: 'Premium',
    count: 199,
  },
  {
    code: '123412',
    name: 'Name 89839',
    category: 'Premium',
    count: 231,
    status: 'warning',
  },
];

export const TABLE_EXAMPLE_DATA_SEARCH: ITableProduct[] = [
  {
    code: '8',
    name: 'Углексилый газ',
    category: 'Premium',
    count: 99,
  },
  {
    code: '1',
    name: 'Полиуретан',
    category: 'Premium',
    count: 3000,
  },
  {
    code: '2',
    name: 'Полиэстер',
    category: 'Active',
    count: 123,
    status: 'success',
  },
  {
    code: '3',
    name: 'Эпоксидная смола',
    category: 'Sport',
    count: 56000,
    status: 'success',
  },
  {
    code: '4',
    name: 'Пропант',
    category: 'Sport+',
    count: 539,
  },
  {
    code: '5',
    name: 'Полибетон',
    category: 'Premium',
    count: 23,
    status: 'danger',
  },
  {
    code: '6',
    name: 'Полиуретан',
    category: 'Premium',
    count: 99,
  },
  {
    code: '7',
    name: 'Пропант',
    category: 'Premium',
    count: 23,
    status: 'warning',
  },
  {
    code: '9',
    name: 'Водород',
    category: 'Premium',
    count: 23,
  },
  {
    code: '10',
    name: 'Компаунд',
    category: 'Premium',
    count: 99,
  },
];
