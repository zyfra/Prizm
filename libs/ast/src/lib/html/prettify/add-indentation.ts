/**
 * @param {string[]} splittedHtml
 * @param {{ char?: string; count?: number}} options
 * @returns {string}
 */
export const prizmAstHtmlAddIndentation = (
  splittedHtml: string[],
  options: { char?: string; count?: number } = {}
) => {
  const char = options.char || ' ';
  const count = options.count || 2;

  let level = 0;
  const opened: string[] = [];

  return splittedHtml
    .reverse()
    .reduce((indented: any[], elTag) => {
      if (
        opened.length &&
        level &&
        opened[level] &&
        /* if current element tag is the same as previously opened one */
        opened[level] === elTag.substring(1, opened[level].length + 1)
      ) {
        opened.splice(level, 1);
        level--;
      }

      const indentation = char.repeat(level ? level * count : 0);

      const newIndented = [`${indentation}${elTag}`, ...indented];

      // if current element tag is closing tag
      // add it to opened elements
      if (elTag.substring(0, 2) === '</') {
        level++;
        opened[level] = elTag.substring(2, elTag.length - 1);
      }

      return newIndented;
    }, [])
    .join('\n');
};
