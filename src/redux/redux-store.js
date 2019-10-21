/**
 * 
 * Основной файл управления Store
 * 
 */

import { createStore, combineReducers } from "redux";

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./users-reducer";

// Комбинирование редьюсеров
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
});

// Создание Store
const store = createStore(reducers);

export default store;