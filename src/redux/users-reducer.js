import { usersAPI } from "../api/api";

/**
 * 
 * Редьюсер для страницы человека
 * 
 * 
 */

const 
    FOLLOW_USER = 'FOLLOW-USER',
    UNFOLLOW_USER = 'UNFOLLOW-USER',
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
            return followForUser(state, action.userId);

        case UNFOLLOW_USER:
            return unFollowForUser(state, action.userId);

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

function followForUser(state, userId) {
    return {
        ...state,
        users: state.users.map( item => {
            return item.id === userId 
                ? {...item, followed: true}
                : item;
        })
    };
}

function unFollowForUser(state, userId) {
    return {
        ...state,
        users: state.users.map( item => {
            return item.id === userId 
                ? {...item, followed: false}
                : item;
        })
    };
}


// Actions

export const setUsers = users => ({type: SET_USERS, users});
export const followSuccess = userId => ({type: FOLLOW_USER, userId});
export const unFollowSuccess = userId => ({type: UNFOLLOW_USER, userId});
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
export const getUsers = (currentPage = 1, pageSize = 10) => dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    usersAPI
        .getUsers(currentPage, pageSize)
        .then( data => { 
            dispatch(setUsers([...data.items])); 
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        });
}

/**
 * @description Оформляет подписку на пользователя
 * 
 * @param {number} id ID пользователя
 */
export const follow = id => dispatch => {
    dispatch(toggleFollowingProgress(true, id));

    usersAPI
        .follow(id)
        .then(res => {
            dispatch(toggleFollowingProgress(false, id));
            if (!res.data.resultCode)
                dispatch(followSuccess(id));
        });
}

/**
 * @description Снимает подписку с пользователя
 * 
 * @param {number} id ID пользователя
 */
export const unFollow = id => dispatch => {
    dispatch(toggleFollowingProgress(true, id));
    
    usersAPI
        .unFollow(id)
        .then(res => {
            dispatch(toggleFollowingProgress(false, id));
            if (!res.data.resultCode)
                dispatch(followSuccess(id));
        });
}