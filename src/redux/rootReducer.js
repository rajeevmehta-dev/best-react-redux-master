import IceCreamReducer from './iceCream/iceCreamReducer';
import cakeReducer from './cakes/CakeReducer';
import UserReducer from './users/UserReducer';
import {combineReducers} from 'redux';

export const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:IceCreamReducer,
    users:UserReducer
})
