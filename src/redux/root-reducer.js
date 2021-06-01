import { combineReducers } from 'redux';

import loadedFileReducer from './loaded-file/loaded-file.reducer';

export default combineReducers({
    loadedFile: loadedFileReducer
});