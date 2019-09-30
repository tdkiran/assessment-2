import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

// init store
export function initializeStore() {
    return createStore(
        reducer,
        composeWithDevTools(applyMiddleware())
    )
}