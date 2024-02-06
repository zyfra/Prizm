import { IconsSvgToFontSchema } from './schema';
import * as fs from 'fs';
import * as path from 'path';
import * as svgtofont from 'svgtofont';

/**
 * Function that converts svg icons to font files
 *
 * @param {Object} options - The options for icons and svg to font schema
 * @returns {Object} - An object with a success property of true or false
 */
export default async function runExecutor(options: IconsSvgToFontSchema) {
  // Define the destination folder and source folder for the icons
  const destinationFolder = path.join(__dirname, '../../../../', options.dist);
  const pathToFolder = path.join(__dirname, '../../../../', options.src);
  const locationPostfix = options.locationPostfix ?? '-location';
  const seperateLocation = options.seperateLocation ?? true;
  // Check the existence of the source folder
  if (!fs.existsSync(pathToFolder)) {
    return { success: false };
  }
  // Read the contents of the source folder and get a list of files
  const files = fs.readdirSync(pathToFolder);

  // If the source folder is empty, return false
  if (!files.length) {
    return { success: false };
  }

  // Convert SVG icons to font files
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await svgtofont({
    src: pathToFolder,
    dist: destinationFolder,
    fontName: options.fontName, // Name of the font
    css: options.css ?? true, // Whether to create CSS files or not
  });

  if (!seperateLocation) {
    return { success: true };
  }

  // Define the types of stylesheets extensions we're interested in
  const exts = ['less', 'css', 'scss'];

  // Get a list of stylesheet files from the output folder
  const outputStyleFiles = fs.readdirSync(destinationFolder).filter(i => exts.find(ext => i.endsWith(ext)));

  // If no stylesheet files were found, return false
  if (!outputStyleFiles.length) {
    return { success: false };
  }

  // For each output style sheet file, find and separate the font-face declaration
  for (const outputStyleFileName of outputStyleFiles) {
    // Define full path to current file
    const pathToFile = path.join(destinationFolder, outputStyleFileName);

    // Get extension and filename without extension
    const nameArr = outputStyleFileName.split('.');
    const currentExt = nameArr.pop();
    const currentNameWithoutExt = nameArr.join('.');

    // Read file contents as string
    let content = fs.readFileSync(pathToFile).toString();

    // Find font-face CSS block
    const locationRegex = /(@font-face {[^{}]+})/g;
    const location = locationRegex.exec(content)?.[1];
    if (!location) {
      return { success: false };
    }

    // Remove the font-face CSS block from font file
    content = content.replace(locationRegex, '').trim();
    fs.writeFileSync(pathToFile, content);

    // Create a new file with the separated @font-face block
    fs.writeFileSync(
      path.join(destinationFolder, `${currentNameWithoutExt}${locationPostfix}.${currentExt}`),
      location
    );
  }

  return { success: true };
}
