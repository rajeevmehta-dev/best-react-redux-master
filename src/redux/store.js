import { createStore,applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import thunk  from 'redux-thunk';
const store=createStore(rootReducer,applyMiddleware(thunk))// we create the store.

export default store;