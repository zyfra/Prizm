import { PRIZM_TOAST_ID } from '../components/toast/types';

export class PrizmToastExistException extends Error {
  constructor(id: PRIZM_TOAST_ID) {
    super(`Toast with id <${id}> already exist`);
  }
}
