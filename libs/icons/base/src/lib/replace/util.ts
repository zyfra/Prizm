import { PRIZM_OLD_ICONS_REPLACE_SET } from './common';

export function prizmIconsGetNameByOld(oldName: string): string | null {
  return PRIZM_OLD_ICONS_REPLACE_SET[oldName as keyof typeof PRIZM_OLD_ICONS_REPLACE_SET] ?? null;
}
