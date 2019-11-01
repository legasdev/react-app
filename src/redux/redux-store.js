/**
 * 
 * Основной файл управления Store
 * 
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


// Комбинирование редьюсеров
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

// Создание Store
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;