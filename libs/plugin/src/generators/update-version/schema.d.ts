export interface PluginUpdateVersionSchema {
  projects?: string[];
  all?: boolean;
  newVersion: string | number;
  project: string;
}
