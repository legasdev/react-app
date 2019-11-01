import Axios from 'axios';
import { applyMiddleware } from 'C:/Users/Администратор/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';


const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '76b87330-10ae-40e6-ad96-9fd11832839d'
    }
});

// Действия с пользователями
export const usersAPI = {

    // Получение списка пользователей
    async getUsers(currentPage = 1, pageSize = 10) {
        const res = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return res.data;
    },

    // Подписка на пользователя
    async follow(id = 0) {
        return await instance.post(`follow/${id}`);
    },

    // Отписка от пользователя
    async unFollow(id = 0) {
        return await instance.delete(`follow/${id}`);
    },

}

// Действия с аккаунтом
export const authAPI = {

    // Информация об авторизации
    async getAuthUserData() {
        return await instance.get(`auth/me`);
    },

}

// Информация о пользователе
// открытые личные данные, посты, сообщения...
export const userDataAPI = {

    // Возвращает открытые личные данные о пользователе
    async getUserInfo(userId) {
        return await instance.get(`profile/${userId}`);
    }
    
}

// Эквивалент await
// const _usersAPI2 = {

//     getUsers(currentPage = 1, pageSize = 10) {
//         return instance
//             .get(`users?page=${currentPage}&count=${pageSize}`)
//             .then(res => res.data);
//     }

// }