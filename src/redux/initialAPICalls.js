import store from './store';
import { getUsers } from './users/UserActions';

store.dispatch(getUsers());