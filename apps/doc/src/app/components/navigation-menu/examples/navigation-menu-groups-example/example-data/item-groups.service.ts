import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomGroupConfig } from './interfaces';
import { GROUP_1_ITEMS, GROUP_2_ITEMS, GROUP_3_ITEMS, GROUP_4_ITEMS } from './item-groups.constants';

interface ExampleData {
  [key: string]: CustomGroupConfig;
}

const exampleData: ExampleData = {
  fruits: {
    title: 'Fruits',
    items: GROUP_1_ITEMS,
    toolbarConfig: {
      search: true,
      rubricatorMode: true,
      folderMode: true,
      closeAll: true,
    },
  },
  noGroupAppearance: {
    title: '<No group appearance example>',
    items: GROUP_2_ITEMS,
  },
  musicalInstruments: {
    title: 'Musical instruments',
    items: GROUP_3_ITEMS,
    toolbarConfig: {
      search: true,
      rubricatorMode: true,
      closeAll: true,
    },
  },
  longNames: {
    title: 'Long names (bottom)',
    items: GROUP_4_ITEMS,
    toolbarConfig: {
      search: true,
      folderMode: true,
      closeAll: true,
    },
  },
};

@Injectable()
export class ItemGroupsService {
  fruits$: Observable<CustomGroupConfig> = of(exampleData.fruits);
  noGroupAppearance$: Observable<CustomGroupConfig> = of(exampleData.noGroupAppearance);
  musicalInstruments$: Observable<CustomGroupConfig> = of(exampleData.musicalInstruments);
  longNames$: Observable<CustomGroupConfig> = of(exampleData.longNames);
}
