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
    SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

// Инициализация редьюсера

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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

export const setUsersAC = users => ({type: SET_USERS, users});
export const followAC = userId => ({type: FOLLOW_USER, userId});
export const unFollowAC = userId => ({type: UNFOLLOW_USER, userId});
export const setCurrentPageAC = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});