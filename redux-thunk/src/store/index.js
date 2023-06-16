import { applyMiddleware, compose, createStore } from "redux"
import { rootReducer } from "../reducers"
import thunk from 'redux-thunk';

const configureStore = () => {
    const store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(thunk), 
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ));

    return store;
}

export {configureStore};

