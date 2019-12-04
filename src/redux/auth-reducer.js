import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

/**
 * 
 * Редьюсер для авторизации
 * 
 * 
 */

const 
    SET_USER_DATA = 'samurai/auth/SET_USER_DATA';

// Инициализация редьюсера

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

// Reducer

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return { 
                ...state,
                ...action.payload
            };

        default: return state;
    }
    
};

export default authReducer;

// Any private functions


// Actions

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});


// Thunks

// Проверка на логин
export const getAuthUserData = () => async dispatch => {
    const res = await authAPI.getAuthUserData();
    
    if (!res.data.resultCode) {
        const {id, email, login} = res.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

// Попытка логина
export const login = (email, password, rememberMe) => async dispatch => {
    const res = await authAPI.login(email, password, rememberMe);

    if (!res.data.resultCode) {
        dispatch(getAuthUserData());
    } else {
        const msgError = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: msgError}));
    }
};

// Попытка разлогирования
export const logout = () => async dispatch => {
    let res = await authAPI.logout();
    
    if (!res.data.resultCode) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};