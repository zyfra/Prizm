import { PrizmNavigationMenuItem } from '@prizm-ui/components';

export class GrandParentItem implements PrizmNavigationMenuItem {
  public text!: string;
  public children!: PrizmNavigationMenuItem[];

  constructor(data: { text: string; children: PrizmNavigationMenuItem[] }) {
    Object.assign(this, data);
  }
}

export class ParentItem implements PrizmNavigationMenuItem {
  public text!: string;
  public children!: PrizmNavigationMenuItem[];

  constructor(data: { text: string; children: PrizmNavigationMenuItem[] }) {
    Object.assign(this, data);
  }
}

export class ChildItem implements PrizmNavigationMenuItem {
  public text!: string;
  public children!: PrizmNavigationMenuItem[];

  constructor(data: { text: string; children: PrizmNavigationMenuItem[] }) {
    Object.assign(this, data);
  }
}

export const GROUP_ITEMS: PrizmNavigationMenuItem[] = [
  new GrandParentItem({
    text: 'GrandParent 1',
    children: [
      new ParentItem({
        text: 'Parent A',
        children: [
          new ChildItem({
            text: 'Child J',
            children: [],
          }),
          new ChildItem({
            text: 'Child K',
            children: [],
          }),
        ],
      }),
      new ParentItem({
        text: 'Parent B',
        children: [
          new ChildItem({
            text: 'Child L',
            children: [],
          }),
        ],
      }),
    ],
  }),
  new GrandParentItem({
    text: 'GrandParent 2',
    children: [
      new ParentItem({
        text: 'Parent N',
        children: [
          new ChildItem({
            text: 'Child M',
            children: [],
          }),
          new ChildItem({
            text: 'Child V',
            children: [],
          }),
        ],
      }),
      new ParentItem({
        text: 'Parent C',
        children: [
          new ChildItem({
            text: 'Child P',
            children: [],
          }),
        ],
      }),
    ],
  }),
];
