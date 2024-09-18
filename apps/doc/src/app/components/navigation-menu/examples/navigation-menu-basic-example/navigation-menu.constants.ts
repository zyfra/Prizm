import { PrizmNavigationMenuItem } from '@prizm-ui/components';
import { v4 } from 'uuid';

export interface CustomItem extends PrizmNavigationMenuItem {
  id: string;
  children?: CustomItem[];
}

export const MOKED_ITEMS: CustomItem[] = [
  {
    id: v4(),
    text: 'Topmost (text)',
    children: [
      {
        id: v4(),
        text: '1 (text)',
        icon: 'collage-fill',
        children: [
          {
            id: v4(),
            text: '1-1 (text)',
            icon: 'subskrit-up',
            children: [
              {
                id: v4(),
                text: '1-1-1 (text)',
              },
              {
                id: v4(),
                text: '1-1-2 (text)',
              },
              {
                id: v4(),
                text: '1-1-3 (text)',
              },
            ],
          },
          {
            id: v4(),
            text: '1-2 (text)',
            icon: 'airplane-side-view',
            children: [
              {
                id: v4(),
                text: '1-2-1 (text)',
                icon: 'folder',
                children: [
                  {
                    id: v4(),
                    text: '1-2-1-1 (text)',
                  },
                  {
                    id: v4(),
                    text: '1-2-1-2 (text)',
                  },
                  {
                    id: v4(),
                    text: '1-2-1-3 (text)',
                  },
                ],
              },
              {
                id: v4(),
                text: '1-2-2 (text)',
              },
              {
                id: v4(),
                text: '1-2-3 (text)',
                icon: 'folder',
                children: [
                  {
                    id: v4(),
                    text: '1-2-3-1 (text)',
                  },
                  {
                    id: v4(),
                    text: '1-2-3-2 (text)',
                  },
                  {
                    id: v4(),
                    text: '1-2-3-3 (text)',
                  },
                ],
              },
            ],
          },
          {
            id: v4(),
            text: '1-3 (text)',
            icon: 'polyline',
            children: [
              {
                id: v4(),
                text: '1-3-1 (text)',
              },
              {
                id: v4(),
                text: '1-3-2 (text)',
              },
              {
                id: v4(),
                text: '1-3-3 (text)',
              },
            ],
          },
        ],
      },
      {
        id: v4(),
        text: '2 (text) [a group with nested group items]',
        icon: 'folder',
        isGroup: true,
        children: [
          {
            id: v4(),
            text: '2-1 (text) [not a group]',
            icon: 'folder',
          },
          {
            id: v4(),
            text: '2-2 (text) [a group]',
            icon: 'folder',
            isGroup: true,
            children: [
              {
                id: v4(),
                text: '2-2-1 (text)',
              },
              {
                id: v4(),
                text: '2-2-2 (text)',
              },
              {
                id: v4(),
                text: '2-2-3 (text)',
              },
            ],
          },
        ],
      },
      {
        id: v4(),
        text: '3 (text)',
        icon: 'folder',
        children: [
          {
            id: v4(),
            text: '3-1 (text)',
          },
        ],
      },
    ],
  },
];
