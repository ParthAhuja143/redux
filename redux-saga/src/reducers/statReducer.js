import { STATS } from "../constants";

const statsReducer = (state = {}, action) => {
    switch (action.type){
        case STATS.LOAD:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    downloads: null,
                    errors: null,
                }
            }
        case STATS.LOAD_SUCCESS:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: action.downloads,
                    errors: null,
                }
            }
        case STATS.LOAD_FAIL:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: null,
                    errors: true,
                }
            }
        default:
            return state;
    }
};

export {statsReducer};