import { InternalPrizmNavigationMenuItem } from '../interfaces';

export type SimpleItem<T = any> = { text: string; children?: T[] };

export type FilterPredicate<Item extends SimpleItem<Item>> = (item: Item) => boolean;

export type MapperPredicate<Item extends SimpleItem<Item>, ResultType> = (item: Item) => ResultType;

export function filterItems<Item extends SimpleItem<Item>>(
  items: Item[],
  filterPredicate: FilterPredicate<Item>
): Item[] {
  const getChildren = (acc: Item[], item: Item): Item[] => {
    if (filterPredicate(item)) {
      acc.push(item);
      return acc;
    }

    if (Array.isArray(item.children)) {
      const children: Item[] = item.children.reduce((acc, item) => {
        return getChildren(acc, item);
      }, []);

      if (children.length) acc.push({ ...item, children });
    }
    return acc;
  };

  return items.reduce(getChildren, []);
}

export function findItem<Item extends SimpleItem<Item>>(
  items: Item[],
  filterPredicate: FilterPredicate<Item>
): Item | null {
  for (const item of items) {
    if (filterPredicate(item)) return item;

    if (item.children) {
      const targetItem = findItem(item.children, filterPredicate);
      if (targetItem) return targetItem;
    }
  }
  return null;
}

export function toRubricatorItems<UserItem>(
  nodes: InternalPrizmNavigationMenuItem<UserItem>[]
): InternalPrizmNavigationMenuItem<UserItem>[] {
  const sortedNodes = flatItems(nodes).sort((a, b) => sortByText(a, b));
  const letters = new Set(sortedNodes.map(({ text }) => text.charAt(0).toUpperCase()));
  const rubricatorNodes: InternalPrizmNavigationMenuItem<UserItem>[] = [];

  letters.forEach(letter => {
    rubricatorNodes.push({
      isRubricator: true,
      text: letter,
      children: sortedNodes.filter(({ text }) => text.charAt(0).toUpperCase() === letter),
      original: null,
      groupId: null,
      parent: null,
      icon: null,
      breadcrumbs: null,
      extraTemplate: null,
    });
  });
  return rubricatorNodes;
}

export function flatItems<Item extends SimpleItem<any>>(items: Item[]): Item[] {
  const flat: Item[] = [];

  function extract(item: Item): void {
    if (item.children) {
      item.children.forEach(extract);
      flat.push(item);
    } else {
      flat.push(item);
    }
  }

  items.forEach(extract);

  return flat;
}

export function sortByText<Item extends SimpleItem<Item>>(a: Item, b: Item): number {
  if (a.text > b.text) return 1;
  if (a.text < b.text) return -1;
  return 0;
}

export function traverseAllDeep<Item extends SimpleItem<Item>>(
  items: Item[],
  callback: (item: Item) => void
): void {
  return items.forEach(item => {
    callback(item);

    if (item.children) {
      traverseAllDeep(item.children, callback);
    }
  });
}
