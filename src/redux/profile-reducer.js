import { profileAPI } from "../api/api";

/**
 * 
 * Редьюсер для страницы профиля
 * 
 * 
 */

const 
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
    ADD_POST = 'ADD_POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_USER_STATUS = 'SET_USER_STATUS';

// Инициализация редьюсера

const initialState = {
    postsData: [
        {key: 1, post: 'Text post 1', likes: 12},
        {key: 2, post: 'Text post 2', likes: 17},
        {key: 3, post: 'Text post 3', likes: 57},
    ],
    newPostText: '',
    profile: null,
    status: '',
};

// Reducer

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            return addPost(state);

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};

        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };

        case SET_USER_STATUS:
            return { ...state, status: action.status }
        
        default: return state;
    }
    
}

export default profileReducer;


// Any private functions

function addPost(state) {
    return {
        ...state,
        postsData: [...state.postsData, { key: 5, post: state.newPostText, likes: 0 }],
        newPostText: ''
    };
}


// Actions

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = status => ({type: SET_USER_STATUS, status});


// Thunks

/**
 * @description Получить открытую информацию о пользователе
 * 
 * @param {number} id ID запрашиваемого пользователя 
 */
export const getUserProfile = id => dispatch => {
    profileAPI
        .getProfile(id)
        .then( res => {
            dispatch(setUserProfile(res.data));
        });
}

/**
 * @description Получить статус пользователя
 * 
 * @param {number} id ID запрашиваемого пользователя 
 */
export const getUserStatus = id => dispatch => {
    profileAPI
        .getUserStatus(id)
        .then( res => {
            dispatch(setUserStatus(res.data));
        });
}

/**
 * @description Изменить статус своего пользователя
 * 
 * @param {string} status Новый статус пользователя
 */
export const updateUserStatus = status => dispatch => {
    profileAPI
        .updateUserStatus(status)
        .then( res => {
            if (res.data.resultCode === 0)
                dispatch(setUserStatus(status));
        });
}