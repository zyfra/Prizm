import { PrizmLanguageFileUpload } from '../../interfaces';

export const PRIZM_RUSSIAN_FILE_UPLOAD: PrizmLanguageFileUpload = {
  fileUpload: {
    dropzone__description: 'Выберите файл или перетащите его в эту область',
    dropzone__title: 'Загрузка файлов',
    btn__select: 'Выбрать',
    btn__select_hint_error: 'Достигнут максимум количества загруженных файлов',
    file_size__byte: 'Б',
    file_size__kb: 'Кбайт',
    file_size__mb: 'Мбайт',
    idle: 'Ожидание загрузки',
    progress: 'Загрузка',
    warning: 'Ошибка',
    success: 'Загружено',
  },
};

export const PRIZM_ENGLISH_FILE_UPLOAD: PrizmLanguageFileUpload = {
  fileUpload: {
    dropzone__description: 'Select a file or drag it to this area',
    dropzone__title: 'File upload',
    btn__select: 'Browse',
    btn__select_hint_error: 'The maximum number of uploaded files has been reached',
    file_size__byte: 'byte/bytes',
    file_size__kb: 'KB',
    file_size__mb: 'MB',
    idle: 'Waiting to upload',
    progress: 'Uploading',
    warning: 'Error',
    success: 'Uploaded',
  },
};
