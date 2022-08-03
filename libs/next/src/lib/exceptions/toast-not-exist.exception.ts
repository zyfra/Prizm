import {ZUI_TOAST_ID} from "../components/toast/types";

export class ZuiToastNotExistException extends Error {
    constructor(id: ZUI_TOAST_ID) {
        super(
          `Toast with id <${id}> does not exist`
        );
    }
}
