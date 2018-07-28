import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducers/';
import { persistState } from 'redux-devtools';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../Sagas/'

export default function configureStore(initialState) {


    // create the saga middleware
    const sagaMiddleware = createSagaMiddleware();

    let middleware = applyMiddleware(sagaMiddleware);
    let enhancer;

    if (process.env.NODE_ENV !== 'production') {

        let middlewares = [require('redux-immutable-state-invariant')(),sagaMiddleware];
        middleware = applyMiddleware(...middlewares);

        let getDebugSessionKey = function () {
            // By default we try to read the key from ?debug_session=<key> in the address bar
            const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
            return (matches && matches.length) ? matches[1] : null;
        };

        enhancer = compose(

            // Middleware we want to use in development
            middleware,
            window.devToolsExtension ?
                window.devToolsExtension() :
                require('../dev-tools/DevTools').default.instrument(),

            // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
            persistState(getDebugSessionKey())
        );
    } else {
        enhancer = compose(
            middleware
        );
    }

    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(mySaga)
    /* store.subscribe(() => {
       console.log(store.getState());
     });*/

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('../Reducers', () =>
            store.replaceReducer(require('../Reducers').default)
        );
    }

    return store;
}