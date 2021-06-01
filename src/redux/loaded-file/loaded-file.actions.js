import { loadedFileActionTypes } from  './loaded-file.types';

export const getLoadedFile = loadedFile => ({
    type: loadedFileActionTypes.GET_LOADED_FILE,
    payload: loadedFile
});