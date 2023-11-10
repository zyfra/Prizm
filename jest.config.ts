import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  transformIgnorePatterns: ['node_modules/(?!(@lodash-es)/)'],
};
