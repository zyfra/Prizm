import { Story } from '@storybook/angular';
import { ViewEncapsulation } from '@angular/core';
import {
  HierarchicalMenuCollapsedViewChildrenOpenModes,
  HierarchicalMenuCollapsedViewConfig,
  HierarchicalMenuCollapsedViewMainMenuTypes,
  HierarchicalMenuCollapsedViewSubMenuTypes,
  HierarchicalMenuCollapseNodeEvent,
  HierarchicalMenuExpandNodeEvent,
  HierarchicalMenuSelectNodeEvent,
  HierarchicalMenuViewType,
} from '../../zyfra-hierarchical-menu.interface';
import { action } from '@storybook/addon-actions';
import ZyfraHierarchicalMenuUtils from '../../common/utils/zyfra-hierarchical-menu-utils';
import { exampleData } from '../dataForStories';

const BaseTemplate: Story = args => ({
  styles: [
    `
    .page {
      width: 100%;

      height: calc(100vh - 26px);
      background: #fafafa;
      display: flex;
      flex-direction: column;
    }

    .header {
      height: 54px;
      background-color: #29303D;

      .collapse-icon {
        color: var(--navMenuIcon);
        font-size: 1.692rem;
        width: 48px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .main {
      flex: 1 0 auto;
      overflow: hidden;
    }

    .navbar {
      background-color: #29303D;
      height: 100%;
      position: relative;
    }

    .navbar-open :after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      content: '';
      z-index: 100;
      box-shadow: 0px 8px 32px rgba(21, 23, 30, 0.8);
    }

    .collapse-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--navMenuIcon);
      font-size: 1.692rem;
      flex-shrink: 0;
    }
  `,
  ],
  template: `<div class="page">
      <div class="header">
        <div class="collapse-icon" (click)="collapsed = !collapsed;">
          <span class="zyfra-icon view-menu"></span>
        </div>
      </div>

      <div class="main">
        <div class="navbar"
          [class.navbar-open]="!collapsed"
          [style.width.px]="collapsed ? 48 : 360 + 48"
        >
              <zyfra-hierarchical-tree-menu
                class="custom"
                [root]="root"
                [subMenuRootId]="subMenuRootId"
                [subMenuSelectedNodeId]="subMenuSelectedNodeId"
                [collapsed]="collapsed"

                (nodeCollapse)="nodeCollapse($event);"
                (nodeExpand)="nodeExpand($event)"
                (needLoadChildren)="needLoadChildren($event)"
                (selectNode)="selectNode($event)"
              ></zyfra-hierarchical-tree-menu>
        </div>

      </div>
    </div>`,

  props: {
    ...args,

    nodeCollapse(event: HierarchicalMenuCollapseNodeEvent): void {
      action('nodeCollapse')(event);
      const { target } = event;
      this.root = ZyfraHierarchicalMenuUtils.setCollapseStatus(this.root, target.id, true);
    },

    nodeExpand(event: HierarchicalMenuExpandNodeEvent): void {
      action('nodeExpand')(event);
      const { target } = event;
      this.root = ZyfraHierarchicalMenuUtils.setCollapseStatus(this.root, target.id, false);
    },

    selectNode(event: HierarchicalMenuSelectNodeEvent): void {
      action('selectNode')(event);
      if (event.menu == 'main') {
        this.subMenuRootId = event.target.id;
      } else {
        this.subMenuSelectedNodeId = event.target.id;
      }
    },

    needLoadChildren: action('needLoadChildren'),
  },
});

export const Base = BaseTemplate.bind({});
Base.args = {
  root: { id: 'root', children: exampleData },
  subMenuRootId: 'НЛМК-Липецк',
  collapsed: false,
};
