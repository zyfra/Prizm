import { Story } from '@storybook/angular';
import {
  HierarchicalMenuCollapseNodeEvent,
  HierarchicalMenuExpandNodeEvent,
  HierarchicalMenuSelectNodeEvent,
} from '../../zyfra-hierarchical-menu.interface';
import { action } from '@storybook/addon-actions';
import ZyfraHierarchicalMenuUtils from '../../common/utils/zyfra-hierarchical-menu-utils';
import { ViewEncapsulation } from '@angular/core';
import { exampleData2 } from '../dataForStories';

const BasicTemplate2: Story = args => ({
  styles: [
    `
    .page {
      width: 100%;

      height: calc(100vh - 26px);
      background: #fafafa;
      display: flex;
      flex-direction: column;
    }

    .main {
      flex: 1 0 auto;
      overflow: hidden;
    }

    .navbar {
      background-color: #191A21;
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

    .tst {
      --hierarchicalMenuMainBackground: #191A21;

      --hierarchicalMenuItemHeight: 41px;
      --hierarchicalMenuItemFontSize: 48px;

      --hierarchicalMenuItemBorder: #323442;

      --hierarchicalMenuTextColor: #BDBEC2;

      --hierarchicalMenuItemMainIconWrapperSize: 34px;
      --hierarchicalMenuItemMainIconSize: 18px;

      --hierarchicalMenuItemAddIconWrapperSize: 32px;
      --hierarchicalMenuItemAddIconSize: 22px;

      --hierarchicalMenuItemIconColor: #5A5D6F;

      --hierarchicalMenuLeftPadding: 4px;


      --hierarchicalMenuItemActiveStickBackground: transparent;
      --hierarchicalMenuItemHoverBackground: rgba(32, 62, 116, 0.2);

      --hierarchicalMenuItemActiveBackground: #203E74;
      // --hierarchicalMenuItemIconActiveColor: #203E74;
    }

    .tst::ng-deep .hierarchical-menu-item[hasChildren=true] {
       background-color: #252832;
    }

    .tst::ng-deep .hierarchical-menu-item[root='true']{
    }

    .tst::ng-deep .hierarchical-menu-item__content {
      box-sizing: border-box;
      padding-bottom: 1px;
    }

    .notification-without-count {
      width: 8px;
      height: 8px;
      border-radius: 20px;
      user-select: none;
      margin: 0 8px;
    }

    .notification-with-count {
      width: 16px;
      height: 16px;
      border-radius: 20px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      user-select: none;
      margin: 0 8px;
    }
  `,
  ],
  template: `<div class="page">

      <div class="main">
        <div class="navbar"
          [class.navbar-open]="!collapsed"
          [style.width.px]="360"
        >
              <zyfra-hierarchical-tree-menu
                class="tst"

                [root]="root"
                [subMenuRootId]="subMenuRootId"
                [mainMenuSelectedNodeId]="mainMenuSelectedNodeId"
                [collapsed]="collapsed"

                (nodeCollapse)="nodeCollapse($event);"
                (nodeExpand)="nodeExpand($event)"
                (needLoadChildren)="needLoadChildren($event)"
                (selectNode)="selectNode($event)"

                [suffixItemTemplate]="itemSuffix"
              >
            </zyfra-hierarchical-tree-menu>

                <ng-template #itemSuffix let-item>
                    <ng-container *ngIf="item.notification?.showCount === true">
                         <div [style.background]="item.notification.color" class="notification-with-count">{{item.notification.count}}</div>
                    </ng-container>

                    <ng-container *ngIf="item.notification?.showCount === false">
                         <div [style.background]="item.notification.color" class="notification-without-count"></div>
                    </ng-container>

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
      this.mainMenuSelectedNodeId = event.target.id;
    },

    needLoadChildren: action('needLoadChildren'),
  },

  encapsulation: ViewEncapsulation.None,
});

export const ExampleWithoutSubmenu = BasicTemplate2.bind({});
ExampleWithoutSubmenu.args = {
  root: { id: 'root', children: exampleData2 },
  collapsed: false,
  mainMenuSelectedNodeId: 'ЦГП 2',
};
