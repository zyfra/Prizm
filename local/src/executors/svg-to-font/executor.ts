import { IconsSvgToFontSchema } from './schema';
import * as fs from 'fs';
import * as path from 'path';
import * as svgtofont from 'svgtofont';

export default async function runExecutor(options: IconsSvgToFontSchema) {
  const destinationFolder = path.join(__dirname, '../../../../', options.dist);
  const pathToFolder = path.join(__dirname, '../../../../', options.src);
  console.log('Start generating...');
  if (!fs.existsSync(pathToFolder)) {
    return {
      success: false,
    };
  }
  const files = fs.readdirSync(pathToFolder);

  if (!files.length) {
    return {
      success: false,
    };
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await svgtofont({
    src: pathToFolder, // svg path
    dist: destinationFolder, // output path
    fontName: options.fontName, // font name
    css: options.css ?? true, // Create CSS files.
  }).then(() => {
    console.log('Success generated');
  });

  return {
    success: true,
  };
}
