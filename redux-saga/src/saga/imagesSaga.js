import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { setImagesErrors, setImages } from "../actions";
import { fetchImages } from "../api";
import { IMAGE } from "../constants";

// watcher saga -> actions -> worker saga

// watcher saga
function* imageSaga(){
    yield takeEvery(IMAGE.LOAD, handleImageLoad)

}

// worker saga
function* handleImageLoad(){
    const state = yield select();
    console.log('Fetching Images...', state);
    try {
        const images = yield call(fetchImages, state.nextPage);
        yield put(setImages(images));
        console.log('Images fetched', state)
    } catch (error) {
        yield put(setImagesErrors(error.toString()));
        console.log('Images can\'t be fetched', state)
    }
}

export {imageSaga};