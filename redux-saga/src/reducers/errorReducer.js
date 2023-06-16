import { IMAGE } from "../constants";

const errorsReducer = (state = null, action) => {
    switch (action.type) {
        case IMAGE.LOAD:
            return null;
        
        case IMAGE.LOAD_SUCCESS:
            return null;

        case IMAGE.LOAD_FAIL:
            return state;

        default:
            return state;
    }
}

export {errorsReducer};