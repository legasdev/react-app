/**
 * 
 * Основной файл управления Store
 * 
 */

import { createStore, combineReducers } from "redux";

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

// Комбинирование редьюсеров
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

// Создание Store
const store = createStore(reducers);

export default store;