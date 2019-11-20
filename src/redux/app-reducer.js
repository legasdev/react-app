import { getAuthUserData } from "./auth-reducer";

/**
 * 
 * Редьюсер для приложения
 * 
 * 
 */

const 
    INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

// Инициализация редьюсера

const initialState = {
    initialized: false,     //инициализация
};

// Reducer

const appReducer = (state = initialState, action) => {

switch (action.type) {
    case INITIALIZED_SUCCESS:
        return { 
            ...state,
            initialized: true
        };

    default: return state;
}

}

export default appReducer;


// Any private functions


// Actions

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


// Thunks

export const initializedApp = () => async dispatch => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess());
}