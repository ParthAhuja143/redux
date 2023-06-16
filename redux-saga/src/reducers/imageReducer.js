import { IMAGE } from "../constants";

const imageReducer = (state = [], action) => {
    switch (action.type) {
        case IMAGE.LOAD_SUCCESS: 
            return [...state, ...action.images];

        case IMAGE.LOAD_FAIL: 
            return state;

        default:
            return state;
    }
}

export { imageReducer };