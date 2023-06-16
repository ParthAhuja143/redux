import { all } from 'redux-saga/effects';
import {imageSaga} from './imagesSaga';
import { imageStatsSaga } from './statsSaga';

const rootSaga = function* (){
    yield all([imageSaga(), imageStatsSaga()]);
}

export {rootSaga};