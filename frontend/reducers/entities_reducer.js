import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import albumsReducer from './albums_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    albums: albumsReducer,
});

export default entitiesReducer;