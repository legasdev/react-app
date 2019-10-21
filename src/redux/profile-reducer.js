/**
 * 
 * Редьюсер для страницы профиля
 * 
 * 
 */

const 
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
    ADD_POST = 'ADD_POST';

// Инициализация редьюсера

const initialState = {
    postsData: [
        {key: 1, post: 'Text post 1', likes: 12},
        {key: 2, post: 'Text post 2', likes: 17},
        {key: 3, post: 'Text post 3', likes: 57},
    ],
    newPostText: ''
};

// Reducer

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            return addPost(state);

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};
        
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

export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});
