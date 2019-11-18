import { authAPI } from "../api/api";

/**
 * 
 * Редьюсер для страницы человека
 * 
 * 
 */

const 
    SET_USER_DATA = 'SET_USER_DATA';

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
    
}

export default authReducer;

// Any private functions


// Actions

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});


// Thunks

// Проверка на логин
export const getAuthUserData = () => dispatch => {
    authAPI
        .getAuthUserData()
        .then(res => {
            if (!res.data.resultCode) {
                const {id, email, login} = res.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

// Попытка логина
export const login = (email, password, rememberMe) => dispatch => {
    authAPI
        .login(email, password, rememberMe)
        .then(res => {
            if (!res.data.resultCode) {
                dispatch(getAuthUserData());
            }
        });
}

// Попытка разлогирования
export const logout = () => dispatch => {
    authAPI
        .logout()
        .then(res => {
            if (!res.data.resultCode) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}