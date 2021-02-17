import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import albumsReducer from './albums_reducer';
import songsReducer from './songs_reducer';
import artists_reducer from './artists_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    albums: albumsReducer,
    songs: songsReducer,
    artists: artists_reducer,
});

export default entitiesReducer;