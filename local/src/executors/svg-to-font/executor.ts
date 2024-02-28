import { IconsSvgToFontSchema } from './schema';
import * as fs from 'fs';
import * as path from 'path';
import * as SVGFixer from 'oslllo-svg-fixer';
import { FontAssetType, generateFonts, OtherAssetType } from 'fantasticon';
import { createDirectoriesSafely } from './util';

/**
 * Function that converts svg icons to font files
 *
 * @param {Object} options - The options for icons and svg to font schema
 * @returns {Object} - An object with a success property of true or false
 */
export default async function runExecutor(options: IconsSvgToFontSchema) {
  console.log('Starting...');
  // Define the destination folder and source folder for the icons
  const destinationFolder = path.join(__dirname, '../../../../', options.dist);
  const pathToFolder = path.join(__dirname, '../../../../', options.src);
  const locationPostfix = options.locationPostfix ?? '-location';
  const separateLocation = options.separateLocation ?? true;

  if (fs.existsSync(destinationFolder)) {
    console.log('Removing old destination folder...');
    fs.rmdirSync(destinationFolder, { recursive: true });

    console.log('Creating new destination empty folder...');

    createDirectoriesSafely(destinationFolder);
  }

  // Check the existence of the source folder
  if (!fs.existsSync(pathToFolder)) {
    return { success: false };
  }
  // Read the contents of the source folder and get a list of files
  const files = fs.readdirSync(pathToFolder);

  console.log('Counted files - ' + files.length);
  // If the source folder is empty, return false
  if (!files.length) {
    return { success: false };
  }

  const fixSvgForFont = options.fixSvgForFont;
  const pathToOutputFixedSvg = options.pathToOutputFixedSvg;
  let svgForFontSource = pathToFolder;
  if (fixSvgForFont && pathToOutputFixedSvg) {
    console.log('Fixing svg');
    const fullPathToOutputFixedSvg = path.join(__dirname, '../../../../', pathToOutputFixedSvg);

    if (!fs.existsSync(fullPathToOutputFixedSvg)) {
      console.log('Creating folder for output fixed svg...');
      fs.mkdirSync(fullPathToOutputFixedSvg);
    }

    await SVGFixer(svgForFontSource, pathToOutputFixedSvg)
      .fix()
      .then(() => {
        console.log('Prepare for generate fonts. Fixing svg');
        svgForFontSource = pathToOutputFixedSvg;

        const changeFileNames = options.changeFileNames ?? true;
        if (changeFileNames) {
          const files = fs.readdirSync(svgForFontSource);
          for (const file of files) {
            // change with underline dash
            let newFile = file.replace(/[_]/g, '-');

            // change symbol with dash
            const changeSymbolWithDash = /-([a-zA-Z]{2,})([0-9]+)/g;
            if (newFile.match(changeSymbolWithDash)?.length) {
              newFile = newFile.replace(changeSymbolWithDash, '-$1-$2');
            }

            if (newFile !== file)
              fs.renameSync(path.join(svgForFontSource, file), path.join(svgForFontSource, newFile));
          }
        }
      })
      .catch(err => {
        throw err;
      });
  }

  console.log('Starting to convert svg to font');

  createDirectoriesSafely(destinationFolder);

  await generateFonts({
    inputDir: svgForFontSource, // (required)
    outputDir: destinationFolder, // (required)
    name: options.fontName,
    prefix: options.fontName,
    tag: options.tag ?? '',
    fontTypes: [FontAssetType.EOT, FontAssetType.WOFF2, FontAssetType.WOFF, FontAssetType.TTF],
    assetTypes: [OtherAssetType.CSS, OtherAssetType.SCSS],
  }).then(() => {
    console.log('All fonts are successfully generated');
  });

  if (!separateLocation) {
    return { success: true };
  }

  console.log('Separating locations from generate font styles');

  // Define the types of stylesheets extensions we're interested in
  const exts = ['less', 'css', 'scss'];

  // Get a list of stylesheet files from the output folder
  const outputStyleFiles = fs.readdirSync(destinationFolder).filter(i => exts.find(ext => i.endsWith(ext)));

  // If no stylesheet files were found, return false
  if (!outputStyleFiles.length) {
    console.log('Can not find files with stylesheets');
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
    let location = locationRegex.exec(content)?.[1];
    if (!location) {
      return { success: false };
    }

    if (options.urlLocation) {
      const regex = /url\(["']{1}([^"']+)["']{1}\)/g;
      const matches = location.matchAll(regex);
      for (const math of matches) {
        location = location.replace(math[1], `${path.join(options.urlLocation, math[1])}`);
      }
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
