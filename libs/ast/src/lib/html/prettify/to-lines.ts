/**
 * @param {string} nonFormattedString Any non formatted string
 * @returns {string[]} Array of strings separated on new lines
 */
export const prizmAstHtmlPrettifyRemoveEmptyLines = (nonFormattedString: string) =>
  // Replace
  // - 1 or more spaces or tabs at the start of line
  // - 1 or more spaces or tabs at the end of line
  // - empty lines
  // with empty string
  nonFormattedString.trim().replace(/(^(\s|\t)+|(( |\t)+)$)/gm, '');

/**
 * @param {string} markup
 * @returns {string[]} Array of strings splitted on new lines without empty lines
 */
export const prizmAstHtmlPrettifyMergeAttributesWithElements = (markup: string) => {
  const splittedMarkup = prizmAstHtmlPrettifyRemoveEmptyLines(markup).split('\n');

  const mergedLines = [];
  let currentElement = '';
  for (let i = 0; i < splittedMarkup.length; i += 1) {
    const line = splittedMarkup[i];

    // If line is closing element/tag separate closing tag from rest of the line with space
    if (line.endsWith('/>')) {
      mergedLines.push(`${currentElement}${line.slice(0, -2)} />`);
      currentElement = '';
      // eslint-disable-next-line no-continue
      continue;
    }

    if (line.endsWith('>')) {
      mergedLines.push(`${currentElement}${line.startsWith('>') || line.startsWith('<') ? '' : ' '}${line}`);
      currentElement = '';
      // eslint-disable-next-line no-continue
      continue;
    }

    currentElement += currentElement.length ? ` ${line}` : line;
  }

  return mergedLines;
};
