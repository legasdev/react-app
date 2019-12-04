import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

// Инициализация (исходные данные)
const state = {
    postsData: [
        {key: 1, post: 'Text post 1', likes: 12},
        {key: 2, post: 'Text post 2', likes: 17},
        {key: 3, post: 'Text post 3', likes: 57},
    ],
};
let action = addPostActionCreator('test Text for new post');

it('length of posts should be incremented', () => {

    // Инициализация (исходные данные)

    // Создаем экшен
    let newState = profileReducer(state, action);

    // Ожидание (expectation)
    expect(newState.postsData.length).toBe(4);
});

it('text of post should be correct', () => {

    // Инициализация (исходные данные)

    // Создаем экшен
    let newState = profileReducer(state, action);

    // Ожидание (expectation)
    expect(newState.postsData[3].post).toBe('test Text for new post');
});

it('after deleting length of posts should be decremented', () => {

    // Инициализация (исходные данные)
    action = deletePost(1);

    // Создаем экшен
    let newState = profileReducer(state, action);

    // Ожидание (expectation)
    expect(newState.postsData.length).toBe(2);
});

it('after deleting length of posts shouldn`t be decremented if id is incorrect', () => {

    // Инициализация (исходные данные)
    action = deletePost(1000);

    // Создаем экшен
    let newState = profileReducer(state, action);

    // Ожидание (expectation)
    expect(newState.postsData.length).toBe(3);
});
