import {combineReducers} from 'redux'
import { errorsReducer } from './errorReducer'
import { imageReducer } from './imageReducer'
import { loadingReducer } from './loadingReducer'
import { pageReducer } from './pageReducer';
import { statsReducer } from './statReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    errors: errorsReducer,
    images: imageReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
});

export {rootReducer}