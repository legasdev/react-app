import Axios from 'axios';


const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '76b87330-10ae-40e6-ad96-9fd11832839d'
    }
});

export const usersAPI = {

    async getUsers(currentPage = 1, pageSize = 10) {
        const res = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return res.data;
    }

}

// Эквивалент await
const _usersAPI2 = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    }

}