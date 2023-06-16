import { IMAGE } from "../constants";

const pageReducer = (state= 0, action) => {
    switch (action.type) {
        case IMAGE.LOAD_SUCCESS:
            return state+1;

        default:
            return state;
    }
};

export {pageReducer};