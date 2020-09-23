import { createStore , applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import faxianReducer from './reducers/faxianReducer'
import indexReducer from './reducers/indexReducer'
import UserReducer from './reducers/userReducer'

import indexSaga from './sagas/indexSaga'
import userSaga from './sagas/userSaga'
import faxianSaga from './sagas/faxianSaga'

const faxianSagaMiddleware = createSagaMiddleware()
export const faxianStore = createStore(faxianReducer , applyMiddleware(faxianSagaMiddleware))
faxianSagaMiddleware.run(faxianSaga)

const indexSagaMiddleware = createSagaMiddleware()
export const indexStore = createStore(indexReducer , applyMiddleware(indexSagaMiddleware))
indexSagaMiddleware.run(indexSaga)

const userSagaMiddleware = createSagaMiddleware()
export const userStore = createStore(UserReducer , applyMiddleware(userSagaMiddleware))
userSagaMiddleware.run(userSaga)