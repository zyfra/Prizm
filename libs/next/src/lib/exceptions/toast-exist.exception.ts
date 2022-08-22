import {ZUI_TOAST_ID} from "../components/toast/types";

export class ZuiToastExistException extends Error {
    constructor(id: ZUI_TOAST_ID) {
        super(
          `Toast with id <${id}> already exist`
        );
    }
}
