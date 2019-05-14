import React, {Component} from 'react'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import {applyMiddleware, createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import rootReducer from './general/reducers'
import rootSaga from './general/sagas'
import RootScreen from './screens/Root/Root.Screen'

const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RootScreen/>
                </PersistGate>
            </Provider>
        )
    }
}
