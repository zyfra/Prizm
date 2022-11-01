import { PZM_TOAST_ID } from './types';
import { pzmGenerateId } from '../../util';

export function generateToastId(): PZM_TOAST_ID {
  return `pzm-toast-id__${pzmGenerateId()}`
}
