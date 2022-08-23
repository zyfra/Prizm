import {ZUI_TOAST_ID} from "./types";
import {zuiGenerateId} from "../../util";

export function generateToastId(): ZUI_TOAST_ID {
  return `zui-toast-id__${zuiGenerateId()}`
}
