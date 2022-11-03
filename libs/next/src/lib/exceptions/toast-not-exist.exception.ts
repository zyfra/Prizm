import {PZM_TOAST_ID} from "../components/toast/types";

export class PrizmToastNotExistException extends Error {
    constructor(id: PZM_TOAST_ID) {
        super(
          `Toast with id <${id}> does not exist`
        );
    }
}
