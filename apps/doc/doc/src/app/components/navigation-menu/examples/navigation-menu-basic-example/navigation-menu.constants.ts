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
        icon: 'editor_decor_collage_fill',
        children: [
          {
            id: v4(),
            text: '1-1 (text)',
            icon: 'editor_decor_subskrit_up',
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
            icon: 'logistics_transportation_airplane_side_view',
            children: [
              {
                id: v4(),
                text: '1-2-1 (text)',
                icon: 'documents_folders_folder',
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
                icon: 'documents_folders_folder',
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
            icon: 'editor_decor_polyline',
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
        text: '2 (text)',
        icon: 'documents_folders_folder',
        children: [
          {
            id: v4(),
            text: '2-1 (text)',
            icon: 'documents_folders_folder',
          },
          {
            id: v4(),
            text: '2-2 (text)',
            icon: 'documents_folders_folder',
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
        icon: 'documents_folders_folder',
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
