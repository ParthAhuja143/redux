import { call, fork, put, select, take } from "@redux-saga/core/effects";
import { loadImageStats, setImageStats, setImageStatsErrors } from "../actions";
import { fetchImageStats } from "../api";
import { IMAGE } from "../constants";

function* imageStatsSaga(){
    while(true){
        const {images} = yield take(IMAGE.LOAD_SUCCESS);
        
        for(let i = 0 ; i < images.length ; i++){
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}

function* handleStatsRequest(id){
    const state = yield select();
    console.log('Fetching stats for: ', id, state);
    for(let i = 0 ; i < 3 ; i++){
        try {
            yield put(loadImageStats(id));
            const response = yield call(fetchImageStats, id);
            yield put(setImageStats(id, response.downloads.total));
            console.log('Stats fetched for: ', id, state)
            return;
        } catch (error) {
        }
    }

    yield put(setImageStatsErrors(id));
}

export {imageStatsSaga};