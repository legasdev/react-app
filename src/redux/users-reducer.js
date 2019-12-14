import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

/**
 * 
 * Редьюсер для страницы человека
 * 
 * 
 */

const 
    FOLLOW_USER = 'FOLLOW-USER',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLOWING_PROGRESS = 'TOGGLE_IS_FOLOWING_PROGRESS';

// Инициализация редьюсера

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};


// Reducer

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: action.followedStatus})
            }

        case SET_USERS:
            return { ...state, users: action.users };

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount};

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };

        case TOGGLE_IS_FOLOWING_PROGRESS:
            return { 
                ...state, 
                followingInProgress: action.isFetching 
                    ? [ ...state.followingInProgress, action.userId ]
                    : state.followingInProgress.filter(id => id !== action.userId) 
            }
        
        default: return state;
    }
    
}

export default usersReducer;


// Any private functions


// Actions

export const setUsers = users => ({type: SET_USERS, users});
export const followSuccess = (userId, followedStatus) => ({type: FOLLOW_USER, userId, followedStatus});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLOWING_PROGRESS, isFetching, userId});


// Thunks

/**
 * @description Получение пользователей с сервера 
 * 
 * @param {number} currentPage Номер страницы
 * @param {number} pageSize Количество записей на странице
 */
export const getUsers = (currentPage = 1, pageSize = 10) => async dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    const data = await usersAPI.getUsers(currentPage, pageSize);
    
    dispatch(setUsers([...data.items])); 
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
};

/**
 * @description Оформляет подписку на пользователя
 * 
 * @param {number} id - ID пользователя
 * @param {boolean} followedStatus - Статус подписки
 */
export const follow = (id, followedStatus) => async dispatch => {
    dispatch(toggleFollowingProgress(true, id));

    const res = await usersAPI.follow(id, followedStatus);
    
    dispatch(toggleFollowingProgress(false, id));
    if (!res.data.resultCode)
        dispatch(followSuccess(id, followedStatus));
    else
        console.error(res.data.messages[0]);
};