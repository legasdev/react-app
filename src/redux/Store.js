/**
 * 
 * Сейчас не используется,
 * Псевдоаналог Redux
 * 
 * 
 */

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {

    /**
     * 
     * Private
     * 
     * 
     */
    _state: {
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
            ],
            textArea: ''
        }
    },

    _callSubscribers() {},


    /**
     * 
     * Public
     * 
     * 
     */

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscribers = observer;
    },

    /**
     * Объект непосредственного воздействия
     * 
     * @param { Object } action Объект, определяющий что делать:
     *      type: String
     *      ...props: Array
     */
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        
        this._callSubscribers(this._state);
    }
}

export default store;