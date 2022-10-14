import { ElementRef } from '@angular/core';

export type HierarchicalMenuNodeAttributes = {
  mainMenuItem: boolean;
  subMenuItem: boolean;
  order: number;
  icon: string;
  name: string;
} & Record<string, any>;

export enum HierarchicalMenuNodeHierarchyType {
  header = 'header',
  root = 'root',
  default = 'default',
  current = 'current',
  leaf = 'leaf',
}

export type HierarchicalMenuNode = {
  id: string;
  name?: string;
  attributes?: Partial<HierarchicalMenuNodeAttributes>;
  children?: Array<HierarchicalMenuNode>;
  hierarchy?: {
    onlyFolder?: boolean;
    levelNested?: number;
    collapsed?: boolean;
    type?: HierarchicalMenuNodeHierarchyType;
  };
} & Record<string, any>;

export type HierarchicalMenuType = 'main' | 'sub';

export interface HierarchicalMenuSelectNodeEvent {
  target: HierarchicalMenuNode;
  elementRef?: ElementRef;
  menu?: HierarchicalMenuType;
}

export interface HierarchicalMenuCollapseNodeEvent {
  target: HierarchicalMenuNode;
}

export type HierarchicalMenuExpandNodeEvent = HierarchicalMenuCollapseNodeEvent;

export interface HierarchicalMenuMoveToEvent {
  target: HierarchicalMenuNode;
}

export type HierarchicalMenuViewType = 'folder' | 'tree';

export interface HierarchicalMenuBuilder {
  tree: HierarchicalMenuNode;
  getMainMenu(): HierarchicalMenuNode[];
  getAdditionalMenu(rootId: string): HierarchicalMenuNode[];
  getMenu(rootId: string, showRoot: boolean, type: HierarchicalMenuType): HierarchicalMenuNode[];
}

export type HierarchicalMenuCollapsedViewMainMenuTypes = 'empty' | 'roots' | 'active';

export type HierarchicalMenuCollapsedViewSubMenuTypes = 'empty' | 'active';

export type HierarchicalMenuCollapsedViewChildrenOpenModes = 'popover' | 'list';

export interface HierarchicalMenuCollapsedViewConfig {
  showMainMenu: 'empty' | 'roots' | 'active';
  showSubMenu: 'empty' | 'active';
  modeChildrenOpen: 'popover' | 'list';
}
