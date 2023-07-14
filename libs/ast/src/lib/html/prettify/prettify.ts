import { prizmAstHtmlPrettifyMergeAttributesWithElements } from './to-lines';
import { prizmAstHtmlAddIndentation } from './add-indentation';

/**
 * @param {string} markup
 * @param {{ char?: string; count?: number }} options
 * @returns {string}
 */
export const prizmAstHtmlPrettify = (markup: string, options: { char?: string; count?: number } = {}) => {
  const splitted = prizmAstHtmlPrettifyMergeAttributesWithElements(markup);

  return prizmAstHtmlAddIndentation(splitted, options);
};
