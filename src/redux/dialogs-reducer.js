/**
 * 
 * Редьюсер для страницы диалогов
 * 
 * 
 */

const
    ADD_NEW_MSG = 'ADD_NEW_MSG';

const initialState = {
    dialogsData: [
        {key: 1, userName: 'User 1'},
        {key: 2, userName: 'User 2'},
        {key: 3, userName: 'User 3'},
        {key: 4, userName: 'User 4'},
        {key: 5, userName: 'User 5'},
    ],
    msgs: [
        {key: 1, msg: 'Сообщение 1'},
        {key: 2, msg: 'Сообщение 2'},
        {key: 3, msg: 'Сообщение 3'},
        {key: 4, msg: 'Сообщение 4'},
        {key: 5, msg: 'Сообщение 5'},
        {key: 6, msg: 'Сообщение 6'},
    ],
};

// Reducer

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_MSG:
            return addNewMsg(state, action.msg);

        default: return state;
    }
}

export default dialogsReducer;


// Any functions

function addNewMsg(state, msg) {
    return {
        ...state,
        msgs: [...state.msgs, { key: 9, msg }],
    };
}


// Actions

export const addMsgCreator = msg => ({type: ADD_NEW_MSG, msg});