import { renderTree } from "../render";

const state = {
    profilePage: {
        postsData: [
            {key: 1, post: 'Text post 1', likes: 12},
            {key: 2, post: 'Text post 2', likes: 17},
            {key: 3, post: 'Text post 3', likes: 57},
        ],
        newPostText: ''
    },
    dialogsPage: {
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
        ]
    }
};

export const addPost = (postMsg) => {
    const newPost = {
        key: 5,
        post: postMsg,
        likes: 0
    }

    state.profilePage.postsData.push(newPost);

    renderTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;

    renderTree(state);
}

export default state;