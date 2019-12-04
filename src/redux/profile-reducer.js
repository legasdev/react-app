import { profileAPI } from "../api/api";

/**
 * 
 * Редьюсер для страницы профиля
 * 
 * 
 */

const
    ADD_POST = 'ADD_POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_USER_STATUS = 'SET_USER_STATUS',
    DELETE_POST = 'DELETE_POST';

// Инициализация редьюсера

const initialState = {
    postsData: [
        {key: 1, post: 'Text post 1', likes: 12},
        {key: 2, post: 'Text post 2', likes: 17},
        {key: 3, post: 'Text post 3', likes: 57},
    ],
    profile: null,
    status: '',
};

// Reducer

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            return addPost(state, action.newPostText);

        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };

        case SET_USER_STATUS:
            return { ...state, status: action.status }

        case DELETE_POST:
            return { ...state, postsData: state.postsData.filter(item =>  item.key !== action.id) }
        
        default: return state;
    }
    
}

export default profileReducer;


// Any private functions

function addPost(state, newPostText) {
    return {
        ...state,
        postsData: [...state.postsData, { key: 5, post: newPostText, likes: 0 }],
    };
}


// Actions

export const addPostActionCreator = newPostText => ({type: ADD_POST, newPostText});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = status => ({type: SET_USER_STATUS, status});
export const deletePost = id => ({type: DELETE_POST, id});


// Thunks

/**
 * @description Получить открытую информацию о пользователе
 * 
 * @param {number} id ID запрашиваемого пользователя 
 */
export const getUserProfile = id => async dispatch => {
    const res = await profileAPI.getProfile(id);
    dispatch(setUserProfile(res.data));
};

/**
 * @description Получить статус пользователя
 * 
 * @param {number} id ID запрашиваемого пользователя 
 */
export const getUserStatus = id => async dispatch => {
    const res = await profileAPI.getUserStatus(id);
    dispatch(setUserStatus(res.data));
};

/**
 * @description Изменить статус своего пользователя
 * 
 * @param {string} status Новый статус пользователя
 */
export const updateUserStatus = status => async dispatch => {
    const res = await profileAPI.updateUserStatus(status);
    
    if (!res.data.resultCode)
        dispatch(setUserStatus(status));
};