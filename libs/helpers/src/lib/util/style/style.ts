import { Compare } from '../compare';

export function prizmStyleGetVars(obj: Record<string, unknown>): Record<string, string> {
  return Object.entries(obj).reduce((base, [key, value]) => {
    key = prizmStyleToSnake(key);
    if (key.startsWith('--')) key = key.replace(/^--/, '');
    if (key.startsWith('prizm')) key = key.replace(/^prizm-/, '');
    key = `--prizm-${key}`;
    base[key] = Compare.isNullish(value) ? '' : value?.toString() ?? '';
    return base;
  }, {} as Record<string, string>);
}

export function prizmStyleToSnake(str: string): string {
  return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}
