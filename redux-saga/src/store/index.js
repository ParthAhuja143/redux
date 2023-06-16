import { applyMiddleware, compose, createStore } from "redux"
import { rootReducer } from "../reducers"
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "../saga";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(sagaMiddleware), 
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ));

    sagaMiddleware.run(rootSaga)

    return store;
}

export {configureStore};

