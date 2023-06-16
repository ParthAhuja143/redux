import { IMAGE } from "../constants";

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case IMAGE.LOAD:
            return true;
        
        case IMAGE.LOAD_SUCCESS:
            return false;

        case IMAGE.LOAD_FAIL:
            return false;

        default:
            return state;
    }
}

export {loadingReducer};