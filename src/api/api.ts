import axios, {AxiosResponse} from "axios";





const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"api-key": "a1254a8c-0530-4921-8e26-69272bb1af33"},
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 20) { // User
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    deleteUsers(userId: number) { //unfollow (User)
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    postUsers(userId: number) { //follow (User)
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId: string) { // ProfileContainer
        console.warn("Obsolete method. Please use profileAPI object")
        return profileAPI.getProfile(userId)
    },
    // getHeaderLogin() { // Header Login-button
    //     return instance.get("auth/me").then(response => response.data)
    // }
}

export const profileAPI = {

    getProfile(userId: string) { // ProfileContainer
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) { // ProfileContainer
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) { // Нет userId, т.к. обновляем статус лолько у себя самого
        return instance.put(`profile/status`, {status: status})
    },
}

export const authorizationAPI = {
    me() { // Header Login-button
        return instance.get("auth/me").then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<ResponceType>("auth/login", {email, password, rememberMe})
            .then(response => response.data)
    },
    logOut() {
        return instance.delete<ResponceType>("auth/login")
            .then(response => response.data)
    }
}




export type LoginType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}
type ResponceType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}

