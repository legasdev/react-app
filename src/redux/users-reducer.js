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
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

// Инициализация редьюсера

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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
export const follow = userId => ({type: FOLLOW_USER, userId});
export const unFollow = userId => ({type: UNFOLLOW_USER, userId});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});