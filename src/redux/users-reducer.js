/**
 * 
 * Редьюсер для страницы человека
 * 
 * 
 */

const 
    FOLLOW_USER = 'FOLLOW-USER',
    UNFOLLOW_USER = 'UNFOLLOW-USER',
    SET_USERS = 'SET-USERS';

// Инициализация редьюсера

const initialState = {
    users: []
};

// Reducer

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return followForUser(state, action.userId);

        case UNFOLLOW_USER:
            return unFollowForUser(state, action.userId);

        case SET_USERS:
            return { ...state, users: [ ...state.users, ...action.users ] }
        
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

export const setUsersAC = (users) => ({type: SET_USERS, users});
export const followAC = (userId) => ({type: FOLLOW_USER, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW_USER, userId});