import { prizmAstHtmlPrettifyMergeAttributesWithElements } from './to-lines';
import { prizmAstHtmlAddIndentation } from './add-indentation';

/**
 * @param {string} markup
 * @param {{ char?: string; count?: number }} options
 * @returns {string}
 */
export const prizmAstHtmlPrettify = (markup: string, options: { char?: string; count?: number } = {}) => {
  const splitted = prizmAstHtmlPrettifyMergeAttributesWithElements(markup);
  let result = prizmAstHtmlAddIndentation(splitted, options);

  // if we get content without html return initial content
  if (!result && markup) result = markup;

  return result;
};
