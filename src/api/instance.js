

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '76b87330-10ae-40e6-ad96-9fd11832839d'
    }
});