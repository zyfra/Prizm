import {
  HierarchicalMenuCollapsedViewChildrenOpenModes,
  HierarchicalMenuCollapsedViewMainMenuTypes,
  HierarchicalMenuCollapsedViewSubMenuTypes,
  HierarchicalMenuNode,
  HierarchicalMenuType,
} from '../zyfra-hierarchical-menu.interface';
import { InjectionToken, ValueProvider } from '@angular/core';

export interface PzmHierarchicalMenuOptions {
  tooltipDelay: number;
  collapsedView: {
    showMainMenu?: HierarchicalMenuCollapsedViewMainMenuTypes;
    showSubMenu?: HierarchicalMenuCollapsedViewSubMenuTypes;
    modeChildrenOpen?: HierarchicalMenuCollapsedViewChildrenOpenModes;
  };
  popover: {
    closeAfterUpdateSelectItem?: true;
    customClass?: string;
  };
  checkHasChildren: (node: HierarchicalMenuNode, menu?: HierarchicalMenuType) => boolean;
  checkFolder: (node: HierarchicalMenuNode) => boolean;
  checkDisable: (node: HierarchicalMenuNode) => boolean;
}

const PZM_HIERARCHICAL_MENU_DEFAULT_OPTIONS: PzmHierarchicalMenuOptions = {
  tooltipDelay: 300,
  collapsedView: {
    showMainMenu: 'roots',
    showSubMenu: 'active',
    modeChildrenOpen: 'popover',
  },
  popover: {
    closeAfterUpdateSelectItem: true,
    customClass: 'hierarchical-menu-popover',
  },
  checkHasChildren: (node, menu) => {
    if (!node?.children) return false;

    if (!menu) {
      if (node.attributes?.subMenuItem) {
        return node.children.findIndex(item => item.attributes?.subMenuItem) !== -1;
      } else {
        return node.children.findIndex(item => !item.attributes?.subMenuItem) !== -1;
      }
    }

    if (menu === 'main') {
      return node.children.findIndex(item => !item.attributes?.subMenuItem) !== -1;
    } else {
      return node.children.findIndex(item => item.attributes?.subMenuItem) !== -1;
    }
  },
  checkFolder: node => node.hierarchy.onlyFolder,
  checkDisable: node => false,
};

export const PZM_HIERARCHICAL_MENU_OPTIONS_TOKEN = new InjectionToken<PzmHierarchicalMenuOptions>(
  'PZM_HIERARCHICAL_MENU_OPTIONS_TOKEN',
  {
    factory: (): PzmHierarchicalMenuOptions => PZM_HIERARCHICAL_MENU_DEFAULT_OPTIONS,
  }
);

function mergeOptions(delta: Partial<PzmHierarchicalMenuOptions>): PzmHierarchicalMenuOptions {
  const res = { ...PZM_HIERARCHICAL_MENU_DEFAULT_OPTIONS, ...delta };
  res.collapsedView = { ...PZM_HIERARCHICAL_MENU_DEFAULT_OPTIONS.collapsedView, ...delta?.collapsedView };
  res.popover = { ...PZM_HIERARCHICAL_MENU_DEFAULT_OPTIONS.popover, ...delta?.popover };
  return res;
}

export const pzmHierarchicalMenuOptionsProvider: (
  options: Partial<PzmHierarchicalMenuOptions>
) => ValueProvider = (options: Partial<PzmHierarchicalMenuOptions>) => ({
  provide: PZM_HIERARCHICAL_MENU_OPTIONS_TOKEN,
  useValue: mergeOptions(options),
});
