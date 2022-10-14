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

    .custom {
      --hierarchicalMenuItemLeftPadding: 8px;
      --hierarchicalMenuShiftSize: 24px;
    }

    .custom ::ng-deep .p-button {
      height: 30px;
    }

    .wrapper {
      width: 100%;
    }

    .custom ::ng-deep .p-button {
      height: 30px;
    }

    .reverse ::ng-deep .hierarchical-menu-item__content  {
      flex-direction: row-reverse;
    }

    .custom ::ng-deep .hierarchical-menu-item__suffix {
      min-width: 60px;
      box-sizing: border-box;
    }

    .custom ::ng-deep .hierarchical-sub-menu .hierarchical-menu-item[root='true'] .hierarchical-menu-item__content {
      padding-left: 0px !important;
      margin-left: -44px;
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
                class="custom reverse"
                [root]="root"
                [subMenuRootId]="subMenuRootId"
                [subMenuSelectedNodeId]="subMenuSelectedNodeId"
                [collapsed]="collapsed"
                [itemContentTemplate]="itemContentTemplate"

                (nodeCollapse)="nodeCollapse($event);"
                (nodeExpand)="nodeExpand($event)"
                (needLoadChildren)="needLoadChildren($event)"
                (selectNode)="selectNode($event)"
              ></zyfra-hierarchical-tree-menu>

              <ng-template #itemContentTemplate let-item>
                  <div class="wrapper">
                     <zyfra-button [label]="item.name"></zyfra-button>
                   </div>
              </ng-template>
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

export const fullCustomItemTemplate = BaseTemplate.bind({});
fullCustomItemTemplate.args = {
  root: { id: 'root', children: exampleData },
  subMenuRootId: 'НЛМК-Липецк',
  collapsed: false,
};
