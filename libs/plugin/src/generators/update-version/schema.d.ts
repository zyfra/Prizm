export interface PluginUpdateVersionSchema {
  projects?: string[];
  all?: boolean;
  newVersion: string | number;
  currentVersion?: string | number;
  project?: string;
}
