import { Meta, moduleMetadata } from '@storybook/angular';
import { ZyfraHierarchicalTreeMenuComponent } from '../hierarchical-tree-menu/components/zyfra-hierarchical-tree-menu/zyfra-hierarchical-tree-menu.component';
import { ZyfraHierarchicalMenuModule } from '../zyfra-hierarchical-menu.module';

export default {
  title: 'Menu/HierarchicalTreeMenu',
  component: ZyfraHierarchicalTreeMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [ZyfraHierarchicalMenuModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./story.doc.mdx').default,
    },
  },
} as Meta<ZyfraHierarchicalTreeMenuComponent>;

export * from './stories/basik.stories';
export * from './stories/nlmk.stories';
export * from './stories/collapsed.stories';
export * from './stories/customization.stories';
export * from './stories/extraSuffix.stories';
export * from './stories/itemOptions.stories';
