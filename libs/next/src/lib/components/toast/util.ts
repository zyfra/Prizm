import {ZUI_TOAST_ID} from "./types";
import {generateId} from "../../util";

export function generateToastId(): ZUI_TOAST_ID {
  return `zui-toast-id__${generateId()}`
}
