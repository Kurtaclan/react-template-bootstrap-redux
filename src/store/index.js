import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { exampleReducer } from './example';
import { exampleSaga } from './example/sagas';

export function* rootSaga() {
    yield all([
        fork(exampleSaga)
        // `fork()` any other store sagas down here...
    ])
}

export default function configureStore(
    history,
    initialState
) {
    const rootReducer = combineReducers({
        example: exampleReducer,
        router: connectRouter(history),
    });
    const composeEnhancers = composeWithDevTools({})
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    )
    sagaMiddleware.run(rootSaga)
    return store
}