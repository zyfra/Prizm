import { prizmGenerateId } from '@prizm-ui/helpers';
import { PRIZM_TOAST_ID } from './types';

export function generateToastId(): PRIZM_TOAST_ID {
  return `prizm-toast-id__${prizmGenerateId()}`;
}
