import { PRIZM_TOAST_ID } from './types';
import { prizmGenerateId } from '../../util';

export function generateToastId(): PRIZM_TOAST_ID {
  return `prizm-toast-id__${prizmGenerateId()}`;
}
