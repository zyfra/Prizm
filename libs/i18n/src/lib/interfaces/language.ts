import { PrizmCountryIsoCode } from '../enums/country-iso-code';
import { PrizmLanguageName, PrizmLanguageShortName } from './language-names';

// prettier-ignore
type MONTHS_ARRAY = [string, string, string, string, string, string, string, string, string, string, string, string];

export interface PrizmLanguageFileUpload {
  fileUpload: {
    dropzone__title: string;
    dropzone__description: string;
    btn__select: string;
    status__idle: string;
    status__progress: string;
    status__warning: string;
    status__success: string;
  };
}
export interface PrizmLanguageInputLayoutDateRelative {
  inputLayoutDateRelative: {
    wrongFormat: string;
  };
}
export interface PrizmLanguageCron {
  cron: {
    title: string;
    submitText: string;
    resetText: string;
    startDateLabel: string;
    endDateLabel: string;
    indefinitelyLabel: string;
    day: {
      every: string;
    };
  };
}

export interface PrizmLanguageColumnSettings {
  columnSettings: {
    title: string;
    subTitle: string;
    resetBtn: string;
    showAllBtn: string;
    cancelBtn: string;
    saveBtn: string;
    fixHeaderToggle: string;
    stickyLeft: string;
    stickyRight: string;
    dropzone: string;
    mainColumns: string;
    disabledHint: string;
  };
}

export interface PrizmLanguagePaginator {
  paginator: {
    linesShown: string;
  };
}

export interface PrizmLanguageCore {
  months: MONTHS_ARRAY;
  close: string;
  nothingFoundMessage: string;
  defaultErrorMessage: string;
  /**
   * [@string word 'previous', @string word 'components']
   */
  spinTexts: [string, string];
  /**
   * Tuple with short days of week
   * starts with Mon (Monday)
   */
  shortWeekDays: [string, string, string, string, string, string, string];
  countries: Record<PrizmCountryIsoCode, string>;
}

export interface PrizmLanguageKit {
  cancel: string;
  done: string;
  more: string;
  showAll: string;
  hide: string;
  otherDate: string;
  /**
   * [@string 'choose day', @param 'choose range']
   */
  mobileCalendarTexts: [string, string];
  /**
   * [@string 'from', @param 'to']
   */
  range: [string, string];
  /**
   * [@string 'plus', @param 'minus']
   */
  countTexts: [string, string];
  time: {
    'HH:MM': string;
    'HH:MM:SS': string;
    'HH:MM:SS.MSS': string;
  };
  dateTexts: {
    DMY: string;
    MDY: string;
    YMD: string;
  };
  /**
   * short bytes, kilobytes and megabytes
   * [@string 'B', @param 'KB', @param 'MB']
   */
  digitalInformationUnits: [string, string, string];
  /**
   * [@string 'Show password', @param 'Hide password']
   */
  passwordTexts: [string, string];
  /**
   * [@string 'Copy', @param 'Copied']
   */
  copyTexts: [string, string];
  shortCalendarMonths: MONTHS_ARRAY;
  /**
   * [@string 'Previous page', @param 'Next page']
   */
  pagination: [string, string];
  fileTexts: {
    loadingError: string;
    preview: string;
    remove: string;
  };
  inputFileTexts: {
    defaultLabelSingle: string;
    defaultLabelMultiple: string;
    defaultLinkSingle: string;
    defaultLinkMultiple: string;
    maxSizeRejectionReason: string;
    formatRejectionReason: string;
    drop: string;
    dropMultiple: string;
  };
}

export interface PrizmLanguageEditor {
  colorSelectorModeNames: [string, string];
  toolbarTools: {
    undo: string;
    redo: string;
    font: string;
    fontStyle: string;
    fontSize: string;
    bold: string;
    italic: string;
    underline: string;
    strikeThrough: string;
    justify: string;
    justifyLeft: string;
    justifyCenter: string;
    justifyRight: string;
    justifyFull: string;
    list: string;
    indent: string;
    outdent: string;
    unorderedList: string;
    orderedList: string;
    quote: string;
    foreColor: string;
    hiliteColor: string;
    backColor: string;
    clear: string;
    link: string;
    attach: string;
    tex: string;
    code: string;
    image: string;
    insertHorizontalRule: string;
    superscript: string;
    subscript: string;
    insertTable: string;
    insertGroup: string;
    removeGroup: string;
    mergeCells: string;
    splitCells: string;
    rowsColumnsManaging: string;
    cellColor: string;
    setDetails: string;
    removeDetails: string;
  };
  editorTableCommands: [[string, string], [string, string], [string, string]];
  editorCodeOptions: [string, string];
  editorFontOptions: {
    small: string;
    normal: string;
    large: string;
    title: string;
    subtitle: string;
  };
}

export type PrizmLanguagePreview = {
  previewTexts: {
    rotate: string;
  };
  zoomTexts: {
    zoomOut: string;
    zoomIn: string;
    reset: string;
  };
};

export interface PrizmLanguageMeta {
  name: PrizmLanguageName;
  shortName: PrizmLanguageShortName;
}

export interface PrizmLanguage
  extends PrizmLanguageCore,
    PrizmLanguageKit,
    PrizmLanguageEditor,
    PrizmLanguagePreview,
    PrizmLanguageMeta,
    PrizmLanguageCron,
    PrizmLanguageInputLayoutDateRelative,
    PrizmLanguageFileUpload,
    PrizmLanguageColumnSettings,
    PrizmLanguagePaginator {}
