import { PZM_TOAST_ID } from './types';
import { pzmGenerateId } from '../../util';

export function generateToastId(): PZM_TOAST_ID {
  return `zui-toast-id__${pzmGenerateId()}`
}
