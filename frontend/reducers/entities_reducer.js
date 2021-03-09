import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import albumsReducer from './albums_reducer';
import songsReducer from './songs_reducer';
import artistsReducer from './artists_reducer';
import playlistReducer from './playlist_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    albums: albumsReducer,
    songs: songsReducer,
    artists: artistsReducer,
    playlists: playlistReducer,
    search: searchReducer,
});

export default entitiesReducer;