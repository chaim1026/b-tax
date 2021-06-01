import { loadedFileActionTypes } from './loaded-file.types';
import { cleanReceivedData } from './loaded-file.utils';


const INITIAL_STATE = {
    loadedFile: null
}

const loadedFileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case loadedFileActionTypes.GET_LOADED_FILE:
            return{
                ...state,
                loadedFile: cleanReceivedData(action.payload)
            }
        default:
            return state;
    }
}

export default loadedFileReducer;