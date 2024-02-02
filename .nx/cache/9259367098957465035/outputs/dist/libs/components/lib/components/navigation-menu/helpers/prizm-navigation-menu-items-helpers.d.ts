import { InternalPrizmNavigationMenuItem } from '../interfaces';
export type SimpleItem<T = any> = {
    text: string;
    children?: T[];
};
export type FilterPredicate<Item extends SimpleItem<Item>> = (item: Item) => boolean;
export type MapperPredicate<Item extends SimpleItem<Item>, ResultType> = (item: Item) => ResultType;
export declare function filterItems<Item extends SimpleItem<Item>>(items: Item[], filterPredicate: FilterPredicate<Item>): Item[];
export declare function findItem<Item extends SimpleItem<Item>>(items: Item[], filterPredicate: FilterPredicate<Item>): Item | null;
export declare function toRubricatorItems<UserItem>(nodes: InternalPrizmNavigationMenuItem<UserItem>[]): InternalPrizmNavigationMenuItem<UserItem>[];
export declare function flatItems<Item extends SimpleItem<any>>(items: Item[]): Item[];
export declare function sortByText<Item extends SimpleItem<Item>>(a: Item, b: Item): number;
export declare function traverseAllDeep<Item extends SimpleItem<Item>>(items: Item[], callback: (item: Item) => void): void;
