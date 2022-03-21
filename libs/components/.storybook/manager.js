import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const version = process.env.APP_VERSION || 'latest';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: `zyfra-ui: ${version}`,
  })
});
