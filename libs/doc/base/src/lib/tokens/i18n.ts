import { InjectionToken } from '@angular/core';

/**
 * TODO: think about reorganization in @prizm-ui/i18n way
 */

/**
 * Works with a tuple
 * [@string tuiMode tooltip content, @string word 'background', @string 'form value']
 */
export const PRIZM_DOC_DEMO_TEXTS = new InjectionToken<[string, string, string]>(
  `[PRIZM_DOC_DEMO_TEXTS]: prizm-doc-demo i18n texts`,
  {
    factory: (): [string, string, string] => [`Read more more about modes: `, `Background`, `Form value`],
  }
);

/**
 * Works with a tuple
 * [
 * @string word 'argument',
 * @string word 'type',
 * @string 'name and description',
 * @string word 'value'
 * @string message for tooltip about ng-polymorpheus
 * ]
 */
export const PRIZM_DOC_DOCUMENTATION_TEXTS = new InjectionToken<[string, string, string, string, string]>(
  `[PRIZM_DOC_DOCUMENTATION_TEXTS]: prizm-doc-documentation i18n texts`,
  {
    factory: (): [string, string, string, string, string] => [
      `Argument`,
      `Type`,
      `Name and description`,
      `Value`,
      `Learn about our dynamic templates from `,
    ],
  }
);

/**
 * Works with a tuple
 * [
 * @string default tab name,
 * @string link to a sample copied message text,
 * @string link to a sample copied message label
 * ]
 */
export const PRIZM_DOC_EXAMPLE_TEXTS = new InjectionToken<[string, string, string]>(
  `[PRIZM_DOC_EXAMPLE_TEXTS]: prizm-doc-example i18n texts`,
  {
    factory: (): [string, string, string] => [`Preview`, `Link to a sample was successfully copied`, `Done`],
  }
);

export const PRIZM_DOC_MENU_TEXT = new InjectionToken<string>(`[PRIZM_DOC_MENU_TEXT]: menu i18n text`, {
  factory: (): string => `Menu`,
});

export const PRIZM_DOC_SEARCH_TEXT = new InjectionToken<string>(`[PRIZM_DOC_SEARCH_TEXT]: search i18n text`, {
  factory: (): string => `Search`,
});

export const PRIZM_DOC_SEE_ALSO_TEXT = new InjectionToken<string>(
  `[PRIZM_DOC_SEE_ALSO_TEXT]: prizm-doc-see-also i18n text`,
  {
    factory: (): string => `See also`,
  }
);

export const PRIZM_DOC_SOURCE_CODE_TEXT = new InjectionToken<string>(
  `[PRIZM_DOC_SOURCE_CODE_TEXT]: prizm-doc-source-code i18n text`,
  {
    factory: (): string => `Source code`,
  }
);
