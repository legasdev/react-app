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
                ...action.data,
                isAuth: true
            };

        default: return state;
    }
    
}

export default authReducer;

// Any private functions


// Actions

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});