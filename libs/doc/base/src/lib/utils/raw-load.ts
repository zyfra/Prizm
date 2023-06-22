import { RawLoaderContent } from '../interfaces/page';

// TODO: delete it when all `` will be replaced by webpack `asset/source?raw`.
function trimExportDefault(fileContent: string): string {
  return fileContent.startsWith(`export default "`)
    ? fileContent
        .replace(/^export\sdefault\s["']/gi, ``)
        .replace(/['"];$/gi, ``)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .replaceAll(`\\n`, `\n`)
        .replaceAll(`\\"`, `"`)
    : fileContent;
}

export async function prizmRawLoad(content: RawLoaderContent): Promise<string> {
  const unpacked = content instanceof Promise ? (await content).default : content;

  return trimExportDefault(unpacked);
}
