import { TuiDocExample } from '../interfaces/page';
import { prizmRawLoad } from './raw-load';

export async function prizmRawLoadRecord(example: TuiDocExample): Promise<Record<string, string>> {
  const processedContent: Record<string, string> = {};

  for (const [key, content] of Object.entries(example)) {
    if (content) {
      processedContent[key] = await prizmRawLoad(content);
    }
  }

  return processedContent;
}
